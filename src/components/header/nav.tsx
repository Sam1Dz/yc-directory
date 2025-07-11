import React from 'react';
import { TbLogout2 } from 'react-icons/tb';
import { useMediaQuery } from '@mantine/hooks';
import {
  Avatar,
  Button,
  Group,
  Menu,
  Stack,
  Text,
  UnstyledButton,
} from '@mantine/core';

import styles from '~/styles/components/header.module.css';
import { mantineBreakpoints } from '~/libs/mantine/breakpoint';
import { useAuth } from '~/libs/auth';

interface UserMenuProps {
  user: {
    name: string;
    username: string;
    image?: string;
  };
}

export function NavHeader(props: UserMenuProps) {
  const { user } = props;

  const { logout } = useAuth();
  const isMobile = useMediaQuery(`(max-width: ${mantineBreakpoints.sm})`);

  return (
    <Group align="center" gap="lg">
      {!isMobile && <Button variant="light">Create</Button>}
      <Menu shadow="md" width={200}>
        <Menu.Target>
          <UnstyledButton className={styles.menuButton}>
            <Group gap="xs" align="center">
              <Avatar src={user.image} size={36} />
            </Group>
          </UnstyledButton>
        </Menu.Target>

        <Menu.Dropdown>
          <Stack gap={0} p="sm">
            <Text fw={600} size="sm">
              {user.username}
            </Text>
            <Text size="xs">{user.name}</Text>
          </Stack>
          <Menu.Divider />
          <Menu.Item
            color="red"
            leftSection={<TbLogout2 size={14} />}
            onClick={logout}
          >
            Logout
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Group>
  );
}
