import React from 'react';
import { Anchor, Box, ResponsiveContext, Text } from 'grommet';
import { Sign } from 'grommet-icons';

export const NavHeader = () => (
  <ResponsiveContext.Consumer>
    {(size) => (
      <Box
        direction="row"
        justify="between"
        alignSelf="center"
        gap="medium"
        pad={{ top: 'large', horizontal: 'xlarge' }}
      >
        <Anchor
          href="/"
          icon={<Sign />}
          color="black"
          label={
            size !== 'xsmall' &&
            size !== 'small' && <Text size="large">Mechanical Keyboards</Text>
          }
        />
      </Box>
    )}
  </ResponsiveContext.Consumer>
);
