import React from 'react';

export type ComponentsWithChildrenRequired<T = object> = T &
  Readonly<{
    children: React.ReactNode;
  }>;
export type ComponentsWithChildren<T = object> = T &
  Readonly<{
    children?: React.ReactNode;
  }>;
