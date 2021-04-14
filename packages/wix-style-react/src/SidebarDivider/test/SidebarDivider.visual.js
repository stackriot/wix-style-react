import React from 'react';
import { storiesOf } from '@storybook/react';

import SidebarDivider from '../SidebarDivider';
import Box from '../../Box';
import { SidebarContext } from '../../Sidebar/SidebarAPI';
import WixStyleReactProvider from "../../WixStyleReactProvider";

const skins = ['dark', 'light'];

const tests = [
  {
    describe: 'Basic',
    its: [
      {
        it: 'Should display as inner',
        props: {},
      },
      {
        it: 'Should display as full width',
        props: {
          fullWidth: true,
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
        props: {},
        features: {
          useBmSidebarNewDesign: true
        }
      },
      {
        it: 'should render item without useBmSidebarNewDesign class',
        props: {},
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
    storiesOf(`${themeName ? `${themeName}|` : ''}SidebarDivider`, module).add(
      describe,
      () =>
        testWithTheme(
          <React.Fragment>
            {its.map(({ props }) => (
              <Box backgroundColor="D70">
                {skins.map(skin => (
                  <Box direction="vertical" marginBottom={5} marginRight={5}>
                    <div style={{ width: '228px' }}>
                      <SidebarContext.Provider value={{ getSkin: () => skin }}>
                        <SidebarDivider {...props} />
                      </SidebarContext.Provider>
                    </div>
                  </Box>
                ))}
              </Box>
            ))}
          </React.Fragment>,
        ),
    ),
  );
  testsWithWsrProvider.forEach(({ describe, its }) =>
    storiesOf(`${themeName ? `${themeName}|` : ''}SidebarDivider`, module).add(
      describe,
      () =>
        testWithTheme(
          <React.Fragment>
            {its.map(({ props, features }) => (
              <Box backgroundColor="D70">
                {skins.map(skin => (
                  <Box direction="vertical" marginBottom={5} marginRight={5}>
                    <div style={{ width: '228px' }}>
                      <WixStyleReactProvider features={{ useBmSidebarNewDesign: features.useBmSidebarNewDesign }}>
                        <SidebarContext.Provider value={{ getSkin: () => skin }}>
                          <SidebarDivider {...props} />
                        </SidebarContext.Provider>
                      </WixStyleReactProvider>
                    </div>
                  </Box>
                ))}
              </Box>
            ))}
          </React.Fragment>,
        ),
    ),
  );
};
