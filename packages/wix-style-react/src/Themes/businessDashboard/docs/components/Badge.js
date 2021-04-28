export const playground = `
<ThemeProvider theme={theme()}>
  <Layout cols={2} gap={0} justifyItems="center">
  <Box direction ="vertical" gap="8px">
    <Badge size="small" uppercase="false">
      Small Badge
    </Badge>
    <Badge skin="premium" size="small" uppercase="false">
      Premium
    </Badge>
    <Badge skin="warning" size="small" uppercase="false">
      Warning
    </Badge>
    <Badge skin="success" size="small" uppercase="false">
      Success
    </Badge>
    <Badge skin="urgent" size="small" uppercase="false">
      Urgent
    </Badge>
    <Badge skin="warningLight" size="small" uppercase="false">
      WarningLight
    </Badge>
    <Badge skin="neutralLight" size="small" uppercase="false">
      NeutralLight
    </Badge>
    <Badge skin="neutralStandard" size="small" uppercase="false">
      NeutralStandard
    </Badge>
    <Badge skin="neutralSuccess" size="small" uppercase="false">
      NeutralSuccess
    </Badge>
    <Badge skin="neutralDanger" size="small" uppercase="false">
      NeutralDanger
    </Badge>
  </Box>
    <Badge size="medium">
      medium badge
    </Badge>
  </Layout>
</ThemeProvider>
`;
