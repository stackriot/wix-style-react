import { TPAComponentProps } from '../../types';

export interface SectionNotificationProps extends TPAComponentProps {
  /* There are 4 different types: ‘default’, ‘error’, ‘alert’, and ‘wired’. The default value is ‘default’. */
  type?: string;
  children?: React.ReactNode;
  /* There are 2 different sizes: ‘regular’, ‘compact’. Each size defines the padding size. The default value is ‘regular’.*/
  size?: string;
}

export interface SectionNotificationDefaultProps {
  type: string;
  size: string;
}

export interface SectionNotificationIconProps {
  icon?: React.ReactNode;
  className?: string;
}

export interface SectionNotificationTextProps {
  className?: string;
}

export interface SectionNotificationButtonProps {
  type?: string;
  children?: React.ReactNode;
}

export enum NOTIFICATION_TYPE {
  default = 'default',
  error = 'error',
  alert = 'alert',
  wired = 'wired',
}

export enum NOTIFICATION_SIZE {
  regular = 'regular',
  compact = 'compact',
}

export {
  BUTTON_PRIORITY,
  TEXT_BUTTON_PRIORITY,
  BUTTON_TYPE,
} from './Button/SectionNotificationButton';
