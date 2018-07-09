import React from 'react';
import ReactDOM from 'react-dom';

const inputAreaWithLabelCompositeDriverFactory = ({element, wrapper, component}) => {
  const label = element.childNodes[0].childNodes[0];
  const isClassExists = (element, className) => !!element && element.className.indexOf(className) !== -1;

  return {
    exists: () => !!element,
    getLabel: () => label.textContent,
    hasLabel: () => label.tagName.toLowerCase() === 'label',
    getAttr: attrName => element.getAttribute(attrName),
    getNumberOfChildren: () => element.childElementCount,
    hasRequiredSign: () => isClassExists(element, 'required'),
    setProps: props => {
      const ClonedWithProps = React.cloneElement(component, Object.assign({}, component.props, props), ...(component.props.children || []));
      ReactDOM.render(<div ref={r => element = r}>{ClonedWithProps}</div>, wrapper);
    }
  };
};

export default inputAreaWithLabelCompositeDriverFactory;
