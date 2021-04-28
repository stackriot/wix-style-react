export const playground = `
<div>
  <ThemeProvider theme={theme()}>
    <Layout cols={5} gap={0} justifyItems="center" alignItems="center">
      <Box padding={1} alignment="center"></Box>
      <Box padding={1}>Primary</Box>
      <Box padding={1}>Disabled</Box>
      <Box padding={1}>Secondary</Box>
      <Box padding={1}>Disabled</Box>
    </Layout>
    <Layout cols={5} gap={0} justifyItems="center" alignItems="center">
      <Box>Standard</Box>
      <Box padding={1} backgroundColor="B40">
        <IconButton size="small">
          <Icons.More />
        </IconButton>
      </Box>
      <Box padding={1} backgroundColor="B40">
        <IconButton size="small" disabled>
          <Icons.More />
        </IconButton>
      </Box>
      <Box padding={1} backgroundColor="B40">
        <IconButton size="small" priority="secondary">
          <Icons.More />
        </IconButton>
      </Box>
      <Box padding={1} backgroundColor="B40">
        <IconButton size="small" priority="secondary" disabled>
          <Icons.More />
        </IconButton>
      </Box>
    </Layout>
    <Layout cols={5} gap={0} justifyItems="center" alignItems="center">
      <Box>Inverted</Box>
      <Box padding={1} backgroundColor="B40">
        <IconButton size="small" skin="inverted">
          <Icons.More />
        </IconButton>
      </Box>
      <Box padding={1} backgroundColor="B40">
        <IconButton size="small" disabled skin="inverted">
          <Icons.More />
        </IconButton>
      </Box>
      <Box padding={1} backgroundColor="B40">
        <IconButton size="small" priority="secondary" skin="inverted">
          <Icons.More />
        </IconButton>
      </Box>
      <Box padding={1} backgroundColor="B40">
        <IconButton size="small" priority="secondary" disabled skin="inverted">
          <Icons.More />
        </IconButton>
      </Box>
    </Layout>
    <Layout cols={5} gap={0} justifyItems="center" alignItems="center">
      <Box>Light</Box>
      <Box padding={1} backgroundColor="B40">
        <IconButton size="small" skin="light">
          <Icons.More />
        </IconButton>
      </Box>
      <Box padding={1} backgroundColor="B40">
        <IconButton size="small" disabled skin="light">
          <Icons.More />
        </IconButton>
      </Box>
      <Box padding={1} backgroundColor="B40">
        <IconButton size="small" priority="secondary" skin="light">
          <Icons.More />
        </IconButton>
      </Box>
      <Box padding={1} backgroundColor="B40" skin="light">
        <IconButton size="small" priority="secondary" disabled>
          <Icons.More />
        </IconButton>
      </Box>
    </Layout>
    <Layout cols={5} gap={0} justifyItems="center" alignItems="center">
    <Box>Standard Tiny</Box>
    <Box padding={1} backgroundColor="B40">
      <IconButton size="tiny">
        <Icons.More />
      </IconButton>
    </Box>
    <Box padding={1} backgroundColor="B40">
      <IconButton size="tiny" disabled>
        <Icons.More />
      </IconButton>
    </Box>
    <Box padding={1} backgroundColor="B40">
      <IconButton size="tiny" priority="secondary">
        <Icons.More />
      </IconButton>
    </Box>
    <Box padding={1} backgroundColor="B40">
      <IconButton size="tiny" priority="secondary" disabled>
        <Icons.More />
      </IconButton>
    </Box>
  </Layout>
  <Layout cols={5} gap={0} justifyItems="center" alignItems="center">
    <Box>Inverted Tiny</Box>
      <Box padding={1} backgroundColor="B40">
        <IconButton size="tiny"  skin="inverted">
          <Icons.More />
        </IconButton>
      </Box>
      <Box padding={1} backgroundColor="B40">
        <IconButton size="tiny" disabled skin="inverted">
          <Icons.More />
        </IconButton>
      </Box>
      <Box padding={1} backgroundColor="B40">
        <IconButton size="tiny" priority="secondary" skin="inverted">
          <Icons.More />
        </IconButton>
      </Box>
      <Box padding={1} backgroundColor="B40">
        <IconButton size="tiny" priority="secondary" disabled skin="inverted">
          <Icons.More />
        </IconButton>
      </Box>
    </Layout>
    <Layout cols={5} gap={0} justifyItems="center" alignItems="center">
      <Box>Light Tiny</Box>
      <Box padding={1} backgroundColor="B40">
        <IconButton size="tiny" skin="light">
          <Icons.More />
        </IconButton>
      </Box>
      <Box padding={1} backgroundColor="B40">
        <IconButton size="tiny" disabled skin="light">
          <Icons.More />
        </IconButton>
      </Box>
      <Box padding={1} backgroundColor="B40">
        <IconButton size="tiny" priority="secondary" skin="light">
          <Icons.More />
        </IconButton>
      </Box>
      <Box padding={1} backgroundColor="B40">
        <IconButton size="tiny" priority="secondary" disabled skin="light">
          <Icons.More />
        </IconButton>
      </Box>
    </Layout>
  </ThemeProvider>
</div>
`;
