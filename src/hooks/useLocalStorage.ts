import { useState, useEffect } from 'react';

type SetValue<T> = (value: T | ((prev: T) => T)) => void;

export function useLocalStorage<T>(key: string, initialValue: T): [T, SetValue<T>] {
  // Função para obter o valor atualizado do localStorage
  const getStoredValue = (): T => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  };

  // Estado para armazenar o valor atual
  const [value, setValue] = useState<T>(getStoredValue);

  // Efeito para salvar o valor no localStorage sempre que o estado é atualizado
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
