import * as React from 'react';
import {
  api,
  code as baseCode,
  divider,
  header,
  importExample,
  playground,
  tab,
  tabs,
  testkit,
  title,
} from 'wix-storybook-utils/Sections';
import { settingsPanel } from '../../../../stories/utils/SettingsPanel';
import { BUTTON_PRIORITY, NOTIFICATION_TYPE, SectionNotification } from '../';
import { allComponents } from '../../../../stories/utils/allComponents';
import { settingsApi } from '../../../../stories/utils/SettingsApi';
import { ReactComponent as ErrorIcon } from '../../../assets/icons/Error.svg';
import * as examples from './examples';
import { StoryCategory } from '../../../../stories/storyHierarchy';
import { storyComponent } from '../../../../stories/helperComponents/storyComponent';
import { NOTIFICATION_SIZE } from '../types';
import { SectionNotificationWiringExample } from './SectionNotificationWiringExample';
import * as SectionNotificationRawSource from '!raw-loader!./SectionNotificationWiringExample.tsx';
import * as SectionNotificationCSSRawSource from '!raw-loader!./SectionNotificationWiringExample.st.css';

const code = (config) =>
  baseCode({ components: allComponents, compact: true, ...config });

const childrenProps = {
  icon: <SectionNotification.Icon icon={<ErrorIcon />} key="icon" />,
  text: (
    <SectionNotification.Text key="text">
      This group will only be created after you approve it.
    </SectionNotification.Text>
  ),
  secondaryButton: (
    <SectionNotification.Button
      key="decline"
      priority={BUTTON_PRIORITY.basicSecondary}
    >
      Decline
    </SectionNotification.Button>
  ),
  basicButton: (
    <SectionNotification.Button key="approve" priority={BUTTON_PRIORITY.basic}>
      Approve
    </SectionNotification.Button>
  ),
};

const children = [
  { label: 'Only Text', value: [childrenProps.text] },
  {
    label: 'Text & Buttons',
    value: [
      childrenProps.text,
      childrenProps.secondaryButton,
      childrenProps.basicButton,
    ],
  },
  {
    label: 'Icon, Text & Buttons',
    value: [
      childrenProps.icon,
      childrenProps.text,
      childrenProps.secondaryButton,
      childrenProps.basicButton,
    ],
  },
];

export default {
  category: StoryCategory.COMPONENTS,
  storyName: 'SectionNotification',
  component: storyComponent(SectionNotification),
  componentPath: '../SectionNotification.tsx',
  // tslint:disable:jsx-wrap-multiline
  componentProps: () => ({
    'data-hook': 'storybook-SectionNotification',
    type: NOTIFICATION_TYPE.default,
    children: children[2].value,
  }),
  exampleProps: {
    type: Object.values(NOTIFICATION_TYPE),
    size: Object.values(NOTIFICATION_SIZE),
    children,
  },
  dataHook: 'storybook-SectionNotification',
  sections: [
    header(),
    tabs([
      tab({
        title: 'Usage',
        sections: [
          divider(),

          importExample({
            source: examples.importExample,
          }),

          divider(),

          title('Examples'),

          ...Object.values(NOTIFICATION_TYPE)
            .map((type) => ({
              title: type,
              source: examples.example.desktop[type],
            }))
            .map(code),

          title('Sizes'),

          ...Object.values(NOTIFICATION_SIZE)
            .map((size) => ({
              title: size,
              source: examples.sizesExample[size],
            }))
            .map(code),

          title('Mobile Examples'),

          ...Object.values(NOTIFICATION_TYPE)
            .map((type) => ({
              title: type,
              source: examples.example.mobile[type],
            }))
            .map(code),
        ],
      }),
      ...[
        { title: 'API', sections: [api()] },
        { title: 'Style API', sections: [settingsApi()] },
        { title: 'TestKit', sections: [testkit()] },
        {
          title: 'Settings Panel',
          sections: [
            settingsPanel({
              title: 'Settings Panel',
              example: <SectionNotificationWiringExample />,
              rawSource: SectionNotificationRawSource,
              rawCSSSource: SectionNotificationCSSRawSource,
              params: {
                colors: [
                  {
                    label: 'Background Color',
                    wixParam: 'backgroundColor',
                    defaultColor: 'color-1',
                  },
                  {
                    label: 'Text Color',
                    wixParam: 'textColor',
                    defaultColor: 'color-5',
                  },
                ],
              },
            }),
          ],
        },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};
