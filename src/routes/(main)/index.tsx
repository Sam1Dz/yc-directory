import React from 'react';
import { createFileRoute } from '@tanstack/react-router';

import { HeroMain } from '~/components/(main)/hero';
import { SearchMain } from '~/components/(main)/search';

export const Route = createFileRoute('/(main)/')({
  component: Home,
  validateSearch: (search: Record<string, unknown>) => ({
    query: (search.query as string) || undefined,
  }),
});

function Home() {
  const { query } = Route.useSearch();

  return (
    <React.Fragment>
      <HeroMain
        heading={
          <React.Fragment>
            Pitch Your Startup,
            <br />
            Connect With Entrepreneurs
          </React.Fragment>
        }
        subHeading="Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions."
      >
        <SearchMain query={query} />
      </HeroMain>
    </React.Fragment>
  );
}
