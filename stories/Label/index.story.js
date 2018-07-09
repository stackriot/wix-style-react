import React from 'react';

import CodeExample from 'wix-storybook-utils/CodeExample';

import {Image} from 'wix-style-react/Icons';
import Label from 'wix-style-react/Label';

import ExampleStandard from './ExampleStandard';
import ExampleStandardRaw from '!raw-loader!./ExampleStandard';

const children = [
  'Hello World!',
  <span key={0}>Hello <strong>World!</strong></span>,
  <span key={1}>Hello <Image/></span>
];

export default {
  category: '1. Foundation',
  storyName: '1.2 + Label',

  component: Label,
  componentPath: '../../src/Label',
  componentProps: {
    children: children[0]
  },

  exampleProps: {
    children
  },

  examples: (
    <CodeExample title="Standard" code={ExampleStandardRaw}>
      <ExampleStandard/>
    </CodeExample>
  )
};
