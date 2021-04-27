import * as React from 'react';
import { TooltipCommonProps } from '../common';

export interface FormFieldProps {
  children?:
    | React.ReactNode
    | ((data: { setCharactersLeft: CharactersLeftFn }) => React.ReactNode);
  charCount?: number;
  stretchContent?: boolean;
  label?: React.ReactNode;
  labelSize?: LabelPlacement;
  labelAlignment?: LabelAlignment;
  labelPlacement?: FormFieldLabelPlacement;
  required?: boolean;
  infoContent?: React.ReactNode;
  infoTooltipProps?: TooltipCommonProps;
  suffix?: React.ReactNode;
  id?: string;
  labelId?: string;
  dataHook?: string;
}

export default class FormField extends React.Component<FormFieldProps> {}

export type FormFieldLabelPlacement = 'top' | 'right' | 'left';
export type LabelPlacement = 'small' | 'medium';
export type LabelAlignment = 'middle' | 'top';
type CharactersLeftFn = (lengthLeft: number) => void;
