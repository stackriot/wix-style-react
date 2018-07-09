import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';

const breadcrumbsDriverFactory = ({element, wrapper, component}) => {
  const optionAt = position => element.childNodes[position];
  const isClassExists = (element, className) => !!(element.className.match(new RegExp('\\b' + className + '\\b')));

  return {
    exists: () => !!element,
    breadcrumbsLength: () => element.childNodes.length,
    breadcrumbContentAt: position => optionAt(position).textContent,
    clickBreadcrumbAt: position => ReactTestUtils.Simulate.click(optionAt(position).querySelector('[data-hook="breadcrumb-clickable"]')),
    getActiveItemId: () => {
      const activeItem = element.querySelector('.active');
      return Array.from(activeItem.parentNode.children).indexOf(activeItem);
    },
    isLarge: () => isClassExists(element, 'large'),
    isMedium: () => isClassExists(element, 'medium'),
    isOnWhiteBackground: () => isClassExists(element, 'onWhiteBackground'),
    isOnGrayBackground: () => isClassExists(element, 'onGrayBackground'),
    getLabelClassList: position => optionAt(position).querySelector('[data-hook="breadcrumbs-item"]').className,
    isActiveLinkAt: index => !!optionAt(index).querySelector('a'),
    setProps: props => {
      const ClonedWithProps = React.cloneElement(component, Object.assign({}, component.props, props), ...(component.props.children || []));
      ReactDOM.render(<div ref={r => element = r}>{ClonedWithProps}</div>, wrapper);
    }
  };
};

export default breadcrumbsDriverFactory;
