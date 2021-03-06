import * as React from 'react';
import * as examples from './examples';
import {
  description,
  header,
  api,
  divider,
  importExample,
  playground,
  tab,
  code as baseCode,
  tabs,
  testkit,
  title,
} from 'wix-storybook-utils/Sections';
import { settingsApi } from '../../../../stories/utils/SettingsApi';
import { allComponents } from '../../../../stories/utils/allComponents';
import { settingsPanel } from '../../../../stories/utils/SettingsPanel';
import * as DatePickerWiringExampleRaw from '!raw-loader!./DatePickerWiringExample.tsx';
import * as DatePickerWiringExampleCSSRaw from '!raw-loader!./DatePickerWiringExample.st.css';
import { DatePickerWiringExample } from './DatePickerWiringExample';
import { DatePicker } from '../';
import { storyComponent } from '../../../../stories/helperComponents/storyComponent';
import { StoryCategory } from '../../../../stories/storyHierarchy';

const code = (config) =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: StoryCategory.COMPONENTS,
  storyName: 'DatePicker',
  component: storyComponent(DatePicker),
  componentPath: '../DatePicker.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-DatePicker',
    value: new Date(),
    placeholderText: 'Select Date',
    disabled: false,
    excludePastDates: false,
    showMonthDropdown: false,
    showYearDropdown: false,
  }),
  exampleProps: {
    value: [
      { label: 'Without selected day', value: '' },
      { label: 'Today', value: new Date() },
    ],
    locale: [
      { label: 'en', value: 'en' },
      { label: 'es', value: 'es' },
      { label: 'fr', value: 'fr' },
    ],
    filterDate: [
      {
        label: 'Prior to the current date',
        value: (date) => date < new Date(),
      },
    ],
    firstDayOfWeek: [
      { label: 'Monday', value: 1 },
      { label: 'Sunday', value: 0 },
    ],
    removeOuterPadding: [
      {
        label: 'With Outer Padding',
        value: false,
      },
      {
        label: 'Without Outer Padding',
        value: true,
      },
    ],
    today: [
      {
        label: 'First day of month',
        value: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
      },
      {
        label: 'Middle day of month',
        value: new Date(new Date().getFullYear(), new Date().getMonth(), 15),
      },
    ],
  },
  dataHook: 'storybook-DatePicker',
  sections: [
    header(),
    tabs([
      tab({
        title: 'Usage',
        sections: [
          description(
            'The DatePicker allows a user to select a specific date.',
          ),

          importExample({
            source: examples.importExample,
          }),

          divider(),

          title('Examples'),

          ...[
            { title: 'Simple Usage', source: examples.basicExample },
            {
              title: 'Responsiveness',
              description:
                'The DatePicker width is defined according to the container width.',
              source: examples.responsiveExample,
            },
            {
              title: 'Filter Dates',
              description:
                'In this example only prior dates to the current date can be selected.',
              source: examples.filterExample,
            },
            {
              title: 'Years And Months Dropdowns',
              description:
                'Years or months dropdowns could be added for an easy selection.',
              source: examples.yearsAndMonthDropdowns,
            },
            {
              title: 'Date Indication',
              description:
                'Date indication allows you to add a custom indication under a specific date. It could be an indication for event, appointment, meeting etc.',
              source: examples.dateIndication,
            },
            {
              title: 'A11Y',
              description:
                'This component adds aria attributes for the buttons elements. These values should be translated and should be passed by the props.',
              source: examples.a11y,
            },
          ].map(code),
        ],
      }),

      ...[
        { title: 'Playground', sections: [playground()] },
        { title: 'API', sections: [api()] },
        {
          title: 'Style API',
          sections: [settingsApi()],
        },
        { title: 'TestKit', sections: [testkit()] },
        {
          title: 'Settings Panel',
          sections: [
            settingsPanel({
              title: 'DatePicker Panel',
              example: <DatePickerWiringExample />,
              rawSource: DatePickerWiringExampleRaw,
              rawCSSSource: DatePickerWiringExampleCSSRaw,
              params: {
                colors: [
                  {
                    label: 'Background Color',
                    wixParam: 'customBackgroundColor',
                    defaultColor: 'color-1',
                  },
                  {
                    label: 'Navigation Arrows Color',
                    wixParam: 'customNavigationArrowsColor',
                    defaultColor: 'color-5',
                  },
                  {
                    label: 'Month And Year Caption Color',
                    wixParam: 'customMonthAndYearCaptionColor',
                    defaultColor: 'color-5',
                  },
                  {
                    label: 'Weekday Text Color',
                    wixParam: 'customWeekdayTextColor',
                    defaultColor: 'color-8',
                  },
                  {
                    label: 'Day Color',
                    wixParam: 'customDayColor',
                    defaultColor: 'color-5',
                  },
                  {
                    label: 'Selected Day Color',
                    wixParam: 'customSelectedDayColor',
                    defaultColor: 'color-1',
                  },
                  {
                    label: 'Selected Day BG Color',
                    wixParam: 'customSelectedDayBGColor',
                    defaultColor: 'color-8',
                  },
                  {
                    label: 'Disabled Day Color',
                    wixParam: 'customDisabledDayColor',
                    defaultColor: 'color-8',
                  },
                ],
                fonts: [
                  {
                    label: 'Month And Year Caption Font',
                    wixParam: 'customMonthAndYearCaptionFont',
                    defaultFont: 'arial',
                    size: 16,
                  },
                  {
                    label: 'Weekday Font',
                    wixParam: 'customWeekdayFont',
                    defaultFont: 'arial',
                    size: 14,
                  },
                  {
                    label: 'Day Font',
                    wixParam: 'customDayFont',
                    defaultFont: 'arial',
                    size: 14,
                  },
                ],
                numbers: [
                  {
                    label: 'Selected Day Border Radius',
                    wixParam: 'selectedDayBorderRadius',
                    defaultNumber: 100,
                    unit: '%',
                  },
                  {
                    label: 'Vertical Spacing Between Weeks',
                    wixParam: 'customWeeksVerticalSpacing',
                    defaultNumber: 0,
                    unit: 'px',
                  },
                ],
              },
            }),
          ],
        },
      ].map(tab),
    ]),
  ],
};
