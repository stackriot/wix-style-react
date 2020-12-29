import React from 'react';
import { classes } from './AccordionSectionItem.st.css';
import Text from '../../Text';

function accordionSectionItem({ title }) {
  return (
    <div className={classes.root}>
      <Text>{title}</Text>
    </div>
  );
}

export default accordionSectionItem;
