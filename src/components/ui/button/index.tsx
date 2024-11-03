'use client';

import React from 'react';

/* MATERIAL UI */
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

/* TYPES */
import type { ButtonProps } from '@mui/material';

const StyledButton = styled(Button)(({ theme }) => ({
  height: theme.spacing(5),
  borderRadius: theme.spacing(2.5),
  padding: `0 ${theme.spacing(1.5)} 0 ${theme.spacing(1.5)}`,
  textTransform: 'none',
  fontSize: theme.spacing(2),
  lineHeight: theme.spacing(2.5),
  letterSpacing: 0.1,
}));

function UIButton(props: ButtonProps) {
  return (
    <StyledButton
      {...props}
      sx={{
        ...props.sx,
        boxShadow: 'none',
        '&:active': { boxShadow: 'none' },
        '&:hover': { boxShadow: 'none' },
      }}
    >
      {props.children}
    </StyledButton>
  );
}

UIButton.displayName = 'UIButton';
export default UIButton;
