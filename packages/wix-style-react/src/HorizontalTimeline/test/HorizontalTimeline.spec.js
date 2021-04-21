import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import HorizontalTimeline from '../HorizontalTimeline';
import { horizontalTimelinePrivateDriverFactory } from './HorizontalTimeline.private.uni.driver';

describe(HorizontalTimeline.displayName, () => {
  const render = createRendererWithUniDriver(
    horizontalTimelinePrivateDriverFactory,
  );
  const items = [
    {
      label: 'active-icon',
      line: 'filled',
      icon: <HorizontalTimeline.ActiveIcon />,
    },
    {
      label: 'default-icon',
      line: 'filled',
      icon: <HorizontalTimeline.DefaultIcon />,
    },
    {
      label: 'complete-icon',
      line: 'filled',
      icon: <HorizontalTimeline.CompleteIcon />,
    },
    {
      label: 'destructive-icon',
      line: 'filled',
      icon: <HorizontalTimeline.DestructiveIcon />,
    },
  ];

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(<HorizontalTimeline items={items} />);

    expect(await driver.exists()).toBe(true);
  });

  it('should be able to get label text', async () => {
    const { driver } = render(<HorizontalTimeline items={items} />);

    expect(await driver.getLabel(0)).toEqual(items[0].label);
  });

  it('should be able to get skin', async () => {
    const skin = 'standard';
    const { driver } = render(<HorizontalTimeline skin={skin} items={items} />);

    expect(await driver.getSkin()).toEqual(skin);
  });
});
