import React from 'react';
import LinkTo from '@storybook/addon-links/react';
import {
  title,
  description,
  columns,
  table,
  importExample,
  code,
} from 'wix-storybook-utils/Sections';

import { storySettings } from './storySettings';

import FormExampleRaw from '!raw-loader!./FormExample';
import EmptyStateExampleRaw from '!raw-loader!./EmptyStateExample';
import { Category } from '../storiesHierarchy';

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  sections: [
    description({
      title: 'Description',
      text: `Compositions from multiple components that help to setup Cards.`,
    }),

    columns([
      table({
        title: 'Related Components',
        rows: [
          [
            <LinkTo
              kind={Category.COMPONENTS}
              story="Card"
              children="<Card/>"
            />,
            'The Card component',
          ],

          [
            <LinkTo
              kind={Category.COMPONENTS}
              story="Layout"
              children="<Layout/>"
            />,
            'Component that constructs a layout',
          ],
          [
            <LinkTo
              kind={Category.COMPONENTS}
              story="EmptyState"
              children="<EmptyState/>"
            />,
            'Component that render Empty state layout',
          ],
        ],
      }),
    ]),

    importExample(`
import { Card } from 'wix-style-react';
const { Header, Subheader, Content, Divider} = Card;
    `),

    title('Layout Examples'),

    ...[
      {
        title: 'Form',
        description: 'Card uses Layout component to align form elements.',
        source: FormExampleRaw,
      },
      {
        title: 'Empty State',
        description: 'Card can display an empty state with some action button',
        source: EmptyStateExampleRaw,
      },
    ].map(code),
  ],
};
