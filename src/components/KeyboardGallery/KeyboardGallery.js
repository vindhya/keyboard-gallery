import React, { useEffect, useState } from 'react';
import { Grid } from 'grommet';

import { API_URL } from '../../constants';
import { Loading } from '../Loading/Loading';
import { KeyboardCard } from '../KeyboardCard';

const transform = (data) =>
  data.data.children
    .map((keyboard) => keyboard.data)
    .filter((keyboard) => keyboard.selftext === '');

export const KeyboardGallery = () => {
  const [loading, setLoading] = useState(true);
  const [keyboardData, setKeyboardData] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setKeyboardData(transform(data));
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Grid columns={{ count: 3, size: 'auto' }} gap="large">
      {keyboardData.map((data) => {
        console.log('data', data);
        const { id, permalink, title, url } = data;
        return (
          <KeyboardCard
            key={id}
            permalink={permalink}
            title={title}
            url={url}
          />
        );
      })}
    </Grid>
  );
};
