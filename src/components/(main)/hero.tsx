import React from 'react';
import { useMediaQuery } from '@mantine/hooks';
import { Stack, Text, Title } from '@mantine/core';

import classes from '~/styles/components/(main)/hero.module.scss';
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

  return (
    <React.Fragment>
      <Stack
        align="center"
        component="section"
        justify="center"
        bg="primary"
        gap={0}
        className={classes.container_hero}
      >
        <Title
          ta="center"
          tt="uppercase"
          fw={800}
          order={1}
          className={classes.heading}
        >
          {heading}
        </Title>

        {subHeading && (
          <Text
            c="white"
            ta="center"
            fw={500}
            size={!isMobile ? 'xl' : 'lg'}
            className={classes.sub_heading}
          >
            {subHeading}
          </Text>
        )}

        {children}
      </Stack>
    </React.Fragment>
  );
}
