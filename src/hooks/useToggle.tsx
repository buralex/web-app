'use client';
import { useCallback, useState } from 'react';

type ToggleHookReturnType = [boolean, () => void];

export const useToggle = (
  initialValue: boolean = false,
): ToggleHookReturnType => {
  const [value, setValue] = useState<boolean>(initialValue);

  const toggleValue = useCallback(() => {
    setValue((prevValue) => !prevValue);
  }, []);

  return [value, toggleValue];
};
