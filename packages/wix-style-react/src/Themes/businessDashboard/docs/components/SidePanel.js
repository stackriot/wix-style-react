export const playground = /* jsx */ `
  <ThemeProvider theme={theme()}>
    <Box width="402px" height="300px">
      <SidePanel>
        <SidePanel.Header 
          title={
            <Box verticalAlign="middle" gap="4px">
              <Heading appearance="H3">Node Title</Heading>
              <Box>
                <Popover showArrow shown={true} placement="right" theme="dark">
                  <Popover.Element>
                    <InfoIcon size="small" tooltipProps={{ disabled: true }} />
                  </Popover.Element>
                  <Popover.Content>
                    <Box padding="10px">Content</Box>
                  </Popover.Content>
                </Popover>
              </Box>
            </Box>
          }
          >
          <Box marginLeft="20px" marginBottom="20px"> 
            <Text size="tiny" weight="thin" secondary>subtitle</Text>
          </Box>
        </SidePanel.Header>
        <SidePanel.Content>
          <Box
            height="300px"
            align="center"
            verticalAlign="middle"
            overflow="hidden"
          >
            content goes here
          </Box>
        </SidePanel.Content>
      </SidePanel>
    </Box>
  </ThemeProvider>
`;
