"use client";

import { useState, useEffect } from "react";

function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item =
        typeof window !== "undefined" ? localStorage.getItem(key) : null;
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      console.warn("useLocalStorage error:", error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.warn("useLocalStorage error:", error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue] as const;
}

export default useLocalStorage;
