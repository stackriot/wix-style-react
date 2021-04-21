import React from 'react';
import { storiesOf } from '@storybook/react';
import HorizontalTimeline from '../HorizontalTimeline';

const tests = [
  {
    describe: 'items',
    its: [
      {
        it: 'defaults',
        props: {
          items: [
            { label: 'Instructions completed' },
            { label: 'Domain check' },
            { label: 'Site is live worldwide' },
          ],
        },
      },
      {
        it: 'should have custom width for items',
        props: {
          items: [
            { label: 'Instructions completed', width: '50px' },
            { label: 'Domain check' },
            { label: 'Site is live worldwide', width: '5%' },
          ],
        },
      },
      {
        it: 'should have start alignment for label',
        props: {
          alignLabel: 'start',
          items: [
            { label: 'Instructions completed' },
            { label: 'Domain check' },
            { label: 'Site is live worldwide' },
          ],
        },
      },
      {
        it: 'should have dark skin by default',
        props: {
          items: [
            { label: 'Instructions completed' },
            { label: 'Domain check' },
            { label: 'Site is live worldwide' },
          ],
        },
      },
      {
        it: 'should have standard skin when applied',
        props: {
          skin: 'standard',
          items: [
            { label: 'Instructions completed', line: 'filled' },
            { label: 'Domain check', line: 'filled' },
            { label: 'Site is live worldwide', line: 'filled' },
          ],
        },
      },
      {
        it: 'should have filled line on dark skin',
        props: {
          items: [
            { label: 'Instructions completed', line: 'filled' },
            { label: 'Domain check', line: 'filled' },
            { label: 'Site is live worldwide', line: 'filled' },
          ],
        },
      },
      {
        it: 'should have dark skin for icons by default',
        props: {
          items: [
            {
              label: 'Instructions completed',
              icon: <HorizontalTimeline.CompleteIcon />,
            },
            {
              label: 'Domain check',
              icon: <HorizontalTimeline.ActiveIcon />,
            },
            {
              label: 'Domain connecting',
              icon: <HorizontalTimeline.DefaultIcon />,
            },
            {
              label: 'Site is live worldwide',
              icon: <HorizontalTimeline.DestructiveIcon />,
            },
            {
              label: 'Domain ending',
              icon: <HorizontalTimeline.BoundaryIcon />,
            },
          ],
        },
      },
      {
        it: 'should have icons standard skin when applied',
        props: {
          items: [
            {
              label: 'Instructions completed',
              icon: <HorizontalTimeline.CompleteIcon skin="standard" />,
            },
            {
              label: 'Domain check',
              icon: <HorizontalTimeline.ActiveIcon skin="standard" />,
            },
            {
              label: 'Domain connecting',
              icon: <HorizontalTimeline.DefaultIcon skin="standard" />,
            },
            {
              label: 'Site is live worldwide',
              icon: <HorizontalTimeline.DestructiveIcon skin="standard" />,
            },
            {
              label: 'Domain ending',
              icon: <HorizontalTimeline.BoundaryIcon skin="standard" />,
            },
          ],
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(
      `${HorizontalTimeline.displayName}${describe ? '/' + describe : ''}`,
      module,
    ).add(it, () => <HorizontalTimeline {...props} />);
  });
});
