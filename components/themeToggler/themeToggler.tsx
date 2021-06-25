import { FC } from 'react';
import { ThemeTogglerStyle } from './themeTogglerStyles';
import { Dark, Light } from '@lidofinance/lido-ui';
import { useThemeToggle } from 'hooks';

const ThemeToggler: FC = () => {
  const { toggleTheme, themeName } = useThemeToggle();

  return (
    <ThemeTogglerStyle onClick={toggleTheme}>
      {themeName === 'dark' ? <Light /> : <Dark />}
    </ThemeTogglerStyle>
  );
};

export default ThemeToggler;
