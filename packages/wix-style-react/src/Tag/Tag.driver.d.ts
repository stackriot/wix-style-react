import { BaseDriver } from 'wix-ui-test-utils/driver-factory';

export interface TagDriver extends BaseDriver {
  isTiny: () => boolean;
  isSmall: () => boolean;
  isMedium: () => boolean;
  isLarge: () => boolean;
  isStandardTheme: () => boolean;
  isWarningTheme: () => boolean;
  isErrorTheme: () => boolean;
  isDarkTheme: () => boolean;
  isSuccessTheme: () => boolean;
  isRemovable: () => boolean;
  removeTag: () => void;
  click: () => void;
  isThumbExists: () => boolean;
  isDisabled: () => boolean;
  getLabel: () => string;
}
