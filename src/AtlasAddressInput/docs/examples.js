export const simple = `<AtlasAddressInput headers={{ Authorization: 'some_auth_token' }} />`;

export const controlled = `
class MyAddressInput extends React.Component {
  atlasUrl = 'https://www.wix.com/wix-atlas-service-web';
  placesService = WixAtlasServiceWeb(this.atlasUrl).PlacesServiceV2();
  headers = { Authorization: 'some_auth_token' };

  state = {
    value: '',
  };

  _setAddressPostalCode = option => {
    this.placesService(this.headers)
      .getPlace({ searchId: option.id })
      .then(({ place }) => {
        this.setState({ value: place.address.postalCode });
      });
  };

  _onChange = event => {
    this.setState({ value: event.target.value });
  }

  _onClear = () => this.setState({ value: '' });

  render() {
    const { value } = this.state;

    return (
      <AtlasAddressInput
        onChange={this._onChange}
        onClear={this._onClear}
        onSelect={this._setAddressPostalCode}
        value={value}
        headers={this.headers}
      />
    );
  }
}`;

export const sizes = `
() => {
  const props = {
    placeholder: 'Search places...',
  };

  return (
    <Layout cols={1}>
      <AtlasAddressInput {...props} size="small" />
      <AtlasAddressInput {...props} />
      <AtlasAddressInput {...props} size="large" />
    </Layout>
  );
}
`;

export const shape = `
() => {
  const props = {
    placeholder: 'Search places...',
  };

  return (
    <Layout cols={1}>
      <AtlasAddressInput {...props} />
      <AtlasAddressInput {...props} roundInput={false} />
    </Layout>
  );
}
`;

export const clearButton = `
<Layout cols={1}>
  <AtlasAddressInput initialValue="Some text" />
  <AtlasAddressInput initialValue="Some text" clearButton={false} />
</Layout>
`;

export const disabled = `<AtlasAddressInput placeholder="Disabled..." disabled />`;
