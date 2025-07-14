import { Link } from '@tanstack/react-router';
import {
  Box,
  Button,
  Container,
  Group,
  Image,
  useComputedColorScheme,
} from '@mantine/core';

import styles from '~/styles/components/header.module.css';
import { useAuth } from '~/libs/auth';
import { NavHeader } from '~/components/header/nav';

export function Header() {
  const { status, session, login } = useAuth();
  const computedColorScheme = useComputedColorScheme();

  return (
    <Box component="header" className={styles.header}>
      <Container size="xl">
        <Group align="center" component="nav" justify="space-between">
          <Link to="/">
            <Image
              h={30}
              w={144}
              alt="logo"
              src={
                computedColorScheme === 'light'
                  ? '/logo_light.png'
                  : '/logo_dark.png'
              }
            />
          </Link>

          {status !== 'loading' &&
            (status === 'authenticated' ? (
              <NavHeader
                user={{
                  username: session!.login,
                  name: session!.name,
                  image: session!.avatar_url,
                }}
              />
            ) : (
              <Button onClick={login}>Login</Button>
            ))}
        </Group>
      </Container>
    </Box>
  );
}
