import * as React from 'react';

export interface ContainerProps {
  dataHook?: string;
  fluid?: boolean;
  className?: string;
  stretchVertically?: boolean;
}

export interface ColumnsProps {
  className?: string;
  rtl?: boolean;
  stretchViewsVertically?: boolean;
  dataHook?: string;
}

export interface ColProps {
  className?: string;
  span?: string | number;
  rtl?: boolean;
  xs?: string | number;
  sm?: string | number;
  md?: string | number;
  lg?: string | number;
  xl?: string | number;
  dataHook?: string;
}

export interface AutoAdjustedColumnsProps {
  dataHook?: string;
}

export const Container: React.SFC<ContainerProps>;
export const RawContainer: React.SFC<ContainerProps>;
export class Columns extends React.Component<ColumnsProps> {}
export class Row extends React.Component<ColumnsProps> {}
export class Col extends React.Component<ColProps> {}
export class AutoAdjustedColumns extends React.Component<AutoAdjustedColumnsProps> {}
export class AutoAdjustedRow extends React.Component<AutoAdjustedColumnsProps> {}
