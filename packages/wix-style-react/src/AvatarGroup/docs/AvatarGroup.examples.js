export const _groupType = `
<StorybookComponents.Stack flexDirection="column">
  <AvatarGroup type="stretched" items={[{name: 'first user'}, {name: 'second user'}, {name: 'third avatar'}]}/>
  <AvatarGroup type="condensed" items={[{name: 'first user'}, {name: 'second user'}, {name: 'third avatar'}]}/>
</StorybookComponents.Stack>
`;

export const _maxItems = `
<AvatarGroup
  maxItems={5}
  items={[
    { name: 'first user' },
    { name: 'second user' },
    { name: 'third avatar' },
    { name: 'fourth avatar' },
    { name: 'fifth avatar' },
    { name: 'sixth avatar' }
  ]}
/>;

`;
export const _size = `
<StorybookComponents.Stack flexDirection="column">
  <AvatarGroup size="small" items={[{name: 'first user'}, {name: 'second user'}, {name: 'third avatar'}]}/>
  <AvatarGroup size="medium" items={[{name: 'first user'}, {name: 'second user'}, {name: 'third avatar'}]}/>
</StorybookComponents.Stack>
`;

export const _divider = `
<AvatarGroup showDivider items={[{name: 'first avatar'}, {name: 'second avatar'}, {name: 'third avatar'}]}/>
`;
