import { mergeThemeOverrides } from '@mantine/core';

import { themeFonts } from '~/libs/mantine/fonts';
import { themeColors } from '~/libs/mantine/color';
import { themeBreakpoints } from '~/libs/mantine/breakpoint';

export const theme = mergeThemeOverrides(
  themeBreakpoints,
  themeFonts,
  themeColors,
);
