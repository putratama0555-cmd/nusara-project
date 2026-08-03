import { useState } from "react";
import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Compass, ArrowLeft, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth, DEMO_ACCOUNT } from "@/lib/auth";

const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Enter a valid email address"),
  password: z.string().min(1, "Password is required"),
});

const registerSchema = loginSchema.extend({
  name: z.string().min(2, "Enter your full name"),
});

type LoginValues = z.infer<typeof loginSchema>;
type RegisterValues = z.infer<typeof registerSchema>;

const title = "Login — Nusara";
const description = "Sign in to your Nusara account to book flights, hotels and more.";

export const Route = createFileRoute("/login")({
  component: LoginPage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
});

function LoginPage() {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [formError, setFormError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { login, register } = useAuth();

  const isLogin = mode === "login";

  const form = useForm<LoginValues | RegisterValues>({
    resolver: zodResolver(isLogin ? loginSchema : registerSchema),
    defaultValues: { name: "", email: "", password: "" },
  });

  const onSubmit = (values: LoginValues | RegisterValues) => {
    setFormError(null);
    const result = isLogin
      ? login(values.email, values.password)
      : register("name" in values ? values.name : "", values.email, values.password);
    if (result.ok) {
      navigate({ to: "/" });
    } else {
      setFormError(result.message);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-2">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-brand text-primary-foreground">
            <Compass className="h-5 w-5" />
          </span>
          <span className="truncate font-display text-lg font-semibold tracking-tight">Nusara</span>
        </Link>
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>
      </header>

      <main className="flex flex-1 items-center justify-center px-4 pb-16">
        <div className="w-full max-w-md">
          <Card className="border-border/60 shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="font-display text-2xl font-bold tracking-tight">
                {isLogin ? "Welcome back" : "Create your account"}
              </CardTitle>
              <CardDescription>
                {isLogin
                  ? "Sign in to continue your travel plans."
                  : "Sign up to start booking in minutes."}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs
                value={mode}
                onValueChange={(v) => {
                  setMode(v as "login" | "register");
                  setFormError(null);
                  form.reset({ name: "", email: "", password: "" });
                }}
              >
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="login">Login</TabsTrigger>
                  <TabsTrigger value="register">Register</TabsTrigger>
                </TabsList>
              </Tabs>

              <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 space-y-4">
                {!isLogin && (
                  <div className="space-y-2">
                    <Label htmlFor="name">Full name</Label>
                    <Input
                      id="name"
                      placeholder="Jane Doe"
                      autoComplete="name"
                      {...form.register("name")}
                    />
                    {"name" in form.formState.errors && form.formState.errors.name && (
                      <p className="text-[0.8rem] font-medium text-destructive">
                        {form.formState.errors.name.message}
                      </p>
                    )}
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    {...form.register("email")}
                  />
                  {form.formState.errors.email && (
                    <p className="text-[0.8rem] font-medium text-destructive">
                      {form.formState.errors.email.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    autoComplete={isLogin ? "current-password" : "new-password"}
                    {...form.register("password")}
                  />
                  {form.formState.errors.password && (
                    <p className="text-[0.8rem] font-medium text-destructive">
                      {form.formState.errors.password.message}
                    </p>
                  )}
                </div>

                {formError && (
                  <p className="rounded-lg bg-destructive/10 px-3 py-2 text-sm font-medium text-destructive">
                    {formError}
                  </p>
                )}

                <Button type="submit" className="w-full rounded-xl" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : isLogin ? (
                    "Login"
                  ) : (
                    "Create account"
                  )}
                </Button>
              </form>

              {isLogin && (
                <div className="mt-6 rounded-lg border border-dashed border-border bg-muted/50 p-4 text-center">
                  <p className="text-xs font-medium text-muted-foreground">Demo account</p>
                  <p className="mt-1 text-sm text-foreground">
                    {DEMO_ACCOUNT.email} / {DEMO_ACCOUNT.password}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
