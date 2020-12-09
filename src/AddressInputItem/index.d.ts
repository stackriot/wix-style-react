import * as React from 'react';

export interface AddressInputItemProps {
  dataHook?: string;
  className?: string;
  mainLabel?: string;
  secondaryLabel?: string;
  optionLayout?: AddressInputItemLayout;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  selected?: boolean;
  disabled?: boolean;
  highlighted?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export type AddressInputItemLayout = 'single-line' | 'double-line';

export const addressInputItemBuilder: (data: {
  id: string | number;
  className?: string;
  prefix?: React.ReactNode;
  mainLabel?: string;
  secondaryLabel?: string;
  suffix?: React.ReactNode;
  disabled?: boolean;
  dataHook?: string;
  optionLayout?: AddressInputItemLayout;
  displayLabel?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}) => {
  id: string | number;
  disabled: boolean | undefined;
  overrideOptionStyle: true;
  label?: string;
  value: (props?: Partial<AddressInputItemProps>) => React.ReactNode;
};

export default class AddressInputItem extends React.PureComponent<AddressInputItemProps>{}

