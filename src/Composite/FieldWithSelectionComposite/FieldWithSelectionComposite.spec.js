import React from 'react';
import FieldWithSelectionComposite from './FieldWithSelectionComposite';
import Label from '../../Label';
import Input from '../../Input';
import InputArea from '../../InputArea';
import Checkbox from '../../Checkbox';
import FieldWithSelectionCompositeDriverFactory from './FieldWithSelectionComposite.driver';
import {createDriverFactory} from '../../test-common';

describe('FieldWithSelectionComposite', () => {
  const createCompositeDriverFactory = createDriverFactory(FieldWithSelectionCompositeDriverFactory);

  it('should remove label wrapping when label not given', () => {
    const driver = createCompositeDriverFactory(<FieldWithSelectionComposite><Input/><Checkbox/></FieldWithSelectionComposite>);
    expect(driver.hasLabel()).toBe(false);
    expect(driver.getNumberOfChildren()).toBe(1);
    expect(driver.hasInput()).toBe(true);
    expect(driver.hasSelectionInput()).toBe(true);
  });

  it('should render Label with Input', () => {
    const driver = createCompositeDriverFactory(<FieldWithSelectionComposite><Label>myLabel</Label><Input/><Checkbox/></FieldWithSelectionComposite>);
    expect(driver.hasLabel()).toBe(true);
    expect(driver.getLabel()).toBe('myLabel');
    expect(driver.hasInput()).toBe(true);
    expect(driver.hasSelectionInput()).toBe(true);
  });

  it('should render Label with InputArea', () => {
    const driver = createCompositeDriverFactory(<FieldWithSelectionComposite><Label/><InputArea/><Checkbox/></FieldWithSelectionComposite>);
    expect(driver.hasLabel()).toBe(true);
    expect(driver.hasInput()).toBe(true);
    expect(driver.hasSelectionInput()).toBe(true);
  });
});
