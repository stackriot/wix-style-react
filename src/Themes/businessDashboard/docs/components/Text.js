export const playground = `
<div>
  <ThemeProvider theme={theme()}> 
    <Box padding="3px">
      <Text>Some text</Text>
    </Box>
    <Box backgroundColor="D10" padding="3px">
      <Text light>Some light text</Text>
    </Box>
    <Box padding="3px">
      <Text size="medium">Some medium text</Text>
    </Box>
    <Box backgroundColor="D10" padding="3px">
      <Text size="medium" light>Some medium light text</Text>
    </Box>
    <Box padding="3px">
      <Text size="small">Some small text</Text>
    </Box>
    <Box backgroundColor="D10" padding="3px">
      <Text size="small" light>Some small light text</Text>
    </Box>
    <Box padding="3px">
      <Text size="tiny">Some tiny text</Text>
    </Box>
    <Box backgroundColor="D10" padding="3px">
      <Text size="tiny" light>Some tiny light text</Text>
    </Box>
  </ThemeProvider>
</div>
`;
