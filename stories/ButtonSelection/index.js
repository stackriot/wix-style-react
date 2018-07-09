import React from 'react';
import {storiesOf} from '@storybook/react';
import Markdown from 'wix-storybook-utils/Markdown';
import TabbedView from 'wix-storybook-utils/TabbedView';
import CodeExample from 'wix-storybook-utils/CodeExample';

import Readme from '../../src/ButtonSelection/README.md';
import ReadmeTestKit from '../../src/ButtonSelection/README.TESTKIT.md';
import ExampleControlled from './ExampleControlled';
import ExampleControlledRaw from '!raw-loader!./ExampleControlled';

storiesOf('Core', module)
  .add('ButtonSelection', () => (
    <TabbedView tabs={['API', 'TestKits']}>
      <div>
        <Markdown source={Readme}/>
        <h1>Usage examples</h1>
        <CodeExample code={ExampleControlledRaw}>
          <ExampleControlled/>
        </CodeExample>
      </div>
      <Markdown source={ReadmeTestKit}/>
    </TabbedView>
  ));
