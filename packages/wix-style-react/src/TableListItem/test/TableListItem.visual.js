import React from 'react';
import { storiesOf } from '@storybook/react';
import TableListItem, { VERTICAL_PADDING } from '../TableListItem';
import Text from '../../Text';
import WixStyleReactProvider from '../../WixStyleReactProvider';

const sizes = Object.values(VERTICAL_PADDING);

const commonProps = {
  options: [
    { value: 'Investing', width: '2fr', align: 'right' },
    { value: '4 posts', width: '1fr', align: 'center' },
    { value: '30 April 2020', width: '20%', align: 'left' },
  ],
};

const tests = [
  {
    describe: 'sanity',
    its: [
      {
        it: 'with everything enabled',
        props: {
          showDivider: true,
          checkbox: true,
          checked: true,
          draggable: true,
        },
      },
      {
        it: 'with everything disabled',
        props: {
          showDivider: true,
          checkbox: true,
          checkboxDisabled: true,
          draggable: true,
          dragDisabled: true,
        },
      },
    ],
  },
  {
    describe: 'vertical padding',
    its: sizes.map(verticalPadding => ({
      it: verticalPadding,
      props: {
        verticalPadding,
        checkbox: true,
        draggable: true,
        showDivider: true,
        options: [{ value: 'Personal Finance' }],
      },
    })),
  },
  {
    describe: 'ellipsis',
    its: [
      {
        it: 'should work with Text ellipsis properly',
        props: {
          options: [
            {
              value: (
                <Text ellipsis>
                  Very very very very long messagenVery very very very long
                  message Very very very very long message Very very very very
                  long message Very very very very long message Very very very
                  very long message Very very very very long message
                </Text>
              ),
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
      `${TableListItem.displayName}${describe ? '/' + describe : ''}`,
      module,
    ).add(it, () => <TableListItem {...commonProps} {...props} />);
  });
});

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(
      `Layout And Spacing| ${TableListItem.displayName}/${describe}`,
      module,
    ).add(it, () => (
      <WixStyleReactProvider
        features={{ reducedSpacingAndImprovedLayout: true }}
      >
        <TableListItem {...commonProps} {...props} />
      </WixStyleReactProvider>
    ));
  });
});
