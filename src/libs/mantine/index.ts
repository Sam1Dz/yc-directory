import { mergeThemeOverrides } from '@mantine/core';

import { themeFonts } from '~/libs/mantine/fonts';

export const theme = mergeThemeOverrides(themeFonts);
