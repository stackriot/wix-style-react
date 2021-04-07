export const playground = `
  <ThemeProvider theme={theme()}>
    <Layout cols={2}>
      <Cell span={2}>
        <Thumbnail size="small" title="Small Thumbnail 1" />
      </Cell>
      <Cell span={2}>
        <Thumbnail size="small" selected title="Small Selected 2" />
      </Cell>
      <Cell span={2}>
        <Thumbnail size="small" disabled title="Small Disabled 3" />
      </Cell>
      <Cell span={2}>
        <Thumbnail title="Thumbnail 4" />
      </Cell>
      <Cell span={2}>
        <Thumbnail selected title="Selected 5" />
      </Cell>
      <Cell span={2}>
        <Thumbnail disabled title="Disabled 6" />
      </Cell>
      <Cell span={2}>
        <Thumbnail size="tiny" title="Tiny Thumbnail 7" />
      </Cell>
      <Cell span={2}>
        <Thumbnail size="tiny" selected title="Tiny Selected 8" />
      </Cell>
      <Cell span={2}>
        <Thumbnail size="tiny" disabled title="Tiny Disabled 9" />
      </Cell>
    </Layout>
  </ThemeProvider>
`;
