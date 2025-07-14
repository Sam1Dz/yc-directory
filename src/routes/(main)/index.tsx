import React from 'react';
import { createFileRoute } from '@tanstack/react-router';

import { HeroMain } from '~/components/(main)/hero';

export const Route = createFileRoute('/(main)/')({
  component: Home,
});

function Home() {
  return (
    <React.Fragment>
      <HeroMain />
    </React.Fragment>
  );
}
