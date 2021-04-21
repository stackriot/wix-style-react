import React from 'react';
import {
  header,
  tabs,
  tab,
  description,
  importExample,
  title,
  columns,
  divider,
  example,
  playground,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';

import { storySettings } from '../test/storySettings';

import * as examples from './examples';

import Search from '..';

const options = Array(26)
  .fill(0)
  .map((_, id) => ({
    id,
    value: `Option ${String.fromCharCode(97 + id)}`,
  }));

export default {
  category: storySettings.category,
  storyName: 'Search',

  component: Search,
  componentPath: '..',

  componentProps: {
    options,
  },

  exampleProps: {
    onSelect: option => option.value,
    onChange: e => e.target.value,
    options: [
      { label: 'Without options', value: [] },
      {
        label: 'With options',
        value: options,
      },
    ],
  },

  sections: [
    header({
      component: <Search buttonText="Click me!" />,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          columns([
            description({
              title: 'Description',
              text:
                'This line here should briefly describe component in just a sentence or two. It should be short and easy to read.',
            }),
          ]),

          importExample("import { Search } from 'wix-style-react';"),

          divider(),

          title('Examples'),

          example({
            title: 'Simple Usage',
            text:
              'Search component has a basic debounce functionality. This is an example for those who wants to use this component as a controlled component.',
            source: examples.simple,
          }),

          example({
            title: 'predicate',
            text:
              'When options are given, a predicate function can be used to filter the search in a way other than the default. In this case the predicate makes the search be case sensitive.',
            source: examples.predicate,
          }),

          example({
            title: 'expandable',
            text:
              'Search component can start as an icon and expanded when clicked. In order for the expansion to be from right to left the `expandWidth` prop must be provided.',
            source: examples.expandable,
          }),

          example({
            title: 'Sizes',
            text:
              'There are 3 sizes: `small` , `medium` (default) and `large`.',
            source: examples.sizes,
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
