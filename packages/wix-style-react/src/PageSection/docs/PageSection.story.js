import PageSection from '..';
import { Category } from '../../../stories/storiesHierarchy';
import * as examples from './PageSection.examples';
import content from './PageSection.content';
import demo from './PageSection.demo';

export default {
  category: Category.COMPONENTS,
  storyName: 'PageSection',
  component: PageSection,
  componentPath: '../PageSection.js',
  story: {
    content,
    examples,
    demo,
  },
};
