import { Box, Text, Title } from '@mantine/core';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  return (
    <Box component="main">
      <Title order={1}>TanStack Start w/ Mantine</Title>
      <Text>Hello World!</Text>
    </Box>
  );
}
