import React from 'react';
import HorizontalTimeline from '..';

export default () => (
  <div style={{ width: '600px' }}>
    <HorizontalTimeline
      items={[
        {
          label: 'Instructions completed',
          skin: 'dark',
          icon: <HorizontalTimeline.CompleteIcon />,
        },
        {
          label: 'Domain check',
          skin: 'dark',
          icon: <HorizontalTimeline.ActiveIcon />,
        },
        { label: 'Domain connecting' },
        { label: 'Site is live worldwide' },
      ]}
    />
  </div>
);
