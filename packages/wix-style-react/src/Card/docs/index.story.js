import {
  api,
  tabs,
  tab,
  title,
  code,
  description,
  importExample,
  header,
  divider,
} from 'wix-storybook-utils/Sections';

import Card from '..';

import { storySettings } from './storySettings';

import CompoundComponentsRaw from '!raw-loader!./CompoundComponents.md';

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,
  component: Card,
  componentPath: '../Card.js',

  componentProps: {},

  sections: [
    header({}),
    tabs([
      tab({
        title: 'Usage',
        sections: [
          description({
            title: 'Description',
            description:
              'Card is a compound component for any content to be displayed in a styled block. This is one of the basic building blocks and combined well with Layout component',
          }),

          importExample(`
import { Card } from 'wix-style-react';
const { Header, Subheader, Content, Divider} = Card;
            `),

          divider(),

          title('Basic Examples'),
          ...[
            {
              title: 'Basic',
              description:
                'A simple card simply apply default styles background, for any custom layout',
              source: `
                <Card>
                  <Box height="160px"/>
                </Card>
                `,
              compact: false,
            },
            {
              title: 'Header',
              description:
                "Card's heading area that can contain title, subtitle and action area using <Card.Header/>",
              source: `
                <Card>
                  <Card.Header title="Card title" subtitle="This is how a subtitle looks like" suffix={<Button prefixIcon={<Icons.Add/>}>New Item</Button>}/>
                  <Card.Divider />
                  <Box height="160px"/>
                </Card>
                `,
              compact: false,
            },
            {
              title: 'Sub Header',
              description:
                "Card's sub-header is and area that can contain title and additional action using <Card.Subheader/>",
              source: `
                <Card>
                  <Card.Header title="Order Summary"/>
                  <Card.Subheader title="Products to Fulfill" suffix={<Button size="tiny">Create Label</Button>}/>
                  <Box height="160px"/>
                </Card>
                `,
              compact: false,
            },
            {
              title: 'Divider',
              description:
                "Card's divider and be applied between different content using <Card.Divider/>",
              source: `
                <Card>
                  <Box height="42px"/>
                  <Card.Divider/>
                  <Box height="42px"/>
                </Card>
                `,
              compact: false,
            },
            {
              title: 'Content',
              description:
                "Card's content area that can contain any custom content, for example forms using the <Card.Content/>",
              source: `
                <Card>
                  <Card.Content>
                    <Layout>
                      <Cell span={6}>
                        <FormField label="form field">
                          <Input />
                        </FormField>
                      </Cell>
                      <Cell span={6}>
                        <FormField label="form field">
                          <Input />
                        </FormField>
                      </Cell>
                    </Layout>
                  </Card.Content>
                </Card>
                `,
              compact: false,
            },
            {
              title: 'Controls',
              description:
                'Set the `controls` property to make controls appear on the card',
              source: `
                <Card controls={<CloseButton />}>
                  <Box height="160px"/>
                </Card>
                `,
              compact: false,
            },
            {
              title: 'Collapsable',
              description:
                'A collapsed card behavior can be achieved by using the <Collapse/> component',
              source: `
                class CollapsableCard extends React.Component {
                  state = { isOpen: true };
                  render() {
                    return (
                      <Card>
                        <Card.Header
                          title="Card with collapsable content"
                          suffix={
                            <ToggleSwitch checked={this.state.isOpen} onChange={() => this.setState({isOpen: !this.state.isOpen})}/>
                          }
                        />
                        {this.state.isOpen && <Card.Divider />}
                        <Collapse open={this.state.isOpen}>
                          <Card.Content>
                            <Box height="160px"/>
                          </Card.Content>
                        </Collapse>
                      </Card>
                    );
                  }
                }
                `,
              compact: false,
            },
          ].map(code),

          divider(),

          title('Layout Examples'),

          ...[
            {
              title: 'Card Layout',
              description:
                'In most cases a card will be placed on top of a Layout',
              source: `
                <Layout>
                  <Cell span={8}>
                    <Card>
                      <Card.Header title="First Card" />
                      <Card.Divider />
                      <Card.Content>
                        <EmptyState
                          title="You don't have any items yet"
                          subtitle="Create your product item in an easy & fast way to display it on your site"
                          theme="section"
                        >
                          <TextButton prefixIcon={<Icons.Add />}>New Item</TextButton>
                        </EmptyState>
                      </Card.Content>
                    </Card>
                  </Cell>
                  <Cell span={4}>
                    <Card>
                      <Card.Header title="Second Card" />
                      <Card.Divider />
                      <Card.Content>
                        <Box align="center">
                          <Avatar size="size72" />
                        </Box>
                      </Card.Content>
                    </Card>
                  </Cell>
                </Layout>
                `,
              compact: true,
            },
          ].map(code),
        ],
      }),
      ...[
        {
          title: 'API',
          sections: [api()],
        },
        {
          title: 'Compound Components API',
          sections: [
            description({
              title: 'Compound Components APIs',
              text: CompoundComponentsRaw,
            }),
          ],
        },
      ].map(tab),
    ]),
  ],
};
