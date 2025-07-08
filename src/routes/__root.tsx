/// <reference types="vite/client" />
import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core';
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from '@tanstack/react-router';
import mantineCssUrl from '@mantine/core/styles.css?url';
import React from 'react';

import Providers from '~/components/providers';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'TanStack Start w/ Mantine',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: mantineCssUrl,
      },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Providers>
        <Outlet />
      </Providers>
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<React.PropsWithChildren>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
