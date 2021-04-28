import React from 'react';
import { storiesOf } from '@storybook/react';

import SidebarSectionTitle from '../SidebarSectionTitle';
import Box from '../../Box';
import { SidebarContext } from '../../Sidebar/SidebarAPI';
import WixStyleReactProvider from "../../WixStyleReactProvider";

const skins = ['dark', 'light'];

const tests = [
  {
    describe: 'Basic',
    its: [
      {
        it: 'Should display with text',
        props: {
          children: 'Some Text',
        },
      },
      {
        it: 'Should display an ellipsis for long text',
        props: {
          children:
            'This is a very long text which exceeds the maximum width of its container',
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
          children: 'Some Text',
        },
        features: {
          useBmSidebarNewDesign: true
        }
      },
      {
        it: 'should render item without useBmSidebarNewDesign class',
        props: {
          children: 'Some Text',
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
      `${themeName ? `${themeName}|` : ''}SidebarSectionTitle`,
      module,
    ).add(describe, () =>
      testWithTheme(
        <React.Fragment>
          {its.map(({ props }) => (
            <Box backgroundColor="D70">
              {skins.map(skin => (
                <Box direction="vertical" marginBottom={5} marginRight={5}>
                  <SidebarContext.Provider value={{ getSkin: () => skin }}>
                    <SidebarSectionTitle {...props} />
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
      `${themeName ? `${themeName}|` : ''}SidebarSectionTitle`,
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
                      <SidebarSectionTitle {...props} />
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
