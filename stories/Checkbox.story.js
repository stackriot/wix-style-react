import React from 'react';

import Checkbox from 'wix-style-react/Checkbox';
import Languages from 'wix-style-react/new-icons/Languages';

const labelExamples = [
  {label: 'Simple string', value: 'Hello World!'},
  {
    label: 'Component',
    value: <span key={0}>Hello <strong>World!</strong></span>
  },
  {
    label: 'Component with icon',
    value: <span key={1}>Hello <Languages/></span>
  }
];

export default {
  category: '4. Selection',
  storyName: '4.2 Checkbox',
  component: Checkbox,
  componentPath: '../src/Checkbox',

  componentProps: setState => ({
    children: labelExamples[0].value,
    onChange: ({target: {checked}}) => setState({checked}),
    dataHook: 'storybook-checkbox'
  }),

  exampleProps: {
    children: labelExamples,
    onChange: ({target: {checked}}) => checked ? 'Checked' : 'Unchecked'
  }
};
