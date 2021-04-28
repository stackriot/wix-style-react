import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface HorizontalTimelineUniDriver extends BaseUniDriver {
  getLabel(id:number): Promise<string>
  getSkin(): Promise<'dark' | 'standard'>
}
