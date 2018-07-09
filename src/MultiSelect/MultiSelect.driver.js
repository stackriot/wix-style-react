import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import inputWithOptionsDriverFactory from '../InputWithOptions/InputWithOptions.driver';
import ReactDOM from 'react-dom';
import initial from 'lodash.initial';

const multiSelectDriverFactory = ({element, wrapper, component}) => {

  const {driver, inputDriver, dropdownLayoutDriver} = inputWithOptionsDriverFactory({element, wrapper});

  const inputWrapper = driver.inputWrapper().childNodes[0];
  const tags = initial(inputWrapper.childNodes);

  const multiSelectDriver = Object.assign(driver, {
    clickOnInputWrapper: () => ReactTestUtils.Simulate.click(inputWrapper),
    numberOfTags: () => tags.length,
    getTagLabelAt: index => tags[index].textContent,
    setProps: props => {
      const ClonedWithProps = React.cloneElement(component, Object.assign({}, component.props, props), ...(component.props.children || []));
      ReactDOM.render(<div ref={r => element = r}>{ClonedWithProps}</div>, wrapper);
    }
  });

  return {driver: multiSelectDriver, inputDriver, dropdownLayoutDriver};
};

export default multiSelectDriverFactory;
