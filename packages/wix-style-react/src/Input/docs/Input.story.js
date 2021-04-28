import { Category } from '../../../stories/storiesHierarchy';
import Input from '..';
import * as examples from './Input.examples';
import content from './Input.content';
import demo from './Input.demo';

export default {
  category: Category.COMPONENTS,
  storyName: 'Input',
  component: Input,
  componentPath: '../Input.js',
  story: {
    demo,
    content,
    examples,
  },
};
