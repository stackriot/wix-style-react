import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Input from 'wix-style-react/Input';

const style = {
  display: 'inline-block',
  padding: '0 5px',
  width: '200px',
  lineHeight: '22px'
};

class ControlledInput extends Component {
  static propTypes = {
    value: PropTypes.string
  };

  state = {
    value: ''
  };

  render() {
    const onChange = event => this.setState({value: event.target.value});

    return (
      <Input
        {...this.props}
        value={this.state.value}
        onChange={onChange}
        />
    );
  }
}

const Example = ({theme}) =>
  <div className="ltr" style={style}>
    <span>Shows clear button</span>
    <ControlledInput theme={theme} clearButton/>
  </div>;

Example.propTypes = {
  theme: PropTypes.string
};

export default Example;
