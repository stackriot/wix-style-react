import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface AnalyticsSummaryCardUniDriver extends BaseUniDriver {
  CTAExists(): Promise<boolean>;
  clickCTA(): Promise<void>;
  isLoading(): Promise<boolean>;
  getTitle(): Promise<string>;
  getTitleTooltipText(): Promise<string>;
  getValue(): Promise<string>;
  getValueTooltipText(): Promise<string>;
  trendExists(): Promise<boolean>;
  getTrendvalue(): Promise<number>;
}
