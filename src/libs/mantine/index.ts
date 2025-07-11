import { mergeThemeOverrides } from '@mantine/core';

import { themeFonts } from '~/libs/mantine/fonts';
import { themeColors } from '~/libs/mantine/color';

export const theme = mergeThemeOverrides(themeFonts, themeColors);
