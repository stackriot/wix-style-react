import React from 'react';
import CheckToggle from '../CheckToggle';
import { storyOfAllPermutations } from '../../../test/utils/visual/utils';

const Story = props => <CheckToggle {...props} />;

const options = {
  props: ['checked', 'size', 'skin', 'disabled'],
  skipUndefinedValue: true,
};

export const runTests = (
  { themeName, testWithTheme } = { testWithTheme: i => i },
) => {
  options.themeName = themeName;
  options.testWithTheme = testWithTheme;
  storyOfAllPermutations(Story, CheckToggle, options);
};
