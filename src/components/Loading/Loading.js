import React from 'react';
import { Grid } from 'grommet';

import { AnimatedBox } from './StyledPlaceholderBox';

export const Loading = () => (
  <Grid
    areas={[
      { name: 'nav', start: [0, 0], end: [0, 0] },
      { name: 'main', start: [1, 0], end: [1, 0] },
      { name: 'side', start: [2, 0], end: [2, 0] },
      { name: 'foot', start: [0, 1], end: [2, 1] }
    ]}
    columns={['small', 'flex', 'small']}
    rows={['medium', 'small']}
    gap="small"
  >
    <AnimatedBox gridArea="nav" background="light-2" />
    <AnimatedBox gridArea="main" background="light-2" />
    <AnimatedBox gridArea="side" background="light-2" />
    <AnimatedBox gridArea="foot" background="light-2" />
  </Grid>
);
