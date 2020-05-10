import React from 'react';
import { Box, Grommet } from 'grommet';
import { grommet } from 'grommet/themes';

import { NavHeader } from './NavHeader';
import { KeyboardGallery } from './KeyboardGallery';

const App = () => (
  <Grommet full theme={grommet}>
    <NavHeader />
    <Box pad={{ top: 'large', horizontal: 'xlarge' }}>
      <KeyboardGallery />
    </Box>
  </Grommet>
);

export default App;
