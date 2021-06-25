import { ThemeToggleContext, ThemeContext } from 'providers';
import { useContext } from 'react';

export const useThemeToggle = (): ThemeContext => {
  return useContext(ThemeToggleContext);
};
