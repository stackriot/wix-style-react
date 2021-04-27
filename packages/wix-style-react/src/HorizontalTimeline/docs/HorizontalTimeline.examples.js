export const _structure = `
<HorizontalTimeline
  items={[
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' },
  ]}
/>
`;

export const _alignLabel = `
 <StorybookComponents.Stack flexDirection="column">
      <HorizontalTimeline
        items={[
          {
            label: 'Center',
            icon: <HorizontalTimeline.DefaultIcon />
           },
          {
            label: 'Center',
            icon: <HorizontalTimeline.DefaultIcon />
           },
        ]}
      />
      <HorizontalTimeline
        alignLabel="start"
        items={[
          {
            label: 'Start',
            icon: <HorizontalTimeline.DefaultIcon />
           },
          {
            label: 'Start',
            icon: <HorizontalTimeline.DefaultIcon />
           },
        ]}
      />
    </StorybookComponents.Stack>
`;

export const _skin = `
<StorybookComponents.Stack flexDirection="column">
  <HorizontalTimeline
    skin='dark'
    items={[
      {
        label: 'Completed',
        line: 'filled',
        icon: <HorizontalTimeline.CompleteIcon />,
      },
      {
        label: 'Active',
        line: 'filled',
        icon: <HorizontalTimeline.ActiveIcon />
      },
      {
        label: 'Upcoming',
        icon: <HorizontalTimeline.DefaultIcon />
      },
    ]}
  />
  <HorizontalTimeline
    skin='standard'
    items={[
      {
        label: 'Completed',
        line: 'filled',
        icon: <HorizontalTimeline.CompleteIcon skin='standard' />,
      },
      {
        label: 'Active',
        line: 'filled',
        icon: <HorizontalTimeline.ActiveIcon skin='standard' />
      },
      {
        label: 'Upcoming',
        icon: <HorizontalTimeline.DefaultIcon skin='standard' />
      },
    ]}
  />
</StorybookComponents.Stack>;
`;

export const _line = `
<HorizontalTimeline
  items={[
    { label: 'Item 1', line: 'filled' },
    { label: 'Item 2', line: 'filled' },
    { label: 'Item 3', line: 'filled' },
    { label: 'Item 4' },
    { label: 'Item 5' },
  ]}
/>
`;

export const _icons = `
<HorizontalTimeline
  items={[
    {
      label: 'Item 1',
      icon: <HorizontalTimeline.BoundaryIcon />,
     },
    {
      label: 'Item 2',
      icon: <HorizontalTimeline.ActiveIcon />,
    },
    {
      label: 'Item 3',
      icon: <HorizontalTimeline.CompleteIcon />,
    },
    {
      label: 'Item 4',
      icon: <HorizontalTimeline.DestructiveIcon />,
    },
    {
      label: 'Item 5',
      icon: <HorizontalTimeline.DefaultIcon />,
    },
  ]}
/>
`;

export const _common = `
<HorizontalTimeline
  items={[
    {
      label: 'You completed the steps',
      line: 'filled',
      icon: <HorizontalTimeline.CompleteIcon />,
    },
    {
      label: "We're checking your domain",
      line: 'filled',
      icon: <HorizontalTimeline.ActiveIcon />,
    },
    {
      label: 'Your domain is connecting',
    },
    {
      label: 'Your site is live worldwide',
    },
  ]}
/>;
`;
