export default {
  description:
    'PageSection is a standalone element that divides content of a page into multiple sections.',
  do: [
    'Divide content into sections on a page.',
    'Group grid layouts visually.',
  ],
  dont: ['Divide content into sections inside of a card.'],
  featureExamples: [
    {
      title: 'Structure',
      description:
        'Component consists of a title area and actions bar (optional). Actions bar can contain any number of actions.',
      example: '_structure',
    },
    {
      title: 'Subtitle',
      description: 'Use subtitle to provide more context about section content',
      example: '_subtitle',
    },
    {
      title: 'Divider',
      description:
        'Use divider to visually merge elements into one entity when section content is built using grid layout.',
      example: '_divider',
    },
    {
      title: 'Text Overflow',
      description:
        'Both title and subtitle are limited to a single line of text. Longer values will be truncated and displayed in a tooltip on a hover.',
      example: '_textOverflow',
    },
  ],
  commonUseCaseExamples: [
    {
      title: 'Content grouping',
      description:
        'Use PageSection to group elements into sections inside of a page',
      example: '_commonUseCases',
      wide: true,
    },
  ],
};
