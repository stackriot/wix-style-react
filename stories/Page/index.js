import React from 'react';
import story from '../utils/Components/Story';
import Page from '../../src/Page';
import Button from '../../src/Backoffice/Button';
import Content from './Content';
import Breadcrumbs from './Breadcrumbs';
import SomeTailComponent from './SomeTailComponent';
import './Page.scss';

const header = (
  <Page.Header
    breadcrumbs={Breadcrumbs}
    title="Page Title"
    subtitle="Page subtitle"
    showBackButton
    onBackClicked={(() => {
    })}
    actionsBar={(<Button>Action</Button>)}
    />
);

const content = (
  <Page.Content>
    <Content/>
  </Page.Content>
);

const tail = (
  <Page.Tail>
    <SomeTailComponent/>
  </Page.Tail>
);

story({
  category: '10. Page',
  storyName: '10.1 Page',
  name: 'Page',
  componentSrcFolder: 'Page',
  componentProps: {
    children: [header, tail, content],
    dataHook: 'story-page'
  },
  exampleProps: {
    backgroundImageUrl: ['', 'https://static.wixstatic.com/media/a9ff3b_9928686dcfa740bd802821d0b6f4ac03.jpg/v1/fill/w_1000,h_250,al_c,q_85,usm_0.66_1.00_0.01/a9ff3b_9928686dcfa740bd802821d0b6f4ac03.jpg']
  }
});
