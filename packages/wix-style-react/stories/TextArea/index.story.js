import React from 'react';
import { storySettings } from './storySettings';

import {
  header,
  title,
  description,
  table,
  importExample,
  columns,
  example,
} from 'wix-storybook-utils/Sections';
import LinkTo from '@storybook/addon-links/react';
import * as examples from './examples';

import { Category } from '../storiesHierarchy';

import { InputArea, FormField } from 'wix-style-react';

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  sections: [
    header({
      component: (
        <div style={{ width: '50%' }}>
          <FormField label="Text Area">
            <InputArea placeholder="Placeholder" />
          </FormField>
        </div>
      ),
    }),

    description('A text area can be used to allow for extended user input.'),

    columns([
      table({
        title: 'Included Components',
        rows: [
          [
            <LinkTo
              kind={Category.COMPONENTS}
              story="FormField"
            >{`<FormField/>`}</LinkTo>,
            'Layout component for form elements',
          ],
          [
            <LinkTo
              kind={Category.COMPONENTS}
              story="InputArea"
            >{`<InputArea/>`}</LinkTo>,
            'Component that receives data',
          ],
        ],
      }),
    ]),

    importExample(examples.importExample),

    title('Examples'),

    example({
      title: 'Plain Example',
      text: 'Default text area setup.',
      source: examples.basicExample,
    }),

    example({
      title: 'Char Limit',
      text:
        'This component allows to limit number of characters can be inserted.',
      source: examples.charLimitExample,
    }),

    example({
      title: 'Resizable Height',
      text: 'It is allowed to make text area resizable.',
      source: examples.resizableHeightExample,
    }),

    example({
      title: 'Label Position',
      text: `Text Area's label can be position on top, left or can be hidden. Additional properties behave accordingly.`,
      source: examples.positionExample,
    }),
  ],
};
