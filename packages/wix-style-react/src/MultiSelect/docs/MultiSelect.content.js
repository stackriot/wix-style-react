export default {
  description:
    'Multiselect allows users to enter and display multiple keywords.',
  do: [
    'When the site owner needs to enter multiple keywords like names, emails, countries, etc.',
    'As tag input.',
  ],
  dont: [
    'Don’t use it as variableInput',
    'Don’t use it instead of multiselectCheckbox',
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
      title: 'Action',
      description:
        'Encourage user interaction by displaying the call to action. Add textButton using `customSuffix` property.',
      example: '_action',
    },
    {
      title: 'Select Mode',
      description:
        'Restrict user to selecting only listed options by using `mode` property.',
      example: '_selectMode',
    },
    {
      title: 'Manual Input',
      description:
        'Allow users to enter their own tags using the keyboard with `onManuallyInput` property.',
      example: '_manualInput',
    },
    {
      title: 'Predicate',
      description: 'Build autocomplete features using `predicate` prop',
      example: '_autocomplete',
    },
    {
      title: 'Reorder',
      description:
        'Allow users to change in what order keywords will be displayed. Use `onReorder` prop to  build this functionality.',
      example: '_reorder',
    },
  ],
  commonUseCaseExamples: [
    {
      title: 'Enter Contact Emails',
      description: `Multiselect input might be useful for entering contacts or emails.
      Combined with advanced list item props,  Multiselect component can provide explicit information, therefore, making multiple keyboard entries easier.`,
      example: '_suggestions',
    },
  ],
};
