import AvatarGroup from '..';
import { Category } from '../../../stories/storiesHierarchy';
import * as examples from './AvatarGroup.examples';
import content from './AvatarGroup.content';

export default {
  category: Category.COMPONENTS,
  storyName: 'AvatarGroup',
  component: AvatarGroup,
  componentPath: '../AvatarGroup.js',
  story: {
    content,
    examples,
  },
};
