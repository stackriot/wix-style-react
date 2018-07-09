import React from 'react';
import story from '../utils/Components/Story';
import Button from '../../src/Backoffice/Button';
import Breadcrumbs from '../Page/Breadcrumbs';
import './PageHeader.scss';

const action = <Button>Action</Button>;

story({
  category: '10. Page',
  storyName: '10.2 Header with Options',
  componentSrcFolder: 'PageHeader',
  componentProps: {
    onBackClicked: () => {},
    title: 'Page Header',
    dataHook: 'story-page-header'
  },
  exampleProps: {
    breadcrumbs: [null, Breadcrumbs],
    actionsBar: [null, action]
  }
});
