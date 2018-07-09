# DataTable Testkits

> DataTable component

## Enzyme/ReactTestUtils TestKit API

| method | arguments | returned value | description |
|--------|-----------|----------------|-------------|
| getRowsCount | - | number | num of rows |
| getRowsWithClassCount | string | number | num of rows with <arg> class name |
| getRowText | number | string | get row index <arg> text |
| getRowClasses | number | string | get row index <arg> classes |
| isRowClickable | number | bool | true if row index <arg> is clickable |
| getTitles | - | map | get map of all titles |
| isDisplayingNothing | - | bool | true if displaying nothing |
| isDisplayingHeaderOnly | - | bool | true if displaying only headers |
| hasChildWithId | string | bool | true if the element has a child with <arg> id |
| clickRow | (number, eventData) | - | click with <eventData> the row index <number> |
| mouseEnterRow | (number, eventData) | - | mouse enter with <eventData> the row index <number> |
| mouseLeaveRow | (number, eventData) | - | mouse leave with <eventData> the row index <number> |
| setProps | json | element | returns a clone of this element with the new props from the json |

## Protractor TestKit API

| method | arguments | returned value | description |
|--------|-----------|----------------|-------------|
| clickRowByIndex | number | - | click row index <number> |
| getRowTextByIndex | number | string | get row index <number> text |
| element | - | element | get the actual element |

## Usage Example

> Unit Testing Example
```javascript
  import React from 'react';
  import {dataTableTestkitFactory} from 'wix-style-react/dist/testkit';
  import {dataTableTestkitFactory as enzymeDataTableTestkitFactory} from 'wix-style-react/dist/testkit/enzyme';

  /***************
   enzyme example
  ***************/

  const dataHook = 'myDataHook';
  const wrapper = mount(<div/><DataTable {...props} dataHook={dataHook}/></div>);
  const testkit = enzymeDataTableTestkitFactory({wrapper, dataHook});

  //Do tests
  expect(testkit.getRowsCount()).toBe(5);

  /**********************
   ReactTestUtils example
  **********************/

  const div = document.createElement('div');
  const dataHook = 'myDataHook';
  const wrapper = div.appendChild(
    ReactTestUtils.renderIntoDocument(<div/><DataTable {...props} dataHook={dataHook}/></div>, {dataHook})
  );
  const testkit = dataTableTestkitFactory({wrapper, dataHook});

  //Do tests
  expect(testkit.getRowsCount()).toBe(5);
```


> E2E example
```javascript
  //Element should be rendered with a data-hook into the DOM
  <DataTable dataHook='myDataHook'/>

  /**********************
   Protractor example
  **********************/

  import {dataTableTestkitFactory, waitForVisibilityOf} from 'wix-style-react/dist/testkit/protractor';

  //Create an element testkit via the data-hook attribute
  const testkit = dataTableTestkitFactory({dataHook: 'myDataHook'});

  browser.get(appUrl);  //Your application url

  waitForVisibilityOf(testkit.element(), 'Cannot find DataTable')
     .then(() => {
       //Do tests
        expect(testkit.element().isDisplayed()).toBeTruthy();
     });
```
