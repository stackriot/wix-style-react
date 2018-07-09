import React from 'react';
import {storiesOf} from '@storybook/react';
import InteractiveCodeExample from 'wix-storybook-utils/InteractiveCodeExample';

import ExampleTooltip from './ExampleTooltip';
import ExamplePopover from './ExamplePopover';
import ExamplePopoverMenu from './ExamplePopoverMenu';

storiesOf('7. Tooltips', module)
  .add('7.1. Tooltip', () => (
    <div>
      <h1>Tooltip</h1>
      <InteractiveCodeExample title="Customize a <Tooltip/>">
        <ExampleTooltip/>
      </InteractiveCodeExample>
    </div>
))
.add('7.2. Popover', () => (
  <div>
    <h1>Popover</h1>
    <InteractiveCodeExample title="Customize a <Tooltip/>">
      <ExamplePopover/>
    </InteractiveCodeExample>
  </div>
))
.add('7.3. Popover Menu', () => (
  <div>
    <h1>Popover Menu</h1>
    <InteractiveCodeExample title="Customize a <PopoverMenu/>">
      <a href="?selectedKind=Core&selectedStory=PopoverMenu&full=0&down=0&left=1&panelRight=0">
        Testkits API reference
      </a>
      <ExamplePopoverMenu/>
    </InteractiveCodeExample>
  </div>
));
