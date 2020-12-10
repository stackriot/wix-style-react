import * as React from 'react';
import {
  RadioButtonChangeEvent,
  RadioButtonClickEvent,
} from 'wix-ui-core/radio-button';

export type RadioAlignItems = 'top' | 'center';

export interface RadioProps {
  dataHook?: string;
  className?: string;
  checked?: boolean;
  disabled?: boolean;
  label?: React.ReactNode | string;
  name?: React.ReactNode | string;
  onChange?(event: RadioButtonChangeEvent | RadioButtonClickEvent): void;
  alignItems?: RadioAlignItems;
}

declare const Radio: React.FunctionComponent<RadioProps>;
export default Radio;
