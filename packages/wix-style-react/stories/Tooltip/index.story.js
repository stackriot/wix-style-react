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
import Box from '../../src/Box';

import { TextButton, Tooltip } from 'wix-style-react';

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  sections: [
    header({
      component: (
        <Box>
          <Tooltip appendTo="window" content="Hello!">
            <TextButton skin="dark">Hover me</TextButton>
          </Tooltip>
        </Box>
      ),
    }),

    columns([
      description({
        title: 'Description',
        text: `Tooltips can be attached to any active element (icons, text links, buttons, etc.) on a page. They provide descriptions or explanations for their paired element. Thus, tooltips are highly contextual and specific and don’t explain the bigger picture or entire task flow.`,
      }),
    ]),

    columns([
      table({
        title: 'Included Components',
        rows: [
          [
            <LinkTo
              kind={Category.COMPONENTS}
              story="Tooltip"
            >{`<Tooltip/>`}</LinkTo>,
            'content element',
          ],
          [
            <LinkTo
              kind={Category.BUTTONS}
              story="5.3 TextButton"
            >{`<TextButton/>`}</LinkTo>,
            'trigger element',
          ],
          [
            <LinkTo
              kind={Category.COMPONENTS}
              story="Text"
            >{`<Text/>`}</LinkTo>,
            'trigger element',
          ],
        ],
      }),
    ]),

    importExample(examples.importExample),

    title('Examples'),

    example({
      title: 'Plain Example',
      text: 'Plain example of how to use tooltip.',
      source: examples.basic,
    }),

    example({
      title: 'Placement',
      text:
        'Tooltips have four standard placements available: `top`, `right`, `bottom`, and `left`. Each standard position center-aligns itself along the appropriate axis and appears outside the target element.',
      source: examples.placements,
    }),

    example({
      title: 'Delay',
      text:
        'Time in milliseconds to wait before showing or hiding the tooltip. Controlled by props `enterDelay` or `exitDelay`.',
      source: examples.delay,
    }),

    example({
      title: 'Size',
      text: 'Tooltip supports two sizes: `small` and `medium`.',
      source: examples.size,
    }),

    example({
      title: 'Disabled Elements',
      text:
        'By default disabled elements like `<button>` do not trigger user interactions so a Tooltip will not activate on normal events like hover. To accommodate disabled elements, set `disabled={false}` to the `<Tooltip>`.',
      source: examples.disabled,
    }),
  ],
};
