import * as React from 'react';
export type RadioAlignItems = 'top' | 'center';

export interface RadioProps {
  dataHook?: string;
  className?: string;
  checked?: boolean;
  disabled?: boolean;
  label?: React.ReactNode;
  id?: string;
  value?: string | number;
  name?: React.ReactNode;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  alignItems?: RadioAlignItems;
}

declare const Radio: React.FunctionComponent<RadioProps>;
export default Radio;
