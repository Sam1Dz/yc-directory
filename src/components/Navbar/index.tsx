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
    <Box
      component="div"
      sx={{
        backgroundColor: 'background.default',
        boxShadow:
          '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
      }}
    >
      <Container
        component="nav"
        maxWidth="xxl"
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
      </Container>
    </Box>
  );
}
