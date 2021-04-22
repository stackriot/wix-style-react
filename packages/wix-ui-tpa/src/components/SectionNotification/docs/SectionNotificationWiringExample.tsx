import * as React from 'react';
import { NOTIFICATION_TYPE, SectionNotification } from '../';
import { classes } from './SectionNotificationWiringExample.st.css';
import { ReactComponent as ErrorIcon } from '../../../assets/icons/Error.svg';

export const SectionNotificationWiringExample = () => {
  return (
    <SectionNotification
      type={NOTIFICATION_TYPE.wired}
      className={classes.root}
    >
      <SectionNotification.Icon icon={<ErrorIcon />} key="icon" />
      <SectionNotification.Text>
        This is a wired Section Notification
      </SectionNotification.Text>
    </SectionNotification>
  );
};
