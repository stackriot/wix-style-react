import React from 'react';
import CodeExample from 'wix-storybook-utils/CodeExample';

import InputArea from 'wix-style-react/InputArea';

import ExampleStandard from './ExampleStandard';
import ExampleStandardRaw from '!raw-loader!./ExampleStandard';

import ExampleError from './ExampleError';
import ExampleErrorRaw from '!raw-loader!./ExampleError';

import ExamplePaneltitleStyle from './ExamplePaneltitleStyle';
import ExamplePaneltitleStyleRaw from '!raw-loader!./ExamplePaneltitleStyle';

import ExampleControlled from './ExampleControlled';
import ExampleControlledRaw from '!raw-loader!./ExampleControlled';

import ExampleRefs from './ExampleRefs';
import ExampleRefsRaw from '!raw-loader!./ExampleRefs';

import ExampleSizes from './ExampleSizes';
import ExampleSizesRaw from '!raw-loader!./ExampleSizes';

export default {
  category: '3. Inputs',
  storyName: '3.2 + InputArea',
  component: InputArea,
  componentPath: '../../src/InputArea',

  examples: (
    <div>
      <CodeExample title="Standard" code={ExampleStandardRaw}>
        <ExampleStandard/>
      </CodeExample>

      <CodeExample title="Error" code={ExampleErrorRaw}>
        <ExampleError/>
      </CodeExample>

      <CodeExample title="PaneltitleStyle" code={ExamplePaneltitleStyleRaw}>
        <ExamplePaneltitleStyle/>
      </CodeExample>

      <CodeExample title="Controlled input" code={ExampleControlledRaw}>
        <ExampleControlled/>
      </CodeExample>

      <CodeExample title="Sizes" code={ExampleSizesRaw}>
        <ExampleSizes/>
      </CodeExample>

      <CodeExample title="Commands test" code={ExampleRefsRaw}>
        <ExampleRefs/>
      </CodeExample>
    </div>
  )
};
