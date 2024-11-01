import React from 'react';

/* AUTH.JS */
import { auth, signOut, signIn } from '@/auth';

/* MATERIAL UI */
import { Box, Container, Stack } from '@mui/material';

/* COMPONENTS */
import { NavbarButton, NavbarLogo } from '@/components/Navbar/fragment';

export default async function Navbar() {
  const Session = await auth();

  return (
    <Container component="div" maxWidth="xxl">
      <Box
        component="nav"
        sx={{
          height: 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <NavbarLogo />

        <Stack direction="row" spacing={2}>
          {Session && Session.user ? (
            <React.Fragment>
              {/*<StyledLink href="/startup/create">*/}
              <NavbarButton>Create</NavbarButton>
              {/*</StyledLink>*/}

              <Box
                component="form"
                action={async () => {
                  'use server';

                  await signOut();
                }}
              >
                <NavbarButton type="submit">Logout</NavbarButton>
              </Box>

              {/*<StyledLink href={`/user/${Session?.id}`}>*/}
              <NavbarButton>{Session.user.name}</NavbarButton>
              {/*</StyledLink>*/}
            </React.Fragment>
          ) : (
            <Box
              component="form"
              action={async () => {
                'use server';

                await signIn('github');
              }}
            >
              <NavbarButton type="submit">Login</NavbarButton>
            </Box>
          )}
        </Stack>
      </Box>
    </Container>
  );
}
