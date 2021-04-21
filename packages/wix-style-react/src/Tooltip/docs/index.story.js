import React from 'react';
import {
  api,
  code,
  columns,
  description,
  divider,
  header,
  importExample,
  playground,
  tab,
  tabs,
  title,
} from 'wix-storybook-utils/Sections';
import Tooltip from '..';

import AddItem from '../../AddItem';
import { placements } from '../../Popover';
import Text from '../../Text';
import TextButton from '../../TextButton';
import { storySettings } from '../test/storySettings';
import * as examples from './examples';
import Readme from './README.TESTKIT.md';
import usage from './Usage.md';
import Box from '../../Box';

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: Tooltip,
  componentPath: '..',

  componentProps: {
    children: <TextButton>Hover me</TextButton>,
    content: 'Enter your postal code, so postman can easier send you a mail.',
    appendTo: 'window',
    placement: 'top',
    textAlign: 'start',
    size: 'medium',
  },

  exampleProps: {
    appendTo: ['window', 'scrollParent', 'viewport', 'parent'],
    textAlign: ['start', 'center'],
    size: ['small', 'medium'],
    placement: placements,
    children: [
      {
        label: `TextButton`,
        value: <TextButton>Hover me</TextButton>,
      },
      {
        label: `Text`,
        value: <Text>Long story short</Text>,
      },
      {
        label: `AddItem`,
        value: <AddItem>Hover me</AddItem>,
      },
    ],
  },

  sections: [
    header({
      issueUrl: 'https://github.com/wix/wix-style-react/issues/new',
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/Tooltip/',
      component: (
        <Box>
          <Tooltip appendTo="window" content="Hello!">
            <TextButton skin="dark">Hover me</TextButton>
          </Tooltip>
        </Box>
      ),
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          columns([
            description(
              'A tooltip is a popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
            ),
          ]),

          importExample(),

          divider(),

          columns([
            description({
              title: 'Usage',
              text: usage,
            }),
          ]),

          divider(),

          title('Floating Behaviour'),

          columns([
            code({
              title: 'Flip: Enabled (default) & Fixed: Disabled (default)',
              subtitle:
                'Focus target element (TAB) and scroll viewport to see behaviour',
              source: examples.flip,
            }),
            code({
              title: 'Flip: Disabled & Fixed: Disabled (default)',
              subtitle:
                'Focus target element (TAB) and scroll viewport to see behaviour',
              source: examples.flipnot,
            }),
          ]),
          columns([
            code({
              title: 'Flip: Enabled (default) & Fixed: Enabled',
              subtitle:
                'Focus target element (TAB) and scroll viewport to see behaviour',
              source: examples.fixed,
            }),
          ]),

          title('Accessibility'),

          columns([
            code({
              title: 'Focus behaviour',
              subtitle:
                'The tooltip content appears on keyboard focus for native focusable html elements like: `<button>` or `<input>` or any focusable wix-style-react component.',
              source: examples.focus,
            }),
            code({
              title: 'ARIA guidelines',
              subtitle:
                'The tooltip content is bound to tooltip trigger element by aria-describedby prop. VoiceOver users will get tooltips content information as soon as target element is focused.',
              source: examples.a11y,
            }),
          ]),

          title('Attachment to DOM'),

          columns([
            code({
              title: 'Append to: parent',
              subtitle: `If you inspect the content, you'll see it is attached to a new div next to the target element.`,
              source: examples.parent,
            }),
            code({
              title: 'Append to: window',
              subtitle: `If you inspect the content, you'll see it is attached to a new <div/> under the body.`,
              source: examples.window,
            }),
          ]),
          columns([
            code({
              title: 'Append to: viewport',
              subtitle: `This is similar to window as it also appends the content to a new <div/> under the body, but also set its boundary to the viewport.`,
              source: examples.viewport,
            }),
            code({
              title: 'Append to: scrollparent',
              subtitle: `If you inspect the content, you'll see it is attached to a new div under the list container.`,
              source: examples.scrollParent,
            }),
          ]),
          columns([
            code({
              title:
                "Append to: `(elm) => elm.getAttribute('attribute') === value`",
              subtitle: `Attach to custom parent element. Pass function that will accept element and return boolean whether given DOM element satisfies the provided testing function.`,
              source: examples.predicate,
            }),
          ]),

          title('Correct position for `block` elements'),

          columns([
            code({
              title: 'Wrap with `<Box inline>`',
              subtitle:
                'Given element with `display: block;`, Tooltip might be displayed in wrong position. To fix, wrap with `<Box inline>`',
              source: examples.inlineFix,
            }),
          ]),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'Testkit', sections: [description(Readme)] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};
