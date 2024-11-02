import React from 'react';

/* COMPONENTS */
import Hero from '@/components/Hero';
import SearchForm from '@/components/SearchForm';

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  return (
    <React.Fragment>
      <Hero
        heading={{
          text: (
            <React.Fragment>
              Pitch your startup,
              <br />
              Connect with Entrepreneurs
            </React.Fragment>
          ),
        }}
        subHeading={{
          text: 'Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.',
          sx: {
            maxWidth: 1024,
          },
        }}
      >
        <SearchForm query={query} />
      </Hero>
    </React.Fragment>
  );
}
