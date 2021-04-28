import { Category } from '../../../stories/storiesHierarchy';
import Modal from '..'
import * as examples from './Modal.examples';
import content from './Modal.content';

export default {
  category: Category.COMPONENTS,
  storyName: 'Modal',
  component: Modal,
  componentPath: '../Modal.js',
  story: {
    content,
    examples,
  },
};
