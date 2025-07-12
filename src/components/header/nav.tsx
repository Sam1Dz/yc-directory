import React from 'react';
import { TbLogout2, TbPlus, TbUser } from 'react-icons/tb';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import {
  Avatar,
  Button,
  type ButtonProps,
  Divider,
  Drawer,
  Group,
  Stack,
  Text,
  UnstyledButton,
} from '@mantine/core';

import styles from '~/styles/components/header.module.css';
import { useAuth } from '~/libs/auth';
import { mantineBreakpoints } from '~/libs/mantine/breakpoint';

interface UserMenuProps {
  user: {
    name: string;
    username: string;
    image?: string;
  };
}

const menuButtonProps: ButtonProps = {
  variant: 'subtle',
  justify: 'flex-start',
  px: 8,
  py: 6,
};

export function NavHeader(props: UserMenuProps) {
  const { user } = props;

  const { logout } = useAuth();
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery(`(max-width: ${mantineBreakpoints.sm})`);

  return (
    <React.Fragment>
      <Drawer
        radius="lg"
        position="right"
        opened={opened}
        onClose={close}
        size={!isMobile ? 'sm' : 'xs'}
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
        styles={{
          body: {
            height: 'calc(100% - 72.6px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          },
        }}
        title={
          <Group gap="xs" wrap="nowrap">
            <Avatar src={user.image} size={36} />
            <Stack gap={0}>
              <Text size="sm" fw={600} lineClamp={1}>
                {user.username}
              </Text>
              <Text c="gray.6" size="sm" lineClamp={1}>
                {user.name}
              </Text>
            </Stack>
          </Group>
        }
      >
        <Stack gap={0}>
          <Divider mb={16} />
          {isMobile && (
            <Button
              {...menuButtonProps}
              color="white"
              leftSection={<TbPlus size={20} />}
            >
              <Text fw={400}>Create</Text>
            </Button>
          )}
          <Button
            {...menuButtonProps}
            color="white"
            leftSection={<TbUser size={20} />}
          >
            <Text fw={400}>Profile</Text>
          </Button>
        </Stack>

        <Stack gap={0} mt={16}>
          <Divider mb={16} />
          <Button
            {...menuButtonProps}
            color="red"
            leftSection={<TbLogout2 size={20} />}
            onClick={logout}
          >
            <Text fw={400}>Logout</Text>
          </Button>
        </Stack>
      </Drawer>

      <Group align="center" gap="lg">
        {!isMobile && <Button variant="light">Create</Button>}
        <UnstyledButton onClick={open} className={styles.profileDrawer}>
          <Group gap="xs" align="center">
            <Avatar src={user.image} size={36} />
          </Group>
        </UnstyledButton>
      </Group>
    </React.Fragment>
  );
}
