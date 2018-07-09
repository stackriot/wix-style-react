import React from 'react';
import {storiesOf} from '@kadira/storybook';
import Markdown from '../utils/Components/Markdown';
import CodeExample from '../utils/Components/CodeExample';
import Readme from '../../src/Icons/README.md';

import AllIcons from './AllIcons';
import AllIconsRaw from '!raw!./AllIcons';

import CustomeIcon from './CustomIcon';
import CustomeIconRaw from '!raw!./CustomIcon';

import RTLIcon from './RTLIcon';
import RTLIconRaw from '!raw!./RTLIcon';

storiesOf('Common', module)
  .add('Icons', () => (
    <div>
      <Markdown source={Readme}/>

      <CodeExample title="All Icons" code={AllIconsRaw}>
        <AllIcons/>
      </CodeExample>
      <CodeExample title="Custom Icon" code={CustomeIconRaw}>
        <CustomeIcon/>
      </CodeExample>
      <CodeExample title="RTL Icon" code={RTLIconRaw}>
        <RTLIcon/>
      </CodeExample>
    </div>
  ));
