import * as React from 'react';
import {
  tabs,
  tab,
  header,
  api,
  title,
  importExample,
  example,
  playground,
  description,
  testkit,
} from 'wix-storybook-utils/Sections';

import RichTextInputArea from '..';
import { storySettings } from './storySettings';

import testkitReadme from './README.TESTKIT.md';

import SetValueExample from '!raw-loader!./examples/SetValue';
import RichTextElements from '!raw-loader!./examples/RichTextElements';
import InitialValueExample from '!raw-loader!./examples/InitialValue';
import ErrorExample from '!raw-loader!./examples/Error';
import DisabledExample from '!raw-loader!./examples/Disabled';
import PlaceholderExample from '!raw-loader!./examples/Placeholder';
import SpellCheckingExample from '!raw-loader!./examples/SpellChecking';

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: RichTextInputArea,
  componentPath: '..',

  componentProps: () => ({
    initialValue: '',
    placeholder: 'Default text goes here',
    onChange: value => value,
  }),

  exampleProps: {
    onChange: value => value,
  },

  sections: [
    header({
      component: (
        <div style={{ width: '50%' }}>
          <RichTextInputArea placeholder="Placeholder" />
        </div>
      ),
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          importExample("import { RichTextInputArea } from 'wix-style-react';"),

          title('Examples'),

          example({
            title: 'Basic',
            description: 'Using rich text elements',
            source: RichTextElements,
          }),

          example({
            title: 'Initial value',
            description: 'Can be initialized with a given value',
            source: InitialValueExample,
          }),

          example({
            title: 'Spell checking',
            description:
              'Native browser spell checking can be enabled with the `spellCheck` prop',
            source: SpellCheckingExample,
          }),

          example({
            title: 'Set value / Rest value',
            description:
              'Value can be externally set at any time, mostly will be used for reset purposes',
            source: SetValueExample,
            autoRender: false,
          }),
          example({ title: 'Error', source: ErrorExample }),
          example({ title: 'Disabled', source: DisabledExample }),
          example({ title: 'Placeholder', source: PlaceholderExample }),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'Testkit', sections: [testkit(), description(testkitReadme)] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};
