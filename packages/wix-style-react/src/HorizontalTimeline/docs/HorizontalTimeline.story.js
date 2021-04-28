import HorizontalTimeline from '..';
import { Category } from '../../../stories/storiesHierarchy';
import * as examples from './HorizontalTimeline.examples';
import content from './HorizontalTimeline.content';
import demo from './HorizontalTimeline.demo';

export default {
  category: Category.COMPONENTS,
  storyName: 'HorizontalTimeline',
  component: HorizontalTimeline,
  componentPath: '../HorizontalTimeline.js',
  story: {
    demo,
    content,
    examples,
  },
};
