import * as React from 'react';
import {
  NOTIFICATION_TYPE,
  NOTIFICATION_SIZE,
  SectionNotificationDefaultProps,
  SectionNotificationProps,
} from './types';
import { SectionNotificationButton } from './Button/SectionNotificationButton';
import { SectionNotificationText } from './Text/SectionNotificationText';
import { SectionNotificationIcon } from './Icon/SectionNotificationIcon';
import { st, classes } from './SectionNotification.st.css';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';

/** Section notification displays an important, succinct message, and provides actions for users to address and can not be dismissed.  */
export class SectionNotification extends React.Component<SectionNotificationProps> {
  static displayName = 'SectionNotification';
  static defaultProps: SectionNotificationDefaultProps = {
    type: NOTIFICATION_TYPE.default,
    size: NOTIFICATION_SIZE.regular,
  };

  static Text = SectionNotificationText;
  static Icon = SectionNotificationIcon;
  static Button = SectionNotificationButton;

  render() {
    const { children, type, className, size } = this.props;
    const isError = type === NOTIFICATION_TYPE.error;
    const isAlert = type === NOTIFICATION_TYPE.alert;
    const isWired = type === NOTIFICATION_TYPE.wired;

    const contents = [];
    const buttons = [];

    React.Children.forEach(children, (child: React.ReactElement) => {
      if (child && child.type === SectionNotificationButton) {
        buttons.push(child);
      } else {
        contents.push(child);
      }
    });

    return (
      <TPAComponentsConsumer>
        {({ rtl }) => {
          return (
            <div
              className={st(
                classes.root,
                {
                  error: isError,
                  alert: isAlert,
                  rtl,
                  size,
                  wired: isWired,
                },
                className,
              )}
              role="alert"
              data-error={isError}
              data-alert={isAlert}
              data-wired={isWired}
              aria-live="assertive"
              data-hook={this.props['data-hook']}
            >
              <div className={classes.main}>
                <div className={classes.contentsWrapper}>{contents}</div>
                {buttons ? (
                  <div className={classes.buttonsWrapper}>{buttons}</div>
                ) : null}
              </div>
            </div>
          );
        }}
      </TPAComponentsConsumer>
    );
  }
}
