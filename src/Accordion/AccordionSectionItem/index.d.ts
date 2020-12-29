import * as React from 'react';

export interface AccordionSectionItemCommonProps {
  title: string;
}

export interface AccordionSectionItemProps {}

export default class AccordionSectionItem extends React.Component<
  AccordionSectionItemProps & AccordionSectionItemCommonProps
> {}
