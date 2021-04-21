import React from 'react';
import {
  header,
  tabs,
  tab,
  description,
  importExample,
  columns,
  code,
  api,
} from 'wix-storybook-utils/Sections';

import { storySettings } from '../test/storySettings';

import FontUpgrade from '..';

export default {
  category: storySettings.category,
  storyName: 'FontUpgrade',

  component: FontUpgrade,
  componentPath: '..',

  sections: [
    header({
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/FontUpgrade/',
    }),

    description({
      title: 'Description',
      text:
        'FontUpgrade is a wrapper component that upgrades all its children fonts and font settings to the new Madefor font.',
    }),

    columns([importExample("import { FontUpgrade } from 'wix-style-react';")]),

    tabs([
      tab({
        title: 'Example',
        sections: [
          code({
            title: 'Example usage',
            source: `
<FontUpgrade>
  <Card>
    <Card.Header title="Madefor Card" />
    <Card.Divider />
    <Card.Content>
      <EmptyState
        title="This content is using the new Madefor font"
        theme="section"
      >
        <TextButton>I like it!</TextButton>
      </EmptyState>
    </Card.Content>
  </Card>
</FontUpgrade>
      `,
          }),
        ],
      }),
      tab({ title: 'API', sections: [api()] }),
    ]),
  ],
};
