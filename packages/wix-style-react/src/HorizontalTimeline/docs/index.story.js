import React from 'react';
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
  doDont,
} from 'wix-storybook-utils/Sections';

import { storySettings } from '../test/storySettings';

import * as examples from './examples';
import HorizontalTimeline from '..';

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: HorizontalTimeline,
  componentPath: '..',

  componentProps: {
    items: [],
  },

  exampleProps: {
    // Put here presets of props, for more info:
    // https://github.com/wix/wix-ui/blob/master/packages/wix-storybook-utils/docs/usage.md#using-list
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${HorizontalTimeline.displayName}/`,
      component: (
        <div style={{ width: '600px' }}>
          <HorizontalTimeline
            items={[
              {
                label: 'Instructions completed',
                skin: 'dark',
                icon: <HorizontalTimeline.CompleteIcon />,
              },
              {
                label: 'Domain check',
                skin: 'dark',
                icon: <HorizontalTimeline.ActiveIcon />,
              },
              { label: 'Domain connecting' },
              { label: 'Site is live worldwide' },
            ]}
          />
        </div>
      ),
    }),

    tabs([
      tab({
        title: 'Design',
        sections: [
          description({
            title: 'Usage',
            text: `HorizontalTimeline is used to demonstrate the progress of passive events that a person watching it has no effect on.`,
          }),

          doDont({
            do: {
              list: [
                'Use it to demonstrate the progress of server states.',
                'Use it to show task SLA status.',
              ],
            },
            dont: {
              list: [
                'Don’t use it as part of onboarding flow, use <Stepper/> component instead.',
                'Don’t use it to show a long history of events, use <Timeline/> component instead.',
              ],
            },
          }),

          importExample(
            "import { HorizontalTimeline } from 'wix-style-react';",
          ),

          divider(),

          title('Variations'),

          example({
            title: 'Structure',
            text: `Create timeline content by using \`items\` prop. Each item has props to control \`label\`, \`width\`, \`icon\` and \`state\`.`,
            source: examples.structure,
          }),

          example({
            title: 'Align Label',
            text: `
              Control text horizontal alignment with alignLabel prop. It has two options:<br/>
                &emsp;- center (default) - use it in all common cases. <br/>
                &emsp;- start - use it to align text to the left. <br/>
            `,
            source: examples.alignLabel,
          }),

          example({
            title: 'Skin',
            text: `
              Control the style with skin prop. It supports  2 options:<br/>
                &emsp;- dark (default) - use it on colored backgrounds, for example inside SectionHelper.<br/>
                &emsp;- standard - use it on light backgrounds, for example inside a card.<br/>
            `,
            source: examples.skin,
          }),

          example({
            title: 'Line Type',
            text: `
              Control the line type with line prop. It supports  2 options:<br/>
                &emsp;- dashed (default) - use it on colored backgrounds, for example inside SectionHelper.<br/>
                &emsp;- filled - use it to show that this timeline is past.<br/>
            `,
            source: examples.line,
          }),

          example({
            title: 'Item Icons',
            text: `
              Specify item status by using icon prop for items:<br/>
                &emsp;- DefaultIcon - indicates incomplete steps.<br/>
                &emsp;- ActiveIcon - highlights currently active step.<br/>
                &emsp;- CompleteIcon - indicates complete steps.<br/>
                &emsp;- DestructiveIcon - indicates a step that failed to complete.<br/>
                &emsp;- BoundaryIcon - indicates a milestone that doesn’t have status, but should be reflected in the timeline.<br/>
            `,
            source: examples.icons,
          }),

          divider(),

          title('Common Use Cases'),

          example({
            title: 'Connect Domain',
            text:
              'One of the applications where this component is helpful — it shows the status of domain connection that was requested by a user.',
            source: examples.common,
          }),

          divider(),

          title('Feedback'),

          description(
            'You can help us improve this component by providing feedback, asking questions or leaving any  other comments via `#wix-style-ux` or `#wix-style-react` Slack channels or GitHub. Found a bug? Please report it to: <a href="https://goo.gl/forms/wrVuHnyBrEISXUPF2" target="_blank">goo.gl/forms/wrVuHnyBrEISXUPF2</a>',
          ),
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
