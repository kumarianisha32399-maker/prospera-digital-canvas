import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { ADMIN_CREDENTIALS, AUTH_KEY, STORAGE_KEY, initialData } from "./portfolio-data";

const PortfolioContext = createContext(null);

function mergeWithDefaults(stored) {
  if (!stored || typeof stored !== "object") return initialData;
  const merged = { ...initialData };
  Object.keys(initialData).forEach((key) => {
    const value = stored[key];
    if (value === undefined || value === null) return;
    if (Array.isArray(initialData[key])) {
      merged[key] = Array.isArray(value) ? value : initialData[key];
    } else if (typeof initialData[key] === "object") {
      merged[key] = { ...initialData[key], ...value };
    } else {
      merged[key] = value;
    }
  });
  return merged;
}

export function newId(prefix) {
  return `${prefix}-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
}

export function PortfolioProvider({ children }) {
  const [data, setData] = useState(initialData);
  const [isAdmin, setIsAdmin] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setData(mergeWithDefaults(JSON.parse(raw)));
      setIsAdmin(window.localStorage.getItem(AUTH_KEY) === "active");
    } catch {
      setData(initialData);
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {
      /* storage unavailable — demo continues in memory */
    }
  }, [data, hydrated]);

  const updateSection = useCallback((section, patch) => {
    setData((prev) => ({
      ...prev,
      [section]: Array.isArray(patch) ? patch : { ...prev[section], ...patch },
    }));
  }, []);

  const addItem = useCallback((section, item) => {
    setData((prev) => ({ ...prev, [section]: [...prev[section], item] }));
  }, []);

  const updateItem = useCallback((section, id, patch) => {
    setData((prev) => ({
      ...prev,
      [section]: prev[section].map((item) => (item.id === id ? { ...item, ...patch } : item)),
    }));
  }, []);

  const removeItem = useCallback((section, id) => {
    setData((prev) => ({ ...prev, [section]: prev[section].filter((item) => item.id !== id) }));
  }, []);

  const moveItem = useCallback((section, id, direction) => {
    setData((prev) => {
      const list = [...prev[section]];
      const index = list.findIndex((item) => item.id === id);
      const target = index + direction;
      if (index < 0 || target < 0 || target >= list.length) return prev;
      [list[index], list[target]] = [list[target], list[index]];
      return { ...prev, [section]: list };
    });
  }, []);

  const resetAll = useCallback(() => {
    setData(initialData);
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
  }, []);

  const login = useCallback((username, password) => {
    const ok =
      username.trim().toLowerCase() === ADMIN_CREDENTIALS.username &&
      password === ADMIN_CREDENTIALS.password;
    if (ok) {
      setIsAdmin(true);
      try {
        window.localStorage.setItem(AUTH_KEY, "active");
      } catch {
        /* ignore */
      }
    }
    return ok;
  }, []);

  const logout = useCallback(() => {
    setIsAdmin(false);
    try {
      window.localStorage.removeItem(AUTH_KEY);
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo(
    () => ({
      data,
      isAdmin,
      hydrated,
      updateSection,
      addItem,
      updateItem,
      removeItem,
      moveItem,
      resetAll,
      login,
      logout,
    }),
    [data, isAdmin, hydrated, updateSection, addItem, updateItem, removeItem, moveItem, resetAll, login, logout],
  );

  return <PortfolioContext.Provider value={value}>{children}</PortfolioContext.Provider>;
}

export function usePortfolio() {
  const ctx = useContext(PortfolioContext);
  if (!ctx) throw new Error("usePortfolio must be used inside PortfolioProvider");
  return ctx;
}
