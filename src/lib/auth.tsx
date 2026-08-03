import { createContext, useCallback, useContext, useState, type ReactNode } from "react";

export type AuthUser = {
  name: string;
  email: string;
};

type StoredAccount = AuthUser & { password: string };

type AuthContextValue = {
  user: AuthUser | null;
  login: (email: string, password: string) => { ok: true } | { ok: false; message: string };
  register: (name: string, email: string, password: string) => { ok: true } | { ok: false; message: string };
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

const USER_KEY = "nusara-user";
const ACCOUNTS_KEY = "nusara-accounts";
export const DEMO_ACCOUNT: StoredAccount = {
  name: "Demo User",
  email: "demo@nusara.com",
  password: "demo123",
};

function readAccounts(): StoredAccount[] {
  if (typeof window === "undefined") return [DEMO_ACCOUNT];
  try {
    const raw = window.localStorage.getItem(ACCOUNTS_KEY);
    const stored: StoredAccount[] = raw ? JSON.parse(raw) : [];
    return stored.some((a) => a.email === DEMO_ACCOUNT.email) ? stored : [DEMO_ACCOUNT, ...stored];
  } catch {
    return [DEMO_ACCOUNT];
  }
}

function writeAccounts(accounts: StoredAccount[]) {
  window.localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts));
}

function readUser(): AuthUser | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(USER_KEY);
    return raw ? (JSON.parse(raw) as AuthUser) : null;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(readUser);

  const login = useCallback((email: string, password: string) => {
    const accounts = readAccounts();
    const account = accounts.find(
      (a) => a.email.toLowerCase() === email.trim().toLowerCase(),
    );
    if (!account || account.password !== password) {
      return { ok: false as const, message: "Invalid email or password." };
    }
    const nextUser = { name: account.name, email: account.email };
    window.localStorage.setItem(USER_KEY, JSON.stringify(nextUser));
    setUser(nextUser);
    return { ok: true as const };
  }, []);

  const register = useCallback((name: string, email: string, password: string) => {
    const normalizedEmail = email.trim().toLowerCase();
    const accounts = readAccounts();
    if (accounts.some((a) => a.email.toLowerCase() === normalizedEmail)) {
      return { ok: false as const, message: "An account with this email already exists." };
    }
    const account: StoredAccount = { name: name.trim(), email: normalizedEmail, password };
    writeAccounts([account, ...accounts]);
    const nextUser: AuthUser = { name: account.name, email: account.email };
    window.localStorage.setItem(USER_KEY, JSON.stringify(nextUser));
    setUser(nextUser);
    return { ok: true as const };
  }, []);

  const logout = useCallback(() => {
    window.localStorage.removeItem(USER_KEY);
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return ctx;
}
