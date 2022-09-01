import { useEffect } from "react";

const isFalsy = (res) => {
  return res === 0 ? true : !!res;
};

export const cleanObj = (obj) => {
  const res = { ...obj };
  Object.keys(res).forEach(k => {
    if (!isFalsy(res[k])) {
      delete res[k];
    }
  });
  return res;
};

// 创建一个自定义hook,来替换只加载一次的useEffect
export const useMount = (callback) => {
  useEffect(() => {
    callback();
  }, []);
};
