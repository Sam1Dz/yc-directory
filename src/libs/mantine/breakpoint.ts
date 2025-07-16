import { createTheme } from '@mantine/core';

export const mantineBreakpoints = {
  xs: '36em',
  sm: '48em',
  md: '62em',
  lg: '75em',
  xl: '88em',
};

export const themeBreakpoints = createTheme({
  breakpoints: mantineBreakpoints,
});
