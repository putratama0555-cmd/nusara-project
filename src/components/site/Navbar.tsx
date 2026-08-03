import { useState } from "react";
import { Menu, Compass, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ThemeToggle } from "./ThemeToggle";
import { Link } from "@tanstack/react-router";
import { useAuth } from "@/lib/auth";

const links = [
  { label: "Flights", href: "#search" },
  { label: "Hotels", href: "#hotels" },
  { label: "Trains", href: "#search" },
  { label: "Bus", href: "#search" },
  { label: "Car Rental", href: "#search" },
  { label: "Holiday Packages", href: "#destinations" },
  { label: "Attractions", href: "#destinations" },
  { label: "Promo", href: "#promo" },
  { label: "Help Center", href: "#faq" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();
  const initials = user
    ? user.name
        .split(" ")
        .map((p) => p[0])
        .slice(0, 2)
        .join("")
        .toUpperCase()
    : "";

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:px-8 xl:grid-cols-[auto_minmax(0,1fr)_auto]">
        <a href="#top" className="flex min-w-0 items-center gap-2">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-brand text-primary-foreground">
            <Compass className="h-5 w-5" />
          </span>
          <span className="truncate font-display text-lg font-semibold tracking-tight">Nusara</span>
        </a>

        <div className="hidden items-center justify-center gap-0.5 xl:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          {user ? (
            <div className="flex items-center gap-2">
              <div className="hidden items-center gap-2 sm:flex">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-gradient-brand text-[0.75rem] font-semibold text-primary-foreground">
                    {initials}
                  </AvatarFallback>
                </Avatar>
                <span className="max-w-32 truncate text-sm font-medium text-foreground">
                  {user.name}
                </span>
              </div>
              <Button
                variant="ghost"
                className="hidden rounded-xl sm:inline-flex"
                onClick={() => logout()}
              >
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            </div>
          ) : (
            <>
              <Button variant="ghost" className="hidden rounded-xl sm:inline-flex" asChild>
                <Link to="/login">Login</Link>
              </Button>
              <Button className="hidden rounded-xl sm:inline-flex" asChild>
                <Link to="/login">Register</Link>
              </Button>
            </>
          )}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-xl xl:hidden" aria-label="Open menu">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="mt-8 flex flex-col gap-1">
                {user && (
                  <div className="mb-2 flex items-center gap-2 rounded-lg bg-secondary/60 px-3 py-2.5">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-gradient-brand text-[0.75rem] font-semibold text-primary-foreground">
                        {initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium text-foreground">{user.name}</p>
                      <p className="truncate text-xs text-muted-foreground">{user.email}</p>
                    </div>
                  </div>
                )}
                {links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    {l.label}
                  </a>
                ))}
                <div className="mt-4 flex flex-col gap-2">
                  {user ? (
                    <Button
                      variant="outline"
                      className="rounded-xl"
                      onClick={() => {
                        logout();
                        setOpen(false);
                      }}
                    >
                      <LogOut className="h-4 w-4" />
                      Logout
                    </Button>
                  ) : (
                    <>
                      <Button variant="outline" className="rounded-xl" asChild>
                        <Link to="/login" onClick={() => setOpen(false)}>
                          Login
                        </Link>
                      </Button>
                      <Button className="rounded-xl" asChild>
                        <Link to="/login" onClick={() => setOpen(false)}>
                          Register
                        </Link>
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
