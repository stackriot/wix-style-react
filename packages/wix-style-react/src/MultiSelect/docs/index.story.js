import MultiSelect from '..';

import {
  description,
  divider,
  header,
  importExample,
  playground,
  tab,
  tabs,
  api,
  testkit,
  title,
  example as baseExample,
  doDont,
} from 'wix-storybook-utils/Sections';

import readmeTestkit from '../README.TESTKIT.md';
import allComponents from '../../../stories/utils/allComponents';

import { storySettings } from './storySettings';
import * as examples from './examples';

const example = config => baseExample({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,
  component: MultiSelect,

  componentPath: '..',

  sections: [
    header({
      issueUrl: 'https://github.com/wix/wix-style-react/issues/new',
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${MultiSelect.displayName}/`,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text:
              'Multiselect allows users to enter and display multiple keywords.',
          }),

          doDont({
            do: {
              title: 'Use it',
              list: [
                'When the site owner needs to enter multiple keywords like names, emails, countries, etc.',
                'As tag input.',
              ],
            },
            dont: {
              title: `Dont't use it`,
              list: [
                'Don’t use it as variableInput',
                'Don’t use it instead of multiselectCheckbox',
              ],
            },
          }),

          importExample("import { MultiSelect } from 'wix-style-react';"),

          divider(),

          title('Examples'),

          example({
            title: 'Size',
            text: `
              Adjust the component size using size prop. It supports 3 sizes:<br/>
              &emsp;- \`large\` - use it in onboarding flows, where input needs emphasis.<br/>
              &emsp;- \`medium\` (default) - use in all common cases.<br/>
              &emsp;- \`small\` - use in more dense and narrow layouts.<br/>
              Please keep in mind that tag size has to be set separately.
            `,
            source: examples.size,
          }),

          example({
            title: 'Action',
            text:
              'Encourage user interaction by displaying the call to action. Add textButton using `customSuffix` property.',
            source: examples.action,
          }),

          example({
            title: 'Select Mode',
            text:
              'Restrict user to selecting only listed options by using `mode` property.',
            source: examples.selectMode,
          }),

          example({
            title: 'User Input',
            text:
              'Allow users to enter their own tags using the keyboard with `onManuallyInput` property.',
            source: examples.manualInput,
          }),

          example({
            title: 'Predicate',
            text: 'Build autocomplete features using `predicate` prop',
            source: examples.autocomplete,
          }),

          example({
            title: 'Reorder',
            text:
              'Allow users to change in what order keywords will be displayed. Use `onReorder` prop to  build this functionality.',
            source: examples.reorder,
          }),

          title('Common Use Cases'),

          example({
            title: 'Enter Contact Emails',
            text: `Multiselect input might be useful for entering contacts or emails.
            Combined with advanced list item props,  Multiselect component can provide explicit information, therefore, making multiple keyboard entries easier.
            `,
            source: examples.suggestions,
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
        { title: 'Testkit', sections: [description(readmeTestkit), testkit()] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};
