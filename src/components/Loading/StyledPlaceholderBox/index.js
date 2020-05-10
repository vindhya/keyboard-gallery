import React from 'react';
import { AnimationBox } from './styles';

export const AnimatedBox = ({ ...rest }) => (
  <AnimationBox
    animation={{
      type: 'fadeOut',
      duration: 2500
    }}
    background="light-4"
    round
    {...rest}
  />
);
