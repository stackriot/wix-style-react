import React from 'react';
import ReactDOM from 'react-dom';
import {isClassExists} from '../../test/utils';
import labelDriverFactory from '../Label/Label.driver';
import {testkitFactoryCreator} from '../test-common';

const labelTestkitFactory = testkitFactoryCreator(labelDriverFactory);

const checkboxDriverFactory = ({element, wrapper, component, eventTrigger}) => {

  const input = () => element.querySelector('input');
  const checkbox = () => element.querySelector('.checkbox');
  const labelDriver = () => labelTestkitFactory({wrapper: element, dataHook: 'checkbox-label'});

  return {
    exists: () => !!element,
    click: () => eventTrigger.change(input()),
    /** trigger focus on the element */
    focus: () => eventTrigger.focus(checkbox()),
    /** trigger blur on the element */
    blur: () => eventTrigger.blur(checkbox()),
    /**
     * Focus related testing is done in e2e tests only.
     * @deprecated
     */
    hasFocusState: () => element.getAttribute('data-focus'),
    isChecked: () => isClassExists(element, 'checked'),
    isDisabled: () => isClassExists(element, 'disabled'),
    isIndeterminate: () => isClassExists(element, 'indeterminate'),
    hasError: () => isClassExists(element, 'hasError'),
    getLabel: () => labelDriver().getLabelText(),
    getLabelDriver: () => labelDriver(),
    setProps: props => {
      const ClonedWithProps = React.cloneElement(component, Object.assign({}, component.props, props), ...(component.props.children || []));
      ReactDOM.render(<div ref={r => element = r}>{ClonedWithProps}</div>, wrapper);
    }
  };
};

export default checkboxDriverFactory;
