import * as React from 'react';
import { Card } from '..';
import { Text, TYPOGRAPHY } from '../../Text';
import { st, classes } from './CardWiringExample.st.css';
import { ResizeOptions, ThumbnailImage } from '../../ThumbnailImage';

const loremIpsum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat';

export const CardWiringExample = () => {
  return (
    <Card upgrade className={st(classes.root)}>
      <Card.Container className={classes.media}>
        <ThumbnailImage
          src="c5f754_23cf5dfa1ea44dc09e87a03df0996f83~mv2.png"
          alt="My product"
          width={400}
          height={520}
          fluid
          resize={ResizeOptions.cover}
        />
      </Card.Container>
      <Card.Container className={classes.info}>
        <>
          <Text typography={TYPOGRAPHY.smallTitle} tagName={'h3'}>
            My Product
          </Text>
          <Text typography={TYPOGRAPHY.runningText} className={classes.text}>
            ${loremIpsum}
          </Text>
        </>
      </Card.Container>
    </Card>
  );
};
