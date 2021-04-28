import { baseUniDriverFactory } from '../../test/utils/unidriver';
import { textUniDriverFactory } from '../Text/Text.uni.driver';
import { dataHooks } from './constants';

export const horizontalTimelineDriverFactory = (base, body) => {
  return {
    ...baseUniDriverFactory(base, body),

    /**
     * Gets the label text of timeline item by index
     * @param {number} timeline item index
     * @returns {Promise<string>} timeline item label text at index
     */
    getLabel: async idx => {
      return textUniDriverFactory(
        base.$(`[data-hook="${dataHooks.horizontalTimelineLabel}-${idx}"]`),
        body,
      ).getText()
    }
      ,

    /**
     * Gets skin type
     * @return {Promise<'dark' | 'standard'>}
     */
    getSkin: async () => await base.attr('data-skin'),
  };
};
