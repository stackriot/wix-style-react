export default {
  description:
    'Input allows to insert short text values. This component is used in submit forms or to build other form components like `<Autocomplete/>` or `<NumberInput/>`.<br/>',
  do: [
    'To insert names, titles and other short textual information.',
    'To build custom inputs like Credit Card input.',
  ],
  dont: [
    'To insert long paragraphs, instead use the <InputArea/> component.',
    'As a search input, instead use the <Search/> component.',
  ],
  featureExamples: [
    {
      title: 'Size',
      description: `Adjust the component size using \`size\` prop. It supports 3 sizes:<br/> 
        &emsp;- \`large\` - use it in onboarding flows, where input needs emphasis.<br/>
        &emsp;- \`medium\` (default) - use in all common cases.<br/>
        &emsp;- \`small\` - use in more dense and narrow layouts.<br/>`,
      example: '_size',
    },
    {
      title: 'Border',
      description: `Style the component using \`border\` prop. It supports 3 styles:<br/>
        &emsp;- \`default\` - use in all common cases.<br/>
        &emsp;- \`round\` (default) - use to build filter inputs, like search.<br/>
        &emsp;- \`bottomLine\` - use as a title which can be edited on the click.<br/>`,
      example: '_border',
    },
    {
      title: 'Status',
      description: `Control component status using \`status\` prop. It supports 3 states:<br/>
        &emsp;- \`error\` - use to highlight invalid input value.<br/>
        &emsp;- \`warning\` - use to highlight inputs that values impact user business or can’t be validated.<br/>
        &emsp;- \`loading\` - use to show that the value is being uploaded to the server.<br/>`,
      example: '_status',
    },
    {
      title: 'Status Message',
      description: `Explain the status with \`statusMessage\` prop. The message is revealed when a user mouse hovers the status icon.
        The placement of a tooltip is controlled with \`tooltipPlacement\` prop.`,
      example: '_statusMessage',
    },
    {
      title: 'Read-Only and Disabled',
      description: `Control input interaction with:<br/>
        &emsp;- \`readOnly\` - disables writing new values, but allows to copy the current value. Use to display urls, codes and similar text.<br/>
        &emsp;- \`disabled\` - disables all input interactions. Use to highlight unavailable functions.<br/>`,
      example: '_readOnlyAndDisabled',
    },
    {
      title: 'Affix',
      description: `Support input value with additional information added to \`prefix\` and \`suffix\` props.
        Props can contain text, icons and even buttons.`,
      example: '_affix',
    },
    {
      title: 'Clear Button',
      description: `Enable a button that clears input value by using \`clearButton\` prop.
        Show it when input’s value is optional or often has to be clear, for example date and search inputs.`,
      example: '_clearButton',
    },
    {
      title: 'Text Overflow',
      description: `Control long text value truncation with \`textOverflow\` prop. It has 2 options:<br/>
        &emsp;- \`clip\`(default) - ends the text  with a sharp cut.<br/>
        &emsp;- \`ellipsis\` - shows ellipsis where  text is truncated. Use to emphasize that text doesn’t fit, especially when \`bottomLine\` style is enabled.<br/>`,
      example: '_textOverflow',
    },
  ],
  commonUseCaseExamples: [
    {
      title: 'Compound Input',
      description: `When multiple inputs represent the same data, like phone number or address input, fields can be stacked together using \`Layout\` component.`,
      example: '_compoundInput',
    },
    {
      title: 'Input as a title',
      description: `Input can be used as a card title when its border is set to bottomLine.
        This pattern is great when it’s needed to give a control to quickly organize groups and files.`,
      example: '_inputAsTitle',
    },
  ],
};
