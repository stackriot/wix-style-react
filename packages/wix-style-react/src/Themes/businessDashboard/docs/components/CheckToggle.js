export const playground = `
<ThemeProvider theme={theme()}>
  <Layout>
    <Cell span={3} />
    <Cell span={3} >
      Checked
    </Cell>
    <Cell span={6} >
      Unchecked
    </Cell>
    <Cell span={3} >
      Enabled
    </Cell>
    <Cell span={3} >
      <CheckToggle checked />
    </Cell>
    <Cell span={6} >
      <CheckToggle checked={false} />
    </Cell>
    <Cell span={3} >
      Disabled
    </Cell>
    <Cell span={3} >
      <CheckToggle checked disabled />
    </Cell>
    <Cell span={6} >
      <CheckToggle checked={false} disabled />
    </Cell>
    <Cell span={3} >
      Enabled - With tooltip
    </Cell>
    <Cell span={3} >
      <CheckToggle checked tooltipContent="click me!" />
    </Cell>
    <Cell span={6} >
      <CheckToggle checked={false} tooltipContent="click me!" />
    </Cell>
  </Layout>
</ThemeProvider>;
`;
