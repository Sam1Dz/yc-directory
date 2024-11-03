'use client';

import React from 'react';

/* MATERIAL UI */
import { Box, Grid2 as Grid, Stack } from '@mui/material';
// Icons
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

/* COMPONENTS */
import UIButton from '@/components/ui/button';
// Theme
import {
  StyledH3,
  StyledImage,
  StyledLink,
  StyledP,
  StyledSpan,
} from '@/components/theme';
import {
  flexBetween,
  text16Medium,
  text26Semibold,
} from '@/components/theme/utilities';

/* LIBRARIES */
import { formatDate } from '@/libraries/utils';

/* TYPES */
import type { IDummyPost } from '@/data/dummy';

export default function StartupCard({ post }: { post: IDummyPost }) {
  return (
    <Grid component="li" size={{ md: 4, xs: 6, xxs: 12 }}>
      <Box
        component="div"
        sx={{
          p: 2,
          backgroundColor: 'background.paper',
          borderRadius: 1.5,
          width: '100%',
        }}
      >
        <Box component="div" sx={flexBetween}>
          <StyledP
            sx={{
              px: 2,
              height: 32,
              borderRadius: 2,
              fontWeight: 500,
              fontSize: 16,
              outlineColor: 'primary.dark',
              outlineWidth: 1,
              outlineStyle: 'groove',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {formatDate(post._createdAt)}
          </StyledP>
          <Stack direction="row" gap={0.75}>
            <VisibilityOutlinedIcon
              sx={{ color: (theme) => theme.palette.primary.light }}
            />
            <StyledSpan sx={text16Medium}>{post.views}</StyledSpan>
          </Stack>
        </Box>

        <Box component="div" sx={{ ...flexBetween, mt: 2.5, gap: 2.5 }}>
          <Box component="div" sx={{ flex: '1 1 0%' }}>
            <StyledLink href={`/user/${post.author._id}`}>
              <StyledP
                sx={{
                  ...text16Medium,
                  overflow: 'hidden',
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: '1',
                }}
              >
                {post.author.name}
              </StyledP>
            </StyledLink>
            <StyledLink href={`/user/${post._id}`}>
              <StyledH3
                sx={{
                  ...text26Semibold,
                  overflow: 'hidden',
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: '1',
                }}
              >
                {post.title}
              </StyledH3>
            </StyledLink>
          </Box>
          <StyledLink href={`/user/${post.author._id}`}>
            <StyledImage
              src="https://media.licdn.com/dms/image/v2/C560BAQGO7rpT6O29Dw/company-logo_200_200/company-logo_200_200/0/1644812371861/hoyoverse_logo?e=1738800000&v=beta&t=dMsPIVKsXFnA8Ih_4CsQaV0R4CC4trR96V5QyI4Llcg"
              alt="hoyoverse-profile"
              width={48}
              height={48}
              sx={{ borderRadius: 9999 }}
            />
          </StyledLink>
        </Box>

        <StyledLink href={`/user/${post._id}`}>
          <StyledP
            sx={{
              my: 1.5,
              fontWeight: 400,
              fontSize: 16,
              color: 'text.secondary',
              overflow: 'hidden',
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: `2`,
              wordBreak: 'break-all',
            }}
          >
            {post.description}
          </StyledP>
          <StyledImage
            unoptimized
            src={post.image}
            alt={post.title}
            width={348}
            height={164}
            sx={{
              width: '100%',
              height: 164,
              borderRadius: 3,
              objectFit: 'cover',
            }}
          />
        </StyledLink>

        <Box sx={{ ...flexBetween, gap: 1.5, mt: 2.5 }}>
          <StyledLink href={`/?query=${post.category.toLowerCase()}`}>
            <StyledP sx={{ ...text16Medium }}>{post.category}</StyledP>
          </StyledLink>
          <StyledLink href={`/startup/${post._id}`}>
            <UIButton variant="contained">Details</UIButton>
          </StyledLink>
        </Box>
      </Box>
    </Grid>
  );
}
