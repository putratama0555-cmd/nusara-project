import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

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

const storage = {
  get<T>(key: string): T | null {
    try {
      const raw = window.localStorage.getItem(key);
      return raw ? (JSON.parse(raw) as T) : null;
    } catch {
      return null;
    }
  },
  set(key: string, value: unknown): boolean {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch {
      return false;
    }
  },
  remove(key: string) {
    try {
      window.localStorage.removeItem(key);
    } catch {
      // ignore
    }
  },
};

function baseAccounts(): StoredAccount[] {
  return [DEMO_ACCOUNT];
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const accountsRef = useRef<StoredAccount[]>(baseAccounts());

  useEffect(() => {
    const stored = storage.get<AuthUser>(USER_KEY);
    if (stored) setUser(stored);
    const accounts = storage.get<StoredAccount[]>(ACCOUNTS_KEY) ?? [];
    accountsRef.current = accounts.some((a) => a.email === DEMO_ACCOUNT.email)
      ? accounts
      : [DEMO_ACCOUNT, ...accounts];
  }, []);

  const login = useCallback((email: string, password: string) => {
    const account = accountsRef.current.find(
      (a) => a.email.toLowerCase() === email.trim().toLowerCase(),
    );
    if (!account || account.password !== password) {
      return { ok: false as const, message: "Invalid email or password." };
    }
    const nextUser = { name: account.name, email: account.email };
    setUser(nextUser);
    storage.set(USER_KEY, nextUser);
    return { ok: true as const };
  }, []);

  const register = useCallback((name: string, email: string, password: string) => {
    const normalizedEmail = email.trim().toLowerCase();
    if (accountsRef.current.some((a) => a.email.toLowerCase() === normalizedEmail)) {
      return { ok: false as const, message: "An account with this email already exists." };
    }
    const account: StoredAccount = { name: name.trim(), email: normalizedEmail, password };
    accountsRef.current = [account, ...accountsRef.current];
    storage.set(ACCOUNTS_KEY, accountsRef.current);
    const nextUser: AuthUser = { name: account.name, email: account.email };
    setUser(nextUser);
    storage.set(USER_KEY, nextUser);
    return { ok: true as const };
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    storage.remove(USER_KEY);
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
