import React from 'react';
import { storySettings } from './storySettings';
import {
  tab,
  code,
  importExample,
  api,
  testkit,
  playground,
  description,
} from 'wix-storybook-utils/Sections';

import * as examples from './examples';

import MessageBoxFunctionalLayout from '../MessageBoxFunctionalLayout';
import SectionHelper from '../../../SectionHelper';

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,
  component: MessageBoxFunctionalLayout,
  componentPath: '../MessageBoxFunctionalLayout.js',

  componentProps: {
    title: 'Interruption Message',
    theme: 'blue',
    confirmText: 'Action',
    children:
      'This is a generic message. No harm done, but really needed to interrupt you.',
  },

  sections: [
    tab({
      title: 'Description',
      sections: [
        description({
          text: (
            <SectionHelper appearance="danger" title="WARNING">
              This component is deprecated! Instead, we advise you to use the
              newer &lt;MessageModalLayout/&gt; component in combination with
              &lt;Modal/&gt;
            </SectionHelper>
          ),
        }),

        importExample({
          source:
            "import { MessageBoxFunctionalLayout } from 'wix-style-react';",
        }),
        code({
          title: 'An Alert modal',
          description: 'Useful for many user interruptions',
          compact: true,
          source: examples.anAlertModal,
        }),
        code({
          title: 'Opening in a modal',
          description:
            'Opening the MessageBoxFunctionalLayout is done with the Modal component, usually in the regular size of full-screen',
          compact: true,
          source: examples.anAlertModalInteraction,
        }),
        code({
          title: 'Themes',
          description: 'Appear in all different themes',
          compact: true,
          source: examples.themes,
        }),
        code({
          title: 'Scrolling',
          description:
            'Scrollbar for the inner content appears when "maxHeight" prop is supplied',
          compact: true,
          source: examples.scrollbar,
        }),
        code({
          title: 'Empty State',
          description:
            'showing an empty state required applying "withEmptyState" and adding <EmptyState/> component',
          compact: true,
          source: examples.emptyState,
        }),
        code({
          title: 'Image Illustration',
          description: 'An image is supplied when passing an "image" node',
          compact: true,
          source: examples.image,
        }),
        code({
          title: 'Footnote',
          description:
            'an extra message can be displayed in a footnote node called "footerBottomChildren"',
          compact: true,
          source: examples.footnote,
        }),
        code({
          title: 'Side Actions',
          description:
            'A side action such as checkbox can be supplied by passing "sideActions" node',
          compact: true,
          source: examples.sideActions,
        }),
      ],
    }),

    ...[
      { title: 'API', sections: [api()] },
      { title: 'Testkit', sections: [testkit()] },
      { title: 'Playground', sections: [playground()] },
    ].map(tab),
  ],
};
