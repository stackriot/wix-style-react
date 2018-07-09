import React from 'react';
import {storiesOf} from '@storybook/react';
import Markdown from 'wix-storybook-utils/Markdown';
import CodeExample from 'wix-storybook-utils/CodeExample';

import Readme from '../../src/SideMenu/README.md';
import SideMenuDrillReadme from '../../src/SideMenu/DrillView/README.md';

import ExampleStandard from './ExampleStandard';
import ExampleStandardRaw from '!raw-loader!./ExampleStandard';

import ExampleSubMenu from './ExampleSubMenu';
import ExampleSubMenuRaw from '!raw-loader!./ExampleSubMenu';

import ExampleSideMenuDrill from './ExampleSideMenuDrill';
import ExampleSideMenuDrillRaw from '!raw-loader!./ExampleSideMenuDrill';

storiesOf('6. Navigation', module)
  .add('6.1 SideMenuDrill', () => (
    <div>
      <Markdown source={SideMenuDrillReadme}/>

      <h1>Usage examples</h1>

      <CodeExample title="SideMenu Example" code={ExampleSideMenuDrillRaw}>
        <ExampleSideMenuDrill/>
      </CodeExample>
    </div>
  ))

  .add('6.1 + SideMenu', () => (
    <div>
      <Markdown source={Readme}/>

      <h1>Usage examples</h1>

      <CodeExample title="Standard" code={ExampleStandardRaw}>
        <ExampleStandard/>
      </CodeExample>

      <CodeExample title="Sub Menu" code={ExampleSubMenuRaw}>
        <ExampleSubMenu/>
      </CodeExample>
    </div>
  ));
