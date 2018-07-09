import React from 'react';
import ReactDOM from 'react-dom';
import Loader from '../Loader';

const loaderDriverFactory = ({element, wrapper}) => {
  const isClassExists = (element, className) => !!element && element.className.indexOf(className) !== -1;
  const text = () => element.childNodes[1];
  const getColor = () => {
    if (!element) {
      return null;
    }
    return isClassExists(element, 'blue') ? 'blue' : 'white';
  };

  return {
    exists: () => !!element,
    isSmall: () => isClassExists(element, 'small'),
    isMedium: () => isClassExists(element, 'medium'),
    isLarge: () => isClassExists(element, 'large'),
    getColor: () => getColor(),
    hasText: () => isClassExists(text(), 'text'),
    getText: () => text().textContent,
    setProps: props => {
      ReactDOM.render(<div ref={r => element = r}><Loader {...props}/></div>, wrapper);
    },
    component: () => element
  };
};

export default loaderDriverFactory;
