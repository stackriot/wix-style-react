const DELTA_LIMIT = 1;

const files = {
  'ActionsMenuLayout.bundle.min.js': 5.93,
  'ActionsMenuLayoutPerfBasic.bundle.min.js': 6.046,
  'ActionsMenuLayoutPerfExtended.bundle.min.js': 6.606,
  'AddItem.bundle.min.js': 47.203,
  'AddItemPerfBasic.bundle.min.js': 47.441,
  'AddItemPerfExtended.bundle.min.js': 48.164,
  'Autocomplete.bundle.min.js': 34.467,
  'Avatar.bundle.min.js': 8.426,
  'AvatarGroup.bundle.min.js': 11.79,
  'AvatarGroupPerfBasic.bundle.min.js': 11.883,
  'AvatarGroupPerfExtended.bundle.min.js': 13.121,
  'Badge.bundle.min.js': 2.742,
  'BadgePerfBasic.bundle.min.js': 2.788,
  'BadgePerfExtendedBad.bundle.min.js': 2.987,
  'BadgePerfExtendedGood.bundle.min.js': 2.888,
  'BoxSelection.bundle.min.js': 7.241,
  'BoxSelectionPerfBasic.bundle.min.js': 7.311,
  'BoxSelectionPerfExtended.bundle.min.js': 7.595,
  'Button.bundle.min.js': 8.479,
  'ButtonPerfBasic.bundle.min.js': 8.526,
  'ButtonPerfExtended.bundle.min.js': 9.378,
  'CalendarCell.bundle.min.js': 4.416,
  'CalendarCellPerfBasic.bundle.min.js': 4.466,
  'CalendarCellPerfExtended.bundle.min.js': 5.038,
  'CalendarPopover.bundle.min.js': 10.086,
  'CalendarPopoverPerfBasic.bundle.min.js': 10.158,
  'CalendarPopoverPerfExtended.bundle.min.js': 10.643,
  'Card.bundle.min.js': 4.272,
  'CardPerfBasic.bundle.min.js': 4.329,
  'CardPerfExtended.bundle.min.js': 4.623,
  'Checkbox.bundle.min.js': 6.775,
  'CheckboxPerfBasic.bundle.min.js': 6.828,
  'CheckboxPerfExtended.bundle.min.js': 7.172,
  'CheckboxGroup.bundle.min.js': 2.699,
  'CheckboxGroupPerfBasic.bundle.min.js': 7.491,
  'CheckboxGroupPerfExtended.bundle.min.js': 7.634,
  'ColorPicker.bundle.min.js': 34.137,
  'ColorPickerPerfBasic.bundle.min.js': 34.309,
  'ColorPickerPerfExtended.bundle.min.js': 34.878,
  'CopyUrlButton.bundle.min.js': 37.264,
  'Counter.bundle.min.js': 34.22,
  'CounterPerfBasic.bundle.min.js': 34.291,
  'CounterPerfExtended.bundle.min.js': 35.039,
  'CounterBadge.bundle.min.js': 2.771,
  'CounterBadgePerfBasic.bundle.min.js': 2.812,
  'CounterBadgePerfExtendedBad.bundle.min.js': 2.941,
  'CounterBadgePerfExtendedGood.bundle.min.js': 2.896,
  'DatePicker.bundle.min.js': 147.125,
  'DatePickerPerfBasic.bundle.min.js': 147.178,
  'DatePickerPerfExtended.bundle.min.js': 147.8,
  'DatePickerInput.bundle.min.js': 204.082,
  'DatePickerInputPerfBasic.bundle.min.js': 204.133,
  'DatePickerInputPerfExtended.bundle.min.js': 205.977,
  'Dialog.bundle.min.js': 10.808,
  'DialogPerfBasic.bundle.min.js': 10.852,
  'DialogPerfExtendedWired.bundle.min.js': 10.986,
  'DialogPerfExtendedFixed.bundle.min.js': 11,
  'Divider.bundle.min.js': 2.045,
  'DividerPerfBasic.bundle.min.js': 1.973,
  'DividerPerfExtended.bundle.min.js': 2.05,
  'DotNavigation.bundle.min.js': 7.863,
  'DotNavigationPerfBasic.bundle.min.js': 7.847,
  'DotNavigationPerfExtended.bundle.min.js': 8.063,
  'Dropdown.bundle.min.js': 54.667,
  'DropdownPerfBasic.bundle.min.js': 54.896,
  'DropdownPerfExtended.bundle.min.js': 57.904,
  'Event.bundle.min.js': 8.173,
  'EventPerfBasic.bundle.min.js': 8.23,
  'EventPerfExtended.bundle.min.js': 8.674,
  'FloatingDropdown.bundle.min.js': 44.33,
  'FloatingDropdownPerfBasic.bundle.min.js': 44.397,
  'FloatingDropdownPerfExtended.bundle.min.js': 44.688,
  'Grid.bundle.min.js': 4.139,
  'GridPerfBasic.bundle.min.js': 4.17,
  'GridPerfExtended.bundle.min.js': 4.315,
  'HeroImage.bundle.min.js': 18,
  'HeroImagePerfBasic.bundle.min.js': 18,
  'HeroImagePerfExtended.bundle.min.js': 18,
  'IconButton.bundle.min.js': 6.556,
  'IconButtonPerfBasic.bundle.min.js': 7,
  'IconButtonPerfExtendedBad.bundle.min.js': 7.185,
  'IconButtonPerfExtendedGood.bundle.min.js': 7.11,
  'IconToggle.bundle.min.js': 5.853,
  'IconTogglePerfBasic.bundle.min.js': 6.343,
  'IconTogglePerfExtended.bundle.min.js': 6.56,
  'Image.bundle.min.js': 18,
  'ImagePerfBasic.bundle.min.js': 18,
  'ImagePerfExtended.bundle.min.js': 18,
  'Input.bundle.min.js': 5.496,
  'LikeButton.bundle.min.js': 7.557,
  'LikeButtonPerfBasic.bundle.min.js': 7.597,
  'LikeButtonPerfExtended.bundle.min.js': 7.937,
  'NewCard.bundle.min.js': 2.684,
  'NewCardPerfBasic.bundle.min.js': 4.334,
  'OverlappingCard.bundle.min.js': 4.956,
  'Pagination.bundle.min.js': 9.913,
  'PaginationPerfBasic.bundle.min.js': 9.934,
  'PaginationPerfExtended.bundle.min.js': 10.319,
  'Picker.bundle.min.js': 8.783,
  'PickerPerfBasic.bundle.min.js': 8.828,
  'PickerPerfExtended.bundle.min.js': 9.194,
  'Popover.bundle.min.js': 28.544,
  'PopoverPerfBasic.bundle.min.js': 28.635,
  'PopoverPerfExtended.bundle.min.js': 28.831,
  'ProgressBar.bundle.min.js': 5.292,
  'ProgressBarPerfBasic.bundle.min.js': 5.334,
  'ProgressBarPerfExtended.bundle.min.js': 5.455,
  'RadioButton.bundle.min.js': 7.1,
  'RadioButtonPerfBasic.bundle.min.js': 7.154,
  'RadioButtonPerfExtended.bundle.min.js': 7.526,
  'RadioButtonGroup.bundle.min.js': 2.777,
  'RadioButtonGroupPerfBasic.bundle.min.js': 7.864,
  'RadioButtonGroupPerfExtended.bundle.min.js': 8.016,
  'Ratings.bundle.min.js': 7.529,
  'RatingsPerfBasic.bundle.min.js': 7.581,
  'RatingsPerfExtended.bundle.min.js': 7.911,
  'SectionNotification.bundle.min.js': 10.415,
  'SectionNotificationPerfBasic.bundle.min.js': 10.44,
  'SectionNotificationPerfExtended.bundle.min.js': 10.599,
  'ShareButton.bundle.min.js': 7.692,
  'ShareButtonPerfBasic.bundle.min.js': 7.783,
  'ShareButtonPerfExtended.bundle.min.js': 7.882,
  'SocialBar.bundle.min.js': 33.68,
  'Spinner.bundle.min.js': 2.566,
  'SpinnerPerfBasic.bundle.min.js': 2.601,
  'SpinnerPerfExtended.bundle.min.js': 2.704,
  'StatesButton.bundle.min.js': 9.76,
  'StripCard.bundle.min.js': 2.955,
  'Tabs.bundle.min.js': 17.906,
  'TabsPerfBasic.bundle.min.js': 17.956,
  'TabsPerfExtended.bundle.min.js': 18.344,
  'Tag.bundle.min.js': 5.606,
  'TagPerfBasic.bundle.min.js': 5.644,
  'TagPerfExtended.bundle.min.js': 6.239,
  'Tags.bundle.min.js': 7.219,
  'TagsPerfBasic.bundle.min.js': 7.278,
  'TagsPerfExtended.bundle.min.js': 7.624,
  'Text.bundle.min.js': 3.036,
  'TextPerfBasic.bundle.min.js': 3.05,
  'TextPerfExtended.bundle.min.js': 3.219,
  'TextArea.bundle.min.js': 33.002,
  'TextAreaPerfBasic.bundle.min.js': 33.037,
  'TextAreaPerfExtended.bundle.min.js': 33.843,
  'TextButton.bundle.min.js': 6.809,
  'TextButtonPerfBasic.bundle.min.js': 6.826,
  'TextButtonPerfExtended.bundle.min.js': 7.011,
  'TextField.bundle.min.js': 37.638,
  'TextFieldPerfBasic.bundle.min.js': 37.675,
  'TextFieldPerfExtended.bundle.min.js': 38.64,
  'ThumbnailImage.bundle.min.js': 18,
  'ThumbnailImagePerfBasic.bundle.min.js': 18,
  'ThumbnailImagePerfExtended.bundle.min.js': 18,
  'Toast.bundle.min.js': 8.187,
  'ToggleSwitch.bundle.min.js': 5.44,
  'ToggleSwitchPerfBasic.bundle.min.js': 5.426,
  'ToggleSwitchPerfExtended.bundle.min.js': 5.721,
  'Tooltip.bundle.min.js': 29.899,
};

module.exports = {
  bundleSize: {
    files: Object.entries(files).map(([name, size]) => ({
      glob: `../wix-ui-tpa-test-perfer/dist/statics/${name}`,
      maxSize: `${size + DELTA_LIMIT}kb`,
    })),
  },
};
