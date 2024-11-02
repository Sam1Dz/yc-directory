import React from 'react';

/* MATERIAL UI */
import { Stack } from '@mui/material';

/* COMPONENTS */
import { StyledForm } from '@/components/theme';
import {
  SearchFormReset,
  SearchFormSubmit,
  SearchInput,
} from '@/components/SearchForm/fragment';

export default function SearchForm({ query }: { query?: string }) {
  return (
    <StyledForm
      action="/"
      scroll={false}
      id="search-form"
      sx={{
        width: '100%',
        maxWidth: 768,
        minHeight: 64,
        backgroundColor: 'background.paper',
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: 'text.primary',
        borderRadius: 7.5,
        fontSize: 24,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2.5,
        mt: 8,
        px: 3,
      }}
    >
      <SearchInput
        name="query"
        defaultValue={query}
        placeholder="Search Startups"
      />

      <Stack direction="row" spacing={1}>
        {query && <SearchFormReset />}
        <SearchFormSubmit />
      </Stack>
    </StyledForm>
  );
}
