import React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { Code, Text, Title } from '@mantine/core';

export const Route = createFileRoute('/(main)/')({
  component: Home,
});

function Home() {
  return (
    <>
      <Title order={1}>TanStack Start w/ Mantine</Title>
      <Text>Hello World!</Text>
      <Code>Written in Typescript JSX</Code>
    </>
  );
}
