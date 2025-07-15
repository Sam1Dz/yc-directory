/// <reference types="vite/client" />
import React from 'react';
import mantineCssUrl from '@mantine/core/styles.css?url';
import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core';
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from '@tanstack/react-router';

import globalsCss from '~/styles/globals.scss?url';
import { Providers } from '~/components/providers';

import faviconIco from '~/favicon.ico?url';

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
        title: 'YC Directory',
      },
      {
        name: 'description',
        content: 'Pitch, Vote and Grow',
      },
    ],
    links: [
      {
        rel: 'icon',
        href: faviconIco,
      },
      {
        rel: 'stylesheet',
        href: globalsCss,
      },
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
