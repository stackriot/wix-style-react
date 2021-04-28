export const playground = `
  <ThemeProvider theme={theme()}>
    <Layout cols={1}>
      <SectionHelper appearance="standard">
        In order to sell your music you need to choose a payment method.
      </SectionHelper>
      <SectionHelper appearance="warning">
        All websites are required to provide a link to comprehensive privacy policy.
      </SectionHelper>
      <SectionHelper appearance="danger">
        Your data got corrupted. Go to settings and update your contact details in order to let your clients reach you.
      </SectionHelper>

      <SectionHelper appearance="standard" title="This is the title">
        In order to sell your music you need to choose a payment method.
      </SectionHelper>
      <SectionHelper appearance="warning" title="This is the title">
        All websites are required to provide a link to comprehensive privacy policy.
      </SectionHelper>
      <SectionHelper appearance="danger" title="This is the title">
        Your data got corrupted. Go to settings and update your contact details in order to let your clients reach you.
      </SectionHelper>

      <SectionHelper appearance="standard" title="This is the title" onClose={() => {}}>
        In order to sell your music you need to choose a payment method.
      </SectionHelper>
      <SectionHelper appearance="warning" title="This is the title" onClose={() => {}}>
        All websites are required to provide a link to comprehensive privacy policy.
      </SectionHelper>
      <SectionHelper appearance="danger" title="This is the title" onClose={() => {}}>
        Your data got corrupted. Go to settings and update your contact details in order to let your clients reach you.
      </SectionHelper>
    </Layout>
  </ThemeProvider>
`;
