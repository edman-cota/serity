/* eslint-disable comma-dangle */
/* eslint-disable import/prefer-default-export */
import { useState, useEffect } from "react";

export const useLocalStorage = (storageKey, fallbackStage) => {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(storageKey)) || fallbackStage
  );

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value));
  }, [value, storageKey]);

  return [value, setValue];
};
