import { useState, useEffect } from "react";

const getStorageValue = <TValue>(key : string, defaultValue : TValue | null) : TValue | null=> {
    // ignore server side render (does not have window object)
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(key);
      const initial = saved ? JSON.parse(saved) : defaultValue;
      return initial as TValue;
    }
    return null
}

export const useLocalStorage = <TValue>(key: string, defaultValue : TValue | null) : [TValue | null, React.Dispatch<TValue | null>]=> {
    const [value, setValue] = useState<TValue | null>(() => {
      return getStorageValue<TValue>(key, defaultValue);
    });
    useEffect(() => {
      localStorage.setItem(key, value !== null ? JSON.stringify(value) : "");
    }, [key, value]);
  
    return [value, setValue];
};