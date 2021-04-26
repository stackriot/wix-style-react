import * as React from 'react';
import classnames from 'classnames';
import { visualize, snap } from 'storybook-snapper';
import { Text } from '../Text';
import { Card, CardRatioOptions } from './Card';
import { classes } from './docs/CardVisual.st.css';

const IMAGE_SRC =
  'https://static.wixstatic.com/media/dd7e03deffdd4267b75ef0a60d8510c7.jpg/v1/fill/w_791,h_317,al_c,q_80,usm_0.66_1.00_0.01/Gift%20Wrapped.jpg';

const CardVisual = (props) => {
  return (
    <Card
      className={classnames(classes.root, {
        [classes.override]: props.withOverride,
        [classes.stacked]: props.stacked,
      })}
      info={
        <>
          <Text>Info part</Text>
        </>
      }
      media={
        <img
          src={IMAGE_SRC}
          alt="My product"
          width={'100%'}
          height={'auto'}
          style={{ verticalAlign: 'middle', opacity: 0.5 }}
        />
      }
      {...props}
    />
  );
};

const NewCard = (props) => {
  return (
    <Card
      className={classnames(classes.root, {
        [classes.ratio20_80]: props.ratio20_80,
        [classes.stacked40_60]: props.ratio40_60,
      })}
      upgrade
      {...props}
    >
      <Card.Container className={classes.media}>
        <img
          src={IMAGE_SRC}
          alt="My product"
          width={'100%'}
          height={'auto'}
          style={{ verticalAlign: 'middle', opacity: 0.5 }}
        />
      </Card.Container>
      <Card.Container className={classes.info}>
        <Text>Info part</Text>
      </Card.Container>
    </Card>
  );
};

visualize('Card', () => {
  snap('Card ration 20/80', <NewCard ratio20_80 />);
  snap('Card ration 40/60', <NewCard ratio40_60 />);
});

visualize('Deprecated Card', () => {
  snap('default', <CardVisual />);
  snap('with style overrides', <CardVisual withOverride />);
  snap('ratio', <CardVisual ratio={CardRatioOptions.RATIO_40_60} />);
  snap('stacked', <CardVisual stacked />);
  snap('stacked with style override', <CardVisual stacked withOverride />);
});
