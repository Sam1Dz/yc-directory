import React from 'react';
import { createFileRoute, Outlet } from '@tanstack/react-router';

import { Header } from '~/components/header';

export const Route = createFileRoute('/(main)')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Outlet />
      </main>
    </React.Fragment>
  );
}
