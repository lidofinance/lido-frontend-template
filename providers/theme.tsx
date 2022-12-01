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
  useSystemTheme,
} from '@lidofinance/lido-ui';
import BackgroundGradient from 'components/backgroundGradient';
import { STORAGE_THEME_AUTO_KEY, STORAGE_THEME_MANUAL_KEY } from 'config';
import Cookies from 'js-cookie';

export type ThemeName = 'light' | 'dark';

const COOKIES_THEME_EXPIRES_DAYS = 365;

type Props = {
  cookiesAutoThemeScheme?: ThemeName;
  cookiesManualThemeScheme?: ThemeName;
};

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

export enum THEME {
  light = 'light',
  dark = 'dark',
}

const ThemeProvider: FC<Props> = ({
  cookiesAutoThemeScheme,
  cookiesManualThemeScheme,
  children,
}) => {
  const systemTheme = useSystemTheme();

  /*
   * The first rendering is always with a light theme. After that useEffect will replace the theme with a custom one
   * This is necessary for correct Next.js hydration
   */
  const [themeName, setThemeName] = useState<ThemeName>(
    cookiesManualThemeScheme || cookiesAutoThemeScheme || DEFAULT_THEME,
  );

  // Noticing browser preferences on hydration
  // Reacting to changing preferences
  useEffect(() => {
    if (process.browser && !cookiesManualThemeScheme && systemTheme) {
      setThemeName(systemTheme);
      Cookies.set(STORAGE_THEME_AUTO_KEY, systemTheme, {
        expires: COOKIES_THEME_EXPIRES_DAYS,
      });
    }
    // We only need to override logic when systemTheme changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [systemTheme]);

  const toggleTheme = useCallback(() => {
    const toggledThemeName = themeName === 'light' ? 'dark' : 'light';
    setThemeName(toggledThemeName);
    Cookies.set(STORAGE_THEME_MANUAL_KEY, toggledThemeName, {
      expires: COOKIES_THEME_EXPIRES_DAYS,
    });
  }, [themeName]);

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
