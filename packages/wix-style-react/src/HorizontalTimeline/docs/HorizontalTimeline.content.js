export default {
  description:
    'HorizontalTimeline is used to demonstrate the progress of passive events that a person watching it has no effect on.',
  do: [
    'Use it to demonstrate the progress of server states.',
    'Use it to show task SLA status.',
  ],
  dont: [
    'Don’t use it as part of onboarding flow, use <Stepper/> component instead.',
    'Don’t use it to show a long history of events, use <Timeline/> component instead.',
  ],
  featureExamples: [
    {
      title: 'Structure',
      description: `Create timeline content by using \`items\` prop. Each item has props to control \`label\`, \`width\`, \`icon\` and \`state\`.`,
      example: '_structure',
    },
    {
      title: 'Align Label',
      description: `
        Control text horizontal alignment with alignLabel prop. It has two options:<br/>
          &emsp;- center (default) - use it in all common cases. <br/>
          &emsp;- start - use it to align text to the left. <br/>
      `,
      example: '_alignLabel',
    },
    {
      title: 'Skin',
      description: `
        Control the style with skin prop. It supports  2 options:<br/>
          &emsp;- dark (default) - use it on colored backgrounds, for example inside SectionHelper.<br/>
          &emsp;- standard - use it on light backgrounds, for example inside a card.<br/>
      `,
      example: '_skin',
    },
    {
      title: 'Line Type',
      description: `
        Control the line type with line prop. It supports  2 options:<br/>
          &emsp;- dashed (default) - use it on colored backgrounds, for example inside SectionHelper.<br/>
          &emsp;- filled - use it to show that this timeline is past.<br/>
      `,
      example: '_line',
    },
    {
      title: 'Item Icons',
      description: `
        Specify item status by using icon prop for items:<br/>
          &emsp;- DefaultIcon - indicates incomplete steps.<br/>
          &emsp;- ActiveIcon - highlights currently active step.<br/>
          &emsp;- CompleteIcon - indicates complete steps.<br/>
          &emsp;- DestructiveIcon - indicates a step that failed to complete.<br/>
          &emsp;- BoundaryIcon - indicates a milestone that doesn’t have status, but should be reflected in the timeline.<br/>
      `,
      example: '_icons',
    },
  ],
  commonUseCaseExamples: [
    {
      title: 'Connect Domain',
      description:
        'One of the applications where this component is helpful — it shows the status of domain connection that was requested by a user.',
      example: '_common',
    },
  ],
};
