import { Category } from '../../../stories/storiesHierarchy';
import Box from '..';
import * as examples from './Box.examples';
import content from './Box.content';

export default {
  category: Category.COMPONENTS,
  storyName: 'Box',
  component: Box,
  componentPath: '../Box.js',
  story: {
    content,
    examples,
  },
};
