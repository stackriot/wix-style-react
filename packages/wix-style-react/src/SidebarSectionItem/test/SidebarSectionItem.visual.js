import React from 'react';
import { storiesOf } from '@storybook/react';
import Sound from 'wix-ui-icons-common/Sound';

import SidebarSectionItem from '../SidebarSectionItem';
import { SidebarContext } from '../../Sidebar/SidebarAPI';
import Box from '../../Box';
import Badge from '../../Badge';
import WixStyleReactProvider from "../../WixStyleReactProvider";

const skins = ['dark', 'light'];

const baseProps = {
  children: 'Some Text',
};

const SamplePrefix = () => (
  <Box width="8px" height="8px" borderRadius="50%" backgroundColor="G10"></Box>
);

const SampleSuffix = () => <Sound />;

const SampleNewBadgeSuffix = () => (
  <Badge size="small" skin="warning" type="solid" uppercase>
    NEW
  </Badge>
);

const tests = [
  {
    describe: 'Basic',
    its: [
      {
        it: 'Should display with text',
        props: {
          ...baseProps,
        },
      },
      {
        it: 'Should display multiple lines for long text',
        props: {
          children:
            'This is a very long text which exceeds the maximum width of its container',
        },
      },
    ],
  },
  {
    describe: 'Selected',
    its: [
      {
        it: 'Should display as selected',
        props: {
          ...baseProps,
          selected: true,
        },
      },
    ],
  },
  {
    describe: 'Disabled',
    its: [
      {
        it: 'Should display as disabled',
        props: {
          ...baseProps,
          disabled: true,
        },
      },
      {
        it: `Should display as disabled even if it's selected`,
        props: {
          ...baseProps,
          disabled: true,
          selected: true,
        },
      },
    ],
  },
  {
    describe: 'Prefix',
    its: [
      {
        it: 'Should display prefix',
        props: {
          children: '17:45',
          prefix: <SamplePrefix />,
        },
      },
      {
        it: 'Should display prefix and multiple lines',
        props: {
          children:
            'This is a very long text which exceeds the maximum width of its container',
          prefix: <SamplePrefix />,
        },
      },
    ],
  },
  {
    describe: 'Drillable',
    its: [
      {
        it: 'should render drillable',
        props: {
          ...baseProps,
          drillable: true,
        },
      },
      {
        it: 'should render drillable with always on chevron',
        props: {
          ...baseProps,
          drillable: true,
          alwaysDisplayChevron: true,
        },
      },
    ],
  },
  {
    describe: 'Suffix',
    its: [
      {
        it: 'Should display suffix',
        props: {
          ...baseProps,
          suffix: <SampleSuffix />,
        },
      },
      {
        it: 'Should display suffix and multiple lines',
        props: {
          children:
            'This is a very long text which exceeds the maximum width of its container',
          suffix: <SampleSuffix />,
        },
      },
      {
        it: 'Should display suffix with prefix and multiple lines',
        props: {
          children:
            'This is a very long text which exceeds the maximum width of its container',
          prefix: <SamplePrefix />,
          suffix: <SampleSuffix />,
        },
      },
      {
        it: 'Should display suffix with new badge and multiple lines',
        props: {
          children:
            'This is a very long text which exceeds the maximum width of its container',
          suffix: <SampleNewBadgeSuffix />,
        },
      },
    ],
  },
];

const testsWithWsrProvider = [
  {
    describe: 'useBmSidebarNewDesign',
    its: [
      {
        it: 'should render item with useBmSidebarNewDesign class',
        props: {
          ...baseProps
        },
        features: {
          useBmSidebarNewDesign: true
        }
      },
      {
        it: 'should render item without useBmSidebarNewDesign class',
        props: {
          ...baseProps
        },
        features: {
          useBmSidebarNewDesign: false
        }
      }
    ]
  }
];

export const runTests = (
  { themeName, testWithTheme } = { testWithTheme: i => i },
) => {
  tests.forEach(({ describe, its }) =>
    storiesOf(
      `${themeName ? `${themeName}|` : ''}SidebarSectionItem`,
      module,
    ).add(describe, () =>
      testWithTheme(
        <React.Fragment>
          {its.map(({ props }) => (
            <Box backgroundColor="D70">
              {skins.map(skin => (
                <Box direction="vertical" marginBottom={5} marginRight={5}>
                  <SidebarContext.Provider value={{ getSkin: () => skin }}>
                    <SidebarSectionItem {...props} />
                  </SidebarContext.Provider>
                </Box>
              ))}
            </Box>
          ))}
        </React.Fragment>,
      ),
    ),
  );
  testsWithWsrProvider.forEach(({ describe, its }) =>
    storiesOf(
      `${themeName ? `${themeName}|` : ''}SidebarSectionItem`,
      module,
    ).add(describe, () =>
      testWithTheme(
        <React.Fragment>
          {its.map(({ props, features }) => (
            <Box backgroundColor="D70">
              {skins.map(skin => (
                <Box direction="vertical" marginBottom={5} marginRight={5}>
                  <WixStyleReactProvider features={{ useBmSidebarNewDesign: features.useBmSidebarNewDesign }}>
                    <SidebarContext.Provider value={{ getSkin: () => skin }}>
                      <SidebarSectionItem {...props} />
                    </SidebarContext.Provider>
                  </WixStyleReactProvider>
                </Box>
              ))}
            </Box>
          ))}
        </React.Fragment>,
      ),
    ),
  );
};
