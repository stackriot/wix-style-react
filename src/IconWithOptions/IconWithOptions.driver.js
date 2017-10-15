import dropdownLayoutDriverFactory from '../DropdownLayout/DropdownLayout.driver';
import ReactTestUtils from 'react-dom/test-utils';
import {isClassExists} from '../../test/utils';

const IconWithOptionsDriverFactory = ({element, wrapper}) => {
  const dropdownLayoutWrapper = element.querySelector('[data-hook=iconWithOptions-dropdownLayout-wrapper]');
  const dropdownLayout = element.querySelector('[data-hook=iconWithOptions-dropdownLayout]');
  const dropdownLayoutDriver = dropdownLayoutDriverFactory({element: dropdownLayout, wrapper});

  const driver = {
    exists: () => !!element,
    mouseEnter: () => ReactTestUtils.Simulate.mouseEnter(element),
    mouseLeave: () => ReactTestUtils.Simulate.mouseLeave(element)
  };

  return {
    driver,
    dropdownLayoutDriver: {
      ...dropdownLayoutDriver,
      isDropDirectionUp: () => dropdownLayoutDriver.isUp() && isClassExists(dropdownLayoutWrapper, 'dropDirectionUp')
    }
  };
};

export default IconWithOptionsDriverFactory;
