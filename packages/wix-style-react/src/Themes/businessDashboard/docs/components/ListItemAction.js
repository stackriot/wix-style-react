export const playground = `
  <ThemeProvider theme={theme()}>
    <DropdownLayout
      visible
      inContainer
      options={[
        listItemActionBuilder({
          id: 0,
          skin: 'dark',
          size: 'small',
          prefixIcon: <Icons.EditSmall />,
          title: 'skin dark',
        }),
        listItemActionBuilder({
          id: 2,
          skin: 'dark',
          size: 'small',
          disabled: true,
          prefixIcon: <Icons.EditSmall />,
          title: 'skin dark disabled',
        }),
        listItemActionBuilder({
          id: 3,
          size: 'small',
          title: 'standard',
        }),
        listItemActionBuilder({
          id: 4,
          size: 'small',
          prefixIcon: <Icons.EditSmall />,
          title: 'standard',
        }),
        listItemSectionBuilder({
          type: 'divider',
        }),
        listItemActionBuilder({
          id: 5,
          size: 'small',
          skin: 'standard',
          prefixIcon: <Icons.EditSmall />,
          title: 'standard disabled',
        }),
        listItemActionBuilder({
          id: 6,
          size: 'small',
          prefixIcon: <Icons.EditSmall />,
          title: 'standard',
        }),
        listItemActionBuilder({
          id: 7,
          size: 'small',
          prefixIcon: <Icons.EditSmall />,
          title: 'standard',
        }),
        listItemActionBuilder({
          id: 8,
          size: 'small',
          prefixIcon: <Icons.EditSmall />,
          title: 'standard',
        }),
      ]}
    />
  </ThemeProvider>
`;
