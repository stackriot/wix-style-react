import React from 'react';
import {storiesOf} from '@storybook/react';
import Markdown from '../utils/Components/Markdown';
import CodeExample from '../utils/Components/CodeExample';
import Readme from '../../src/Animations/README.md';

import ExampleOpacity from './ExampleOpacity';
import ExampleOpacityRaw from '!raw-loader!./ExampleOpacity';

import ExampleOpacityAndScale from './ExampleOpacityAndScale';
import ExampleOpacityAndScaleRaw from '!raw-loader!./ExampleOpacityAndScale';

import ExampleTranslate from './ExampleTranslate';
import ExampleTranslateRaw from '!raw-loader!./ExampleTranslate';

import ExampleTranslateSize from './ExampleTranslateSize';
import ExampleTranslateSizeRaw from '!raw-loader!./ExampleTranslateSize';

import ExampleMockServer from './ExampleMockServer';
import ExampleMockServerRaw from '!raw-loader!./ExampleMockServer';

import ExampleTranslateDirection from './ExampleTranslateDirection';
import ExampleTranslateDirectionRaw from '!raw-loader!./ExampleTranslateDirection';

import ExampleTiming from './ExampleTiming';
import ExampleTimingRaw from '!raw-loader!./ExampleTiming';

import ExampleClasses from './ExampleClasses';
import ExampleClassesRaw from '!raw-loader!./ExampleClasses';

import ExampleSequence from './ExampleSequence';
import ExampleSequenceRaw from '!raw-loader!./ExampleSequence';

import ExampleDebug from './ExampleDebug';
import ExampleDebugRaw from '!raw-loader!./ExampleDebug';

import ExampleDebugTranslateSize from './ExampleDebugTranslateSize';
import ExampleDebugTranslateSizeRaw from '!raw-loader!./ExampleDebugTranslateSize';

import ExampleStandard from './ExampleStandard';
import ExampleStandardRaw from '!raw-loader!./ExampleStandard';

storiesOf('Common', module)
  .add('Animations', () => (
    <div>
      <Markdown source={Readme}/>

      <h1>Usage examples</h1>

      <CodeExample title="Opacity Animation" code={ExampleOpacityRaw}>
        <ExampleOpacity/>
      </CodeExample>

      <CodeExample title="Opacity and Scale Animation" code={ExampleOpacityAndScaleRaw}>
        <ExampleOpacityAndScale/>
      </CodeExample>

      <CodeExample title="Translate Animation - All 4 syntax are equivalent" code={ExampleTranslateRaw}>
        <ExampleTranslate/>
      </CodeExample>

      <CodeExample title="Translate Sizes" code={ExampleTranslateSizeRaw}>
        <ExampleTranslateSize/>
      </CodeExample>

      <CodeExample title="Translate Directions" code={ExampleTranslateDirectionRaw}>
        <ExampleTranslateDirection/>
      </CodeExample>

      <CodeExample title="Different Timing" code={ExampleTimingRaw}>
        <ExampleTiming/>
      </CodeExample>

      <CodeExample title="Adding Custom Classes" code={ExampleClassesRaw}>
        <ExampleClasses/>
      </CodeExample>

      <CodeExample title="Sequence" code={ExampleSequenceRaw}>
        <ExampleSequence/>
      </CodeExample>

      <CodeExample title="Data from server scenario example" code={ExampleMockServerRaw}>
        <ExampleMockServer/>
      </CodeExample>

      <CodeExample title="Debug - Emulates animation stages - Inspect element in devtools to see class changes" code={ExampleDebugRaw}>
        <ExampleDebug/>
      </CodeExample>

      <CodeExample title="Debugging Example - Examine the 'enter' mode before 'entering' on translate and opacity animation" code={ExampleDebugTranslateSizeRaw}>
        <ExampleDebugTranslateSize/>
      </CodeExample>

      <CodeExample title="Playground" code={ExampleStandardRaw}>
        <ExampleStandard/>
      </CodeExample>
    </div>
  ));
