export const appearance = `
<Layout cols={1}>
<SectionHelper
  actionText="I understand the consequences"
  appearance="standard"
  onAction={() => 'onAction'}
  onClose={() => 'onClose'}
  title="Look at this important message!"
>
  This is a very important message
</SectionHelper>
<SectionHelper
  actionText="I understand the consequences"
  appearance="warning"
  onAction={() => 'onAction'}
  onClose={() => 'onClose'}
  title="Look at this important message!"
>
  This is a very important message
</SectionHelper>
<SectionHelper
  actionText="I understand the consequences"
  appearance="danger"
  onAction={() => 'onAction'}
  onClose={() => 'onClose'}
  title="Look at this important message!"
>
  This is a very important message
</SectionHelper>
<SectionHelper
  actionText="I understand the consequences"
  appearance="success"
  onAction={() => 'onAction'}
  onClose={() => 'onClose'}
  title="Look at this important message!"
>
  This is a very important message
</SectionHelper>
<SectionHelper
  actionText="I understand the consequences"
  appearance="premium"
  onAction={() => 'onAction'}
  onClose={() => 'onClose'}
  title="Look at this important message!"
>
  This is a very important message
</SectionHelper>
<SectionHelper
  actionText="I understand the consequences"
  appearance="experimentalDark"
  onAction={() => 'onAction'}
  onClose={() => 'onClose'}
  title="Look at this important message!"
>
  This is a very important message
</SectionHelper>
</Layout>
`;

export const textbutton = `
<Layout cols={1}>
  <SectionHelper title="Don't forget to set up payments">
    In order to sell your music you need to choose a payment method.
    <Box>
      <TextButton size="small" skin="dark" underline="always">
        Learn More
      </TextButton>
    </Box>
  </SectionHelper>
  <SectionHelper title="Don't forget to set up payments">
    In order to sell your music you need to choose a payment method.
    <Box inline>
      <TextButton size="small" skin="dark" underline="always">
        Learn More
      </TextButton>
    </Box>
  </SectionHelper>
</Layout>
`;
