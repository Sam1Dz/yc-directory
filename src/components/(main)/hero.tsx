import React from 'react';
import { useMediaQuery } from '@mantine/hooks';
import { Stack, Text, Title, useComputedColorScheme } from '@mantine/core';

import styles from '~/styles/components/(main)/hero.module.scss';
import { mantineBreakpoints } from '~/libs/mantine/breakpoint';

interface HeroMainProps {
  heading: React.ReactNode | string;
  subHeading?: React.ReactNode | string;
}

export function HeroMain({
  heading,
  subHeading,
  children,
}: React.PropsWithChildren<HeroMainProps>) {
  const isMobile = useMediaQuery(`(max-width: ${mantineBreakpoints.xs})`);
  const computedColorScheme = useComputedColorScheme();

  return (
    <Stack
      align="center"
      component="section"
      justify="center"
      bg="primary"
      gap={0}
      className={styles.container}
    >
      <Title
        ta="center"
        tt="uppercase"
        fw={800}
        order={1}
        bg={computedColorScheme === 'light' ? 'dark.7' : 'white'}
        c={computedColorScheme === 'light' ? 'dark.0' : 'black'}
        fz={!isMobile ? 54 : 36}
        className={styles.heading}
      >
        {heading}
      </Title>

      {subHeading && (
        <Text
          c="white"
          ta="center"
          fw={500}
          size={!isMobile ? 'xl' : 'lg'}
          className={styles.subHeading}
        >
          {subHeading}
        </Text>
      )}

      {children}
    </Stack>
  );
}
