export default {
  description:
    'Modal controls the overlay layout that appears on call functions. It’s a container for components like `CustomModalLayout`, `ModalPreviewLayout` and others.',
  do: [
    'To reveal all types of modal layouts',
    'To display a full page loading state',
  ],
  featureExamples: [
    {
      title: 'Structure',
      description: ` Render modal content by using \`children\` prop. Control modal appearance with props:<br/>
        &emsp;- \`isOpen\` - this bool prop shows and hides the modal.<br/>
        &emsp;- \`onRequestClose\` - this prop calls a function you request. It can be used to control isOpen prop.<br/>`,
      example: '_structure',
    },
    {
      title: 'Side Margins',
      description: `Control the spacing between the viewport and modal content by using \`screen\` prop. It has 3 options:<br/>
        &emsp;- \`full\` (default) - used with ModalMobileLayout.<br/>
        &emsp;- \`desktop\` - used with all major desktop modals.<br/>
        &emsp;- \`mobile\` - used with ModalMobileLayout component.<br/>`,
      example: '_sideMargins',
    },
  ],
  commonUseCaseExamples: [
    {
      title: 'Desktop modal with popover elements',
      description: 'Modal layouts prevent content overflowing, therefore it’s important to use popover `appendTo` prop to make sure the content is displayed correctly.',
      example: '_modalWithForm',
    },
  ],
};
