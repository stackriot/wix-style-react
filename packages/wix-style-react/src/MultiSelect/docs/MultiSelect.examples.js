export const _size = `
() => {
  const tags = [
    {
      size: 'medium',
      id: '1',
      label: 'tag 1',
    },
    {
      size: 'medium',
      id: '2',
      label: 'tag 2',
    },
  ];
  return (
    <StorybookComponents.Stack flexDirection="column">
      <FormField label="Large">
        <MultiSelect size="large" tags={tags} />
      </FormField>
      <FormField label="Medium">
        <MultiSelect tags={tags} />
      </FormField>
      <FormField label="Small">
        <MultiSelect size="small" tags={tags} />
      </FormField>
    </StorybookComponents.Stack>
  );
};
`;

export const _action = `
<MultiSelect
  options={[
    { id: '1', value: 'tag 1' },
    { id: '2', value: 'tag 2' },
    { id: '3', value: 'tag 3' },
  ]}
  customSuffix={<TextButton>+ Add Tag</TextButton>}
/>
`;

export const _selectMode = `
() => {
  const [tags, setTags] = React.useState([]);

  const handleOnSelect = tag =>
    setTags([...tags, { id: tag.id, label: tag.value }]);

  return (
    <MultiSelect
      tags={tags}
      options={[
        { id: '1', value: 'tag 1' },
        { id: '2', value: 'tag 2' },
        { id: '3', value: 'tag 3' },
      ]}
      mode="select"
      placeholder="Select tags from a list"
      onSelect={handleOnSelect}
    />
  );
};
`;

export const _manualInput = `
() => {
  const [tags, setTags] = React.useState([]);

  const handleManualInput = tag =>
    setTags([...tags, { id: Math.random(), label: tag[0] }]);

  return (
    <MultiSelect
      tags={tags}
      placeholder="Type custom tags and insert it by pressing Enter key"
      onManuallyInput={handleManualInput}
    />
  );
};
`;

export const _autocomplete = `
() => {
  const [value, setValue] = React.useState('');

  const options = [
    { value: 'Alabama', id: 'AL' },
    { value: 'California', id: 'CA' },
    { value: 'North Carolina', id: 'NC' },
    { value: 'Colorado', id: 'CO' },
    { value: 'Connecticut', id: 'CT' }
  ];

  const handleOnChange = event => setValue(event.target.value);

  const predicate = option =>
    option.value && option.value.toLowerCase().includes(value.toLowerCase());

  return (
    <MultiSelect
      value={value}
      options={options}
      onChange={handleOnChange}
      placeholder="Type in tags to matching options list"
      predicate={predicate}
    />
  );
};
`;

export const _reorder = `
() => {
  const [tags, setTags] = React.useState([
    { id: 1, label: 'One' },
    { id: 2, label: 'Two' },
    { id: 3, label: 'Three' },
  ]);

  return (
    <MultiSelect
      tags={tags}
      onReorder={({ addedIndex, removedIndex }) => {
        const nextTags = tags.slice();
        nextTags.splice(addedIndex, 0, ...nextTags.splice(removedIndex, 1));
        setTags(nextTags);
      }}
    />
  );
};
`;

// handle tag removes too
export const _suggestions = `
() => {
  const [value, setValue] = React.useState('');
  const [tags, setTags] = React.useState([]);

  const contacts = [
    { name: 'David Fincher', email: 'davidf@wix.com' },
    { name: 'John Doe', email: 'johnd@wix.com' },
    { name: 'Jane Martin', email: 'janem@wix.com' },
    { name: 'John Doe', email: 'johnd@gmail.com' },
    { name: 'Jane Martin', email: 'janem@gmail.com' },
  ];

  const options = contacts.map(contact => ({
    ...contact,
    ...contactItemBuilder({
      id: contact.email,
      title: contact.name,
      subtitle: contact.email,
      imageUrl: 'https://randomuser.me/api/portraits/women/39.jpg',
    }),
  }));

  const handleOnSelect = ({ name, email }) =>
    setTags([
      ...tags,
      { id: Math.random(), label: name ? \`\${email} ($\{name})\` : email },
    ]);

  const handleOnRemoveTag = tagId =>
    setTags(tags.filter(currTag => currTag.id !== tagId));

  const handleOnChange = event => setValue(event.target.value);

  const predicate = option =>
    (option.name + option.email).toLowerCase().includes(value.toLowerCase());

  return (
    <MultiSelect
      value={value}
      options={options}
      tags={tags}
      onChange={handleOnChange}
      onSelect={handleOnSelect}
      onRemoveTag={handleOnRemoveTag}
      placeholder="Type in tags to matching options list"
      predicate={predicate}
    />
  );
};
`;
