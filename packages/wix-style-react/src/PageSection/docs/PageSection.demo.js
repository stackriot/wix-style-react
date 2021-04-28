import React from 'react';
import Page from '../../Page';
import Card from '../../Card';
import Box from '../../Box';
import Text from '../../Text';
import TextButton from '../../TextButton';
import ChevronRightSmall from 'wix-ui-icons-common/ChevronRightSmall';
import { Layout, Cell } from '../../Layout';

export default () => (
  <Page>
    <Page.Content>
      <Layout>
        <Cell>
          <Layout>
            <Cell>
              <Page.Section
                title="Customer Management Tools"
                showDivider
                actionsBar={<TextButton>See All Tools</TextButton>}
              />
            </Cell>
            <Cell span={4}>
              <Card>
                <Box padding="24px" direction="vertical" gap="3px">
                  <Box color="B10" verticalAlign="middle">
                    <Text weight="bold">Contact List</Text>
                    <ChevronRightSmall />
                  </Box>
                  <Text size="small" secondary>
                    Keep track of everyone who interacts with your site and
                    business.
                  </Text>
                </Box>
              </Card>
            </Cell>
            <Cell span={4}>
              <Card>
                <Box padding="24px" direction="vertical" gap="3px">
                  <Box color="B10" verticalAlign="middle">
                    <Text weight="bold">Inbox & Chat</Text>
                    <ChevronRightSmall />
                  </Box>
                  <Text size="small" secondary>
                    View and reply to messages for all your business
                    communications.
                  </Text>
                </Box>
              </Card>
            </Cell>
            <Cell span={4}>
              <Card>
                <Box padding="24px" direction="vertical" gap="3px">
                  <Box color="B10" verticalAlign="middle">
                    <Text weight="bold">Forms</Text>
                    <ChevronRightSmall />
                  </Box>
                  <Text size="small" secondary>
                    Collect contact details, capture leads, take payments and
                    more.
                  </Text>
                </Box>
              </Card>
            </Cell>
          </Layout>
        </Cell>
      </Layout>
    </Page.Content>
  </Page>
);
