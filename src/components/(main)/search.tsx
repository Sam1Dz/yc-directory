import React from 'react';
import { TbSearch, TbX } from 'react-icons/tb';
import { useNavigate } from '@tanstack/react-router';
import { useMediaQuery } from '@mantine/hooks';
import { ActionIcon, Group, Input } from '@mantine/core';

import classes from '~/styles/components/(main)/search.module.scss';
import { mantineBreakpoints } from '~/libs/mantine/breakpoint';

interface SearchMainProps {
  query?: string;
}

export function SearchMain({ query }: SearchMainProps) {
  const navigate = useNavigate();
  const isMobile = useMediaQuery(`(max-width: ${mantineBreakpoints.md})`);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newQuery = formData.get('query') as string;

    navigate({
      to: '/',
      search: (prev) => ({
        ...prev,
        query: newQuery || undefined,
      }),
      replace: newQuery === query,
    });
  };

  const handleReset = () => {
    navigate({
      to: '/',
      search: (prev) => ({
        ...prev,
        query: undefined,
      }),
    });

    const form = document.getElementById('search-form') as HTMLFormElement;
    if (form) form.reset();
  };

  return (
    <form
      id="search-form"
      onSubmit={handleSubmit}
      className={classes.container}
    >
      <Group gap="lg">
        <Input
          name="query"
          variant="unstyled"
          placeholder="Search Startups"
          defaultValue={query}
          size={!isMobile ? 'xl' : 'lg'}
          classNames={{
            wrapper: classes.wrapper,
            input: classes.input,
          }}
        />

        <Group gap="xs">
          {query && (
            <ActionIcon
              variant="filled"
              size="xl"
              radius="xl"
              onClick={handleReset}
            >
              <TbX />
            </ActionIcon>
          )}

          <ActionIcon variant="filled" size="xl" radius="xl" type="submit">
            <TbSearch />
          </ActionIcon>
        </Group>
      </Group>
    </form>
  );
}
