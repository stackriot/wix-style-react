export const playground = `
<ThemeProvider theme={theme()}>
  <Layout cols={2} gap="10px" justifyItems="center">
    <Cell>
      <CircularProgressBar showProgressIndication value={100} />
      <CircularProgressBar showProgressIndication value={30} />
    </Cell>
  </Layout>
</ThemeProvider>
`;
