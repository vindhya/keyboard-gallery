import React from 'react';
import { Box, Image } from 'grommet';

import { JPG_PNG_REGEX } from '../../constants';

const isImage = (url) => JPG_PNG_REGEX.test(url);

export const KeyboardCard = ({ permalink, title, url }) => {
  // TODO: check if url is jpg, png, put it in image tag
  // TODO: check if image is imgur and render accordingly

  return (
    <Box style={{ height: '300px', border: '1px solid black' }}>
      {title}
      {url}
      {isImage(url) && <Image fit="contain" alt={title} src={url} />}
    </Box>
  );
};
