import React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { Container, SimpleGrid, Text } from '@mantine/core';

import classes from '~/styles/routes/(main)/index.module.scss';
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

      <Container component="section" size="xl" className={classes.container}>
        <Text className={classes.search_query}>
          {query ? `Search results for "${query}"` : 'All Startups'}
        </Text>

        <SimpleGrid
          spacing="xl"
          cols={{ base: 2, sm: 3 }}
          className={classes.card_lists}
        >
          <article>Card Here</article>
          <article>Card Here</article>
          <article>Card Here</article>
          <article>Card Here</article>
          <article>Card Here</article>
          <article>Card Here</article>
        </SimpleGrid>
      </Container>
    </React.Fragment>
  );
}
