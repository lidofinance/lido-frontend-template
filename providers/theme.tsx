import {
  FC,
  createContext,
  useCallback,
  useState,
  useMemo,
  useEffect,
} from 'react';
import { GlobalStyle } from 'styles';
import {
  themeLight,
  themeDark,
  Theme,
  ThemeProvider as SourceProvider,
} from '@lidofinance/lido-ui';
import BackgroundGradient from 'components/backgroundGradient';
import { useLocalStorage } from '@lido-sdk/react';
import { STORAGE_THEME_KEY } from 'config';

export type ThemeName = 'light' | 'dark';

export type ThemeContext = {
  toggleTheme: () => void;
  themeName: ThemeName;
};

const themeMap: Record<ThemeName, Theme> = {
  light: themeLight,
  dark: themeDark,
};

export const ThemeToggleContext = createContext({} as ThemeContext);

const DEFAULT_THEME = 'light';

const ThemeProvider: FC = ({ children }) => {
  const [themeLS, setThemeLS] = useLocalStorage<ThemeName>(
    STORAGE_THEME_KEY,
    DEFAULT_THEME,
  );

  /*
   * The first rendering is always with a light theme. After that useEffect will replace the theme with a custom one
   * This is necessary for correct Next.js hydration
   */
  const [themeName, setThemeName] = useState<ThemeName>(DEFAULT_THEME);
  useEffect(() => setThemeName(themeLS), [themeLS]);

  const toggleTheme = useCallback(() => {
    setThemeLS((current) => (current === 'light' ? 'dark' : 'light'));
  }, [setThemeLS]);

  const value = useMemo(
    () => ({
      toggleTheme,
      themeName,
    }),
    [themeName, toggleTheme],
  );

  return (
    <ThemeToggleContext.Provider value={value}>
      <SourceProvider theme={themeMap[themeName]}>
        <GlobalStyle />
        {themeName === 'dark' && (
          <BackgroundGradient width={1560} height={784} />
        )}
        {children}
      </SourceProvider>
    </ThemeToggleContext.Provider>
  );
};

export default ThemeProvider;
