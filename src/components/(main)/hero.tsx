import React from 'react';
import { useMediaQuery } from '@mantine/hooks';
import { Stack, Text, Title, useComputedColorScheme } from '@mantine/core';

import styles from '~/styles/components/(main)/hero.module.css';
import { mantineBreakpoints } from '~/libs/mantine/breakpoint';

export function HeroMain() {
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
        Pitch Your Startup,
        <br />
        Connect With Entrepreneurs
      </Title>

      <Text
        c="white"
        size="xl"
        ta="center"
        fw={500}
        className={styles.subheading}
      >
        Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
      </Text>
    </Stack>
  );
}
