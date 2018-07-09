import React from 'react';
import story from '../utils/Components/Story';

import CodeExample from '../utils/Components/CodeExample';

import ExampleStandard from './ExampleStandard';
import ExampleStandardRaw from '!raw-loader!./ExampleStandard';

import ExampleSizes from './ExampleSizes';
import ExampleSizesRaw from '!raw-loader!./ExampleSizes';

import ExampleControlled from './ExampleControlled';
import ExampleControlledRaw from '!raw-loader!./ExampleControlled';

import ExampleColors from './ExampleColors';
import ExampleColorsRaw from '!raw-loader!./ExampleColors';

story({
  category: 'Core',
  componentSrcFolder: 'ToggleSwitch',
  componentProps: (setState, getState) => ({
    onChange: () => setState({checked: !getState().checked})
  }),
  examples: (
    <div>
      <CodeExample title="Standard" code={ExampleStandardRaw}>
        <ExampleStandard/>
      </CodeExample>

      <CodeExample title="Sizes" code={ExampleSizesRaw}>
        <ExampleSizes/>
      </CodeExample>

      <CodeExample title="Controlled input" code={ExampleControlledRaw}>
        <ExampleControlled/>
      </CodeExample>

      <CodeExample title="Colors" code={ExampleColorsRaw}>
        <ExampleColors/>
      </CodeExample>
    </div>
  )
});
