export default {
  description:
    'Box allows to layout, align, space and style its children elements. It’s a container that can wrap and apply CSS styles to one or more elements inside of it.',
  do: [
    'To arrange elements in vertical or horizontal direction.',
    'To apply custom spacing and styles.',
    'To build custom widgets',
  ],
  dont: [
    'To build page layouts, instead use <Page/> component.',
    'To structure content inside of a page, instead use a combination of <Layout/> and <Card/> components.',
  ],
  featureExamples: [
    {
      title: 'Structure',
      description: `Render any kind of content inside of Box.
        It must receive at least one element, but can wrap multiple children as well.`,
      example: '_structure',
    },
    {
      title: 'Dimensions',
      description: `Control component size by setting its \`width\` and \`height\` pixels or percentage.
        Box container size will equal the size of content added inside of it if these values are not specified.`,
      example: '_dimensions',
    },
    {
      title: 'Direction',
      description: `Control direction in which children elements will be listed inside of a box. It supports 2 values:<br/>
        &emsp;- \`horizontal\` - use to list items in a single row<br/>
        &emsp;- \`vertical\` - use to list items in a single column. Note that this layout will automatically extend each item to a full width.`,
      example: '_direction',
    },
    {
      title: 'Gap',
      description: `Control space between elements inside of a box. Prop accept WSR spacing tokens and value in pixels.`,
      example: '_gap',
    },
    {
      title: 'Horizontal Alignment',
      description: `Align child elements on X axis inside of a box:<br/>
        &emsp;- \`left\`<br/>
        &emsp;- \`center\`<br/>
        &emsp;- \`right \`<br/>
        &emsp;- \`space-between\` - distributes child items evenly`,
      example: '_horizontalAlignment',
    },
    {
      title: 'Vertical Alignment',
      description: `Align child elements on Y axis inside of a box:<br/>
        &emsp;- \`top\`<br/>
        &emsp;- \`middle\`<br/>
        &emsp;- \`bottom\`<br/>
        &emsp;- \`space-between\` - distributes child items evenly`,
      example: '_verticalAlignment',
    },
    {
      title: 'Padding',
      description: `Control amount of white space around child elements inside of a box. It can be defined by:<br/>
        &emsp;- \`padding\` - define amount of white space from all sides<br/>
        &emsp;- \`paddingTop\`, \`paddingRight\`, \`paddingBottom\`, \`paddingLeft\` - define amount of white space from a specific side only.`,
      example: '_padding',
    },
    {
      title: 'Margin',
      description: `Control amount of white space around the box component itself. It can be defined by:<br/>
        &emsp;- \`margin\` - define amount of space from all sides<br/>
        &emsp;- \`marginTop\`, \`marginRight\`, \`marginBottom\`, \`marginLeft\` - define amount of space for a specific side only.`,
      example: '_margin',
    },
    {
      title: 'Color',
      description: `Control background and text color of a component with:<br/>
        &emsp;- \`backgroundColor\` - use to specify background fill<br/>
        &emsp;- \`color\` - use to specify text color.<br/>
        Properties accept WSR colour variables and natively supported values, e.g. HEX, RGB, etc.`,
      example: '_color',
    },
    {
      title: 'Border',
      description: `Control style of a border with following properties:<br/>
        &emsp;- \`border\` - use to enable border, set its width and style. (Note: this prop do not accept WSR color variable keys)<br/>
        &emsp;- \`borderColor\` - use to specify the border color<br/>
        &emsp;- \`borderTopColor\`, \`borderRightColor\`, \`borderBottomColor\`, \`borderLeftColor\` - use to specify border color per edge<br/>
        &emsp;- \`borderRadius\` - use to specify corner radius.`,
      example: '_border',
    },
    {
      title: 'Inline',
      description: `Defines if a box behaves as an inline element when placed next to other components.`,
      example: '_inline',
    },
  ],
  commonUseCaseExamples: [
    {
      title: 'Event Item',
      description: `Combination of boxes can be used to construct custom widgets and list items.`,
      example: '_eventItem',
    },
    {
      title: 'List Items',
      description: `Use a box to arrange elements inside of other components in a desired way.`,
      example: '_listItems',
    },
  ],
};
