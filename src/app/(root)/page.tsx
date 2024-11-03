import React from 'react';

/* MATERIAL UI */
import { Container, Grid2 as Grid } from '@mui/material';

/* COMPONENTS */
import Hero from '@/components/Hero';
import SearchForm from '@/components/SearchForm';
import StartupCard from '@/components/StartupCard';
// Theme
import { StyledP } from '@/components/theme';
import { noResult, text30Semibold } from '@/components/theme/utilities';

/* DUMMY DATA */
import { DummyPost } from '@/data/dummy';

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

      <Container component="section" maxWidth="xl" sx={{ py: 5 }}>
        <StyledP sx={text30Semibold}>
          {query ? `Search results for "${query}"` : 'All Startups'}
        </StyledP>

        <Grid component="ul" container spacing={2} sx={{ mt: 3.5 }}>
          {DummyPost.length > 0 ? (
            DummyPost.map((post) => <StartupCard key={post._id} post={post} />)
          ) : (
            <Grid component="p" size={12} sx={noResult}>
              No startups found
            </Grid>
          )}
        </Grid>
      </Container>
    </React.Fragment>
  );
}
