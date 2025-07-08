import { Link } from '@tanstack/react-router';
import {
  Box,
  Button,
  Group,
  Image,
  useComputedColorScheme,
} from '@mantine/core';

import styles from '~/styles/components/header.module.css';

export function Header() {
  const computedColorScheme = useComputedColorScheme();

  return (
    <Box component="header" className={styles.header}>
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

        <Group align="center" gap="lg">
          <Button variant="subtle">Create</Button>
          <Button>Login</Button>
        </Group>
      </Group>
    </Box>
  );
}
