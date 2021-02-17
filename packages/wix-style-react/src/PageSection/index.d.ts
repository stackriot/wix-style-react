import * as React from 'react';

export interface PageSectionProps {
  dataHook?: string;
  className?: string;
  title: string;
  subtitle?: string;
  showDivider?: boolean;
  actionsBar?: React.ReactNode;
}

export default class PageSection extends React.PureComponent<PageSectionProps>{}
