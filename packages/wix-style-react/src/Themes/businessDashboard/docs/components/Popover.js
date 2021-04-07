export const playground = `
<ThemeProvider theme={theme()}>
  <Layout cols={1}>
    <Box>
      <Popover
        shown
        showArrow
        placement="right"
        fixed={false}
        flip={false}
        theme="dark"
      >
        <Popover.Element>
          <Button>I am a plain Button</Button>
        </Popover.Element>
        <Popover.Content>
          <Box padding="12px 16px" width={140}>
            <Text size="tiny" skin="light" weight="regular">
              Content
            </Text>
          </Box>
        </Popover.Content>
      </Popover>
      </Box>
    <Box>
      <Popover
        shown
        showArrow
        placement="right"
        fixed={false}
        flip={false}
        skin="dark"
      >
        <Popover.Element>
          <Button>I am a plain Button</Button>
        </Popover.Element>
        <Popover.Content>
          <Box padding="12px 16px" width={140}>
            <Text size="tiny" skin="standard" weight="regular">
              Content
            </Text>
          </Box>
        </Popover.Content>
      </Popover>
    </Box>
  </Layout>
</ThemeProvider>
`;
