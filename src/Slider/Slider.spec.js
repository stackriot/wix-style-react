import React from 'react';
import _ from 'lodash/fp';
import {mount} from 'enzyme';
import Slider from './Slider';
import {componentFactory, sliderDriverFactory} from './testkit/Slider';
import {sliderTestkitFactory as enzymeSliderTestkitFactory} from '../../testkit/enzyme';

describe('Slider', () => {
  let driver;

  const createDriver = _.compose(sliderDriverFactory, componentFactory);

  it('should render slider', () => {
    const onChange = jest.fn(value => this.setState({value}));
    const selectedValue = 3;
    const min = 1;
    const max = 10;

    driver = createDriver({onChange, value: [selectedValue], min, max});

    expect(driver.numOfSliderDots()).toBe(10);
    expect(driver.numOfSLiderHandles()).toBe(1);
    expect(driver.isDotSelected(selectedValue)).toBe(true);
  });

  it('should render slider with multi-range', () => {
    const onChange = jest.fn(value => this.setState({value}));
    const selectedValues = [3, 5, 7];
    const min = 1;
    const max = 10;

    driver = createDriver({onChange, value: selectedValues, min, max});

    expect(driver.numOfSliderDots()).toBe(10);
    expect(driver.numOfSLiderHandles()).toBe(3);
    selectedValues.forEach(selectedValue => {
      expect(driver.isDotSelected(selectedValue)).toBe(true);
    });
  });

  it('should show correct value on hover', () => {
    const onChange = jest.fn(value => this.setState({value}));
    const selectedValues = [3, 5, 7];
    const min = 1;
    const max = 10;

    driver = createDriver({onChange, value: selectedValues, min, max});

    driver.hoverHandle({handleIndex: 0});

    expect(driver.getToolTipValue()).toBe(`${selectedValues[0]}`);

    driver.unHoverHandle({handleIndex: 0});
    driver.hoverHandle({handleIndex: 1});

    expect(driver.getToolTipValue()).toBe(`${selectedValues[1]}`);
  });

  it('should not display tooltip if `displayTooltip` is set to false', () => {
    driver = createDriver({value: [4], displayTooltip: false});

    driver.hoverHandle({handleIndex: 0});

    expect(driver.getToolTipValue()).toBeFalsy();

    driver.unHoverHandle({handleIndex: 0});
  });
});


describe('enzyme testkit', () => {
  it('should exist', () => {
    const onChange = jest.fn(value => this.setState({value}));
    const value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const dataHook = 'slider-enzyme';
    const wrapper = mount(<div><Slider onChange={onChange} data-hook={dataHook} value={value} min={1} max={10} step={1}/></div>);
    const sliderTestkit = enzymeSliderTestkitFactory({wrapper, dataHook});

    expect(sliderTestkit.exists()).toBe(true);
  });
});
