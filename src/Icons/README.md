# Icons

> SVG Icon base type. The list of existing icons can be found [here]('https://wix-wix-style-react.surge.sh/?selectedKind=6.%20Common&selectedStory=6.5%20Icons&full=0&down=0&left=1&panelRight=0') 

## Properties

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| size | string | 1em | - | Set the size of the icon |
| ***All other Props are passed to the SVG element*** | | | | |

## Simple Usage example
Look at the icons list below, choose an icon, and import it by name. For example the icon names `Add` can be used like this:
```js
import React from 'react';
import {Add} from 'wix-style-react/Icons';

export const MyComponent =  () => (
  <div>
    <Add/>
  </div>
);
```

## Adding a new Icon

* Add the new SVG file to the src/Icons/raw folder. Use a descriptive name since it'll be used as the React component name.
* Run `npm run build`
* You can now import your icon by name from the `wix-style-react/dist/src/Icons` folder!

**Notice that during `npm run build` the SVG files go through various optimizations hence it is recommended to validate the outcome of the icons in storybook (`npm start` and navigate to Icons)!** 
