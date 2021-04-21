import {
  header,
  tabs,
  tab,
  description,
  importExample,
  title,
  divider,
  example,
  playground,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';

import { storySettings } from './storySettings';
import EditableSelector from '..';

import * as examples from './examples';

const exampleItems = [
  {
    title: 'Robert Fripp',
    isSelected: true,
  },
  {
    title: 'John Wetton',
  },
  {
    title: 'Bill Bruford',
  },
];

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: EditableSelector,
  componentPath: '..',

  componentProps: {
    title: 'King Crimson members',
    toggleType: 'checkbox',
    options: exampleItems,
  },

  exampleProps: {
    options: [
      { label: '1 option', value: [exampleItems[0]] },
      { label: '3 options', value: exampleItems },
    ],
  },

  sections: [
    header(),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description(
            'Editable Selector lets users add single or multi-select options to a selectable list. Users can only insert plain text values. Use it where users need the flexibility of creating their own options in a form.',
          ),

          importExample(),

          divider(),

          title('Examples'),

          example({
            title: 'Card With Editable Selector',
            source: examples.cardWithEditableSelector,
          }),
          example({
            title: 'Popover With Editable Selector',
            source: examples.popoverWithEditableSelector,
          }),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'Testkit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};
