'use client';

/* MATERIAL UI */
import { styled } from '@mui/material/styles';
import { ButtonBase, InputBase } from '@mui/material';
// Icons
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';

/* COMPONENTS */
import Color from '@/components/theme/color-pallete';
import { StyledLink } from '@/components/theme';

export const SearchInput = styled(InputBase)(({ theme }) => ({
  flex: '1 1 0%',
  fontWeight: 700,
  width: '100%',
  height: 'auto',
  outline: 'none',
  fontSize: 'inherit',
  input: {
    '&::placeholder': {
      fontWeight: 600,
      color: theme.palette.text.secondary,
      opacity: 1,
    },
  },
}));

const SearchButton = styled(ButtonBase)(({ theme }) => ({
  width: theme.spacing(5),
  height: theme.spacing(5),
  borderRadius: 9999,
  backgroundColor: theme.palette.text.primary,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));
export function SearchFormSubmit() {
  return (
    <SearchButton type="submit">
      <SearchIcon
        sx={{
          color: (theme) =>
            theme.palette.mode === 'light'
              ? Color.dark.text.primary
              : Color.light.text.primary,
        }}
      />
    </SearchButton>
  );
}
export function SearchFormReset() {
  const handleReset = () => {
    const form = document.getElementById('search-form') as HTMLFormElement;
    if (form) form.reset();
  };

  return (
    <StyledLink href="/">
      <SearchButton type="reset" onClick={handleReset}>
        <ClearIcon
          sx={{
            color: (theme) =>
              theme.palette.mode === 'light'
                ? Color.dark.text.primary
                : Color.light.text.primary,
          }}
        />
      </SearchButton>
    </StyledLink>
  );
}
