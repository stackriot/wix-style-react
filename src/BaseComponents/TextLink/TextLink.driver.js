import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';

const textLinkDriverFactory = ({element, wrapper, component}) => {

  return {
    exists: () => !!element,
    getContent: () => element.textContent,
    doesComponentHasClass: className => element.className.indexOf(className) > 0,
    isDarkBackground: () => element.style._values.color === 'rgb(255, 255, 255)',
    hover: () => ReactTestUtils.Simulate.mouseEnter(element),
    getLink: () => element.children[0].href,
    getTarget: () => element.children[0].target,
    getRel: () => element.children[0].rel,
    isUnderline: () => element.style._values['text-decoration'] === 'underline',
    isLightBackground: () => element.style._values.color === 'rgb(56, 153, 236)',
    getSize: () => element.classList.contains('t1_3') ? 'medium' : element.classList.contains('t3_3') ? 'small' : 'unknown',
    setProps: props => {
      const ClonedWithProps = React.cloneElement(component, Object.assign({}, component.props, props), ...(component.props.children || []));
      ReactDOM.render(<div ref={r => element = r}>{ClonedWithProps}</div>, wrapper);
    }
  };
};

export default textLinkDriverFactory;
