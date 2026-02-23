import { useEffect, useState } from "react";

export const useDebounce = (initValue = "", delay = 1000) => {
  const [debounceValue, setDebounceValue] = useState(initValue);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(initValue);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [initValue, delay]);
  return debounceValue;
};
