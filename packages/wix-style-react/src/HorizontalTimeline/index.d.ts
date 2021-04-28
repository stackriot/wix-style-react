import * as React from 'react';

export type HorizontalTimelineItemSkin = 'dark' | 'light';
export type HorizontalTimelineItemLine = 'filled' | 'dashed';
export type HorizontalTimelineSkin = 'dark' | 'standard';
export type HorizontalTimelineAlignLabel = 'center' | 'start';

interface HorizontalTimelineItem {
  label?: React.ReactNode;
  skin?: HorizontalTimelineItemSkin;
  icon?: React.ReactNode;
  line?: HorizontalTimelineItemLine;
  width?: React.CSSProperties['width'];
}

export interface HorizontalTimelineProps {
  dataHook?: string;
  className?: string;
  alignLabel?: HorizontalTimelineAlignLabel;
  skin?: HorizontalTimelineSkin;
  items?: HorizontalTimelineItem[];
}

interface HorizontalTimelineIcon {
  skin?: HorizontalTimelineItemSkin;
}

export default class HorizontalTimeline extends React.PureComponent<HorizontalTimelineProps> {
  static DefaultIcon: React.FC<HorizontalTimelineIcon>;
  static ActiveIcon: React.FC<HorizontalTimelineIcon>;
  static DestructiveIcon: React.FC;
  static CompleteIcon: React.FC<HorizontalTimelineIcon>;
  static BoundaryIcon: React.FC<HorizontalTimelineIcon>;
}
