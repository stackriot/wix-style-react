export const simple = `<AtlasAddressInput headers={{ Authorization: 'some_auth_token' }} />`;

export const controlled = `
() => {
  const [value, setValue] = React.useState('');

  const placesService = WixAtlasServiceWeb().PlacesServiceV2();

  const showAddressPostalCode = option => {
    placesService()
      .getPlace({ searchId: option.id })
      .then(({ place }) => setValue(\`\${value} - \${place.address.postalCode}\`));
  };

  _onChange = event => setValue(event.target.value);

  _onClear = () => setValue('');

  return (
    <AtlasAddressInput
      onChange={_onChange}
      onClear={_onClear}
      onSelect={showAddressPostalCode}
      value={value}
      headers={{ Authorization: 'some_auth_token' }}
    />
  );
};
`;
