import React from 'react';
import {storiesOf} from '@storybook/react';

import Markdown from 'wix-storybook-utils/Markdown';

import Readme from '../../README.md';
import TestsReadme from '../../docs/TESTS.md';
import Contribution from '../../docs/CONTRIBUTING.md';
import AddingStory from '../../docs/adding-story.md';
import TPA from '../../src/TPA/README.md';
import UsageWithoutHasteReadme from '../../docs/usage-without-haste.md';

storiesOf('Introduction', module)
  .add('Getting started', () => <Markdown source={Readme}/>)
  .add('Testing', () => <Markdown source={TestsReadme}/>)
  .add('Contribution', () => <Markdown source={Contribution}/>)
  .add('TPA', () => <Markdown source={TPA}/>)
  .add('Usage Without Haste', () => <Markdown source={UsageWithoutHasteReadme}/>)
  .add('Documenting components', () => <Markdown source={AddingStory}/>);
