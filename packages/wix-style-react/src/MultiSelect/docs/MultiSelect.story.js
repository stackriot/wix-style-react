import MultiSelect from '..';
import { Category } from '../../../stories/storiesHierarchy';
import * as examples from './MultiSelect.examples';
import content from './MultiSelect.content';

export default {
  category: Category.COMPONENTS,
  storyName: 'Multiselect',
  component: MultiSelect,
  componentPath: '../MultiSelect.js',
  story: {
    content,
    examples,
  },
};
