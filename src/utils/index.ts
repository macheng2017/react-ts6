import { useEffect, useState } from "react";
import { clear } from "@testing-library/user-event/dist/clear";

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

interface Person {
  name: string,
  age: number
}

export const useArray = (persons: Person[]) => {
  // hello，请把作业写在这里吧，写完记得再对照作业要求检查一下
  const [value, setValue] = useState([...persons]);
  const add = (person: Person) => {
    setValue([...value, person]);
  };
  const removeIndex = (index: number) => {
    const cpValue = [...value];
   cpValue.splice(index,1)
    setValue([...cpValue]);
  };
  const clear = () => {
    setValue([]);
  };
  return { add, value, clear, removeIndex };
};

