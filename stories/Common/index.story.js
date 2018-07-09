import React from 'react';
import CodeExample from 'wix-storybook-utils/CodeExample';

import Text from 'wix-style-react/Text';

import ExampleHeadersTypography from './ExampleHeadersTypography';
import ExampleHeaderTypographyRaw from '!raw-loader!./ExampleHeadersTypography';

import ExampleTextTypography from './ExampleTextTypography';
import ExampleTextTypographyRaw from '!raw-loader!./ExampleTextTypography';

const children = [
  'Hello World!',
  <span key={0}>Hello <strong>World!</strong></span>,
  'Hello World! '.repeat(5)
];

export default {
  category: 'Common',
  storyName: 'Typography',
  component: Text,
  componentPath: '../../src/Text',
  componentProps: {
    children: 'Hello, World!'
  },
  exampleProps: {
    children
  },
  examples: (
    <div>
      <CodeExample title="Headers" code={ExampleHeaderTypographyRaw}>
        <ExampleHeadersTypography/>
      </CodeExample>

      <CodeExample title="Text" code={ExampleTextTypographyRaw}>
        <ExampleTextTypography/>
      </CodeExample>
    </div>
  )
};
