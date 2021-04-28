export const importExample = `import { TextField } from 'wix-ui-tpa/TextField';`;

export const withLabel = `
<TextField label="label" placeholder="Placeholder Text"/>
`;

export const placeholder = `
<TextField placeholder="Placeholder Text"/>
`;

export const value = `
<TextField value="Test text" />
`;

export const success = `
<TextField success value="Test text" />
`;

export const successWithIcon = `
<TextField success successIcon value="Test text" />
`;

export const error = `
<TextField error value="Test text" />
`;

export const errorWithErrorMessage = `
<TextField error errorMessage="TestError" value="Test text" />
`;

export const clearButton = `
    class TextFieldExample extends React.Component {
      state = {
        value: 'Test text',
      };
    
      _onClearButtonClick = () => this.setState({ value: '' });
      _onChange = (e) => this.setState({value: e.target.value })
    
      render() {
        const { value } = this.state;
        
        return (
          <TextField
              placeholder="Placeholder Text"
              value={value}
              withClearButton
              onClear={this._onClearButtonClick}
              onChange={this._onChange}
          />
        );
      }
    }
`;

export const customSuffix = `
    <TextField suffix={<Calendar />} value="Test text" />
`;

export const customSuffixAndError = `
    <TextField error errorMessage="TestError" suffix={<Calendar />} value="Test text" />
`;

export const customSuffixAndErrorWithClearButton = `
    class TextFieldExample extends React.Component {
      state = {
        value: 'Test text',
      };
    
      _onClearButtonClick = () => this.setState({ value: '' });
      _onChange = (e) => this.setState({value: e.target.value })
    
      render() {
        const { value } = this.state;
        
        return (
          <TextField
              placeholder="Placeholder Text"
              value={value}
              withClearButton
              onClear={this._onClearButtonClick}
              error
              errorMessage="TestError"
              suffix={<Calendar />}
              onChange={this._onChange}
          />
        );
      }
    }
`;

export const charCount = `
    class TextFieldExample extends React.Component {
      state = {
        value: 'Test',
      };
    
      _onChange = (e) => this.setState({value: e.target.value })
    
      render() {
        const { value } = this.state;
        
        return (
          <TextField
              theme="box"
              placeholder="No more than 5 chars pls"
              value={value}
              onChange={this._onChange}
              maxLength="10"
              showCharCount="true"
          />
        );
      }
    }
`;

export const lineTheme = `
<TextField theme="line"  value="Test text" />
`;

export const lineThemeWithLabel = `
<TextField label="label" placeholder="Placeholder Text" theme="line" />
`;

export const lineThemeSuccess = `
<TextField success theme="line"  value="Test text" />
`;

export const lineThemeSuccessWithIcon = `
<TextField success successIcon theme="line"  value="Test text" />
`;

export const lineThemeError = `
<TextField error theme="line" value="Test text" />
`;

export const lineThemeErrorMessage = `
<TextField error errorMessage="Test text" theme="line" value="Test text" />
`;

export const lineThemeClearButton = `
    class TextFieldExample extends React.Component {
      state = {
        value: 'Test text',
      };
    
      _onClearButtonClick = () => this.setState({ value: '' });
      _onChange = (e) => this.setState({value: e.target.value })
    
      render() {
        const { value } = this.state;
        
        return (
          <TextField
              theme="line"
              placeholder="Placeholder Text"
              value={value}
              withClearButton
              onClear={this._onClearButtonClick}
              onChange={this._onChange}
          />
        );
      }
    }
`;

export const lineThemeCustomSuffix = `
    <TextField theme="line" suffix={<Calendar />} value="Test text" />
`;

export const lineThemeCustomSuffixAndError = `
    <TextField theme="line" error errorMessage="TestError" suffix={<Calendar />} value="Test text" />
`;

export const lineThemeCustomSuffixAndErrorWithClearButton = `
    class TextFieldExample extends React.Component {
      state = {
        value: 'Test text',
      };
    
      _onClearButtonClick = () => this.setState({ value: '' });
      _onChange = (e) => this.setState({value: e.target.value })
    
      render() {
        const { value } = this.state;
        
        return (
          <TextField
              theme="line"
              placeholder="Placeholder Text"
              value={value}
              withClearButton
              onClear={this._onClearButtonClick}
              error
              errorMessage="TestError"
              suffix={<Calendar />}
              onChange={this._onChange}
          />
        );
      }
    }
`;

export const lineThemeCharCount = `
    class TextFieldExample extends React.Component {
      state = {
        value: 'Test',
      };
    
      _onChange = (e) => this.setState({value: e.target.value })
    
      render() {
        const { value } = this.state;
        
        return (
          <TextField
              theme="line"
              placeholder="No more than 5 chars pls"
              value={value}
              onChange={this._onChange}
              maxLength="10"
              showCharCount="true"
          />
        );
      }
    }
`;
