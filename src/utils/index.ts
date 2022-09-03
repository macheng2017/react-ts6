import { useEffect, useState } from "react";

const isFalsy = (res: any) => {
  return res === 0 ? true : !!res;
};

export const cleanObj = (obj: object) => {
  const res = { ...obj };
  Object.keys(res).forEach(k => {
    // @ts-ignore
    if (!isFalsy(res[k])) {
      // @ts-ignore
      delete res[k];
    }
  });
  return res;
};

// 创建一个自定义hook,来替换只加载一次的useEffect
export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

export const useDebounce = <T>(value: T, delay?: number) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    let timeout = setTimeout(() => setDebounceValue(value)
      , delay);
    return () => clearTimeout(timeout);

  }, [value, delay]);
  return debounceValue;
};
