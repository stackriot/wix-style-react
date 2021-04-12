import React from 'react';
import { shallow } from 'enzyme';

import { AutoAdjustedColumns } from './Grid';
import { Cell } from '../Layout';

describe('Grid `<AutoAdjustedColumns/>`', () => {
  it('should set correct Cell elements with correct span prop', () => {
    const element = shallow(
      <AutoAdjustedColumns>
        <div />
        <div />
        <div />
        <div />
      </AutoAdjustedColumns>,
    );
    expect(element.find(Cell).length).toBe(5);
    expect(element.find(Cell).at(0).prop('span')).toEqual(12);
    expect(element.find(Cell).at(1).prop('span')).toEqual(3);
    expect(element.find(Cell).at(2).prop('span')).toEqual(3);
    expect(element.find(Cell).at(3).prop('span')).toEqual(3);
    expect(element.find(Cell).at(4).prop('span')).toEqual(3);
  });

  it('should ignore falsy elements from span calculation', () => {
    const showShowC = false;
    const element = shallow(
      <AutoAdjustedColumns>
        <div>a</div>
        <div>b</div>
        {showShowC && <div>c</div>}
        <div>d</div>
      </AutoAdjustedColumns>,
    );
    expect(element.find(Cell).length).toBe(4);
    expect(element.find(Cell).at(0).prop('span')).toEqual(12);
    expect(element.find(Cell).at(1).prop('span')).toEqual(4);
    expect(element.find(Cell).at(2).prop('span')).toEqual(4);
    expect(element.find(Cell).at(2).prop('span')).toEqual(4);
  });
});
