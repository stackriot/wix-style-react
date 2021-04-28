import { baseUniDriverFactory, findByHook } from '../../test/utils/unidriver';
import { loaderUniDriverFactory } from '../Loader/Loader.uni.driver';
import { textUniDriverFactory } from '../Text/Text.uni.driver';
import { tooltipDriverFactory } from '../Tooltip/Tooltip.uni.driver';
import { trendIndicatorDriverFactory } from '../TrendIndicator/TrendIndicator.uni.driver';
import { dataHooks } from './constants';

export const analyticsSummaryCardDriverFactory = (base, body) => {
  const getLoader = () =>
    loaderUniDriverFactory(
      findByHook(base, dataHooks.analyticsSummaryCardLoader),
    );
  const getValue = () =>
    textUniDriverFactory(findByHook(base, dataHooks.analyticsSummaryCardValue));

  const getTitle = () =>
    textUniDriverFactory(findByHook(base, dataHooks.analyticsSummaryCardTitle));

  const getValueTooltip = () =>
    tooltipDriverFactory(
      base.$(`[data-hook="${dataHooks.analyticsSummaryCardValueTooltip}"]`),
      body,
    );

  const getTitleTooltip = () =>
    tooltipDriverFactory(
      base.$(`[data-hook="${dataHooks.analyticsSummaryCardTitleTooltip}"]`),
      body,
    );

  const getTrendIndicator = () =>
    trendIndicatorDriverFactory(
      findByHook(base, dataHooks.analyticsSummaryCardTrend),
    );

  const getTooltipText = tooltip => tooltip.getTooltipText();

  return {
    ...baseUniDriverFactory(base, body),
    /**
     * Click on CTA
     * @returns {Promise<React.MouseEventHandler<HTMLButtonElement>>}
     */
    clickCTA: async () => {
      await base.hover();
      await findByHook(base, dataHooks.analyticsSummaryCardCTA).click();
    },
    /**
     * Check if CTA exists
     * @returns {boolean}
     */
    CTAExists: async () => {
      await base.hover();
      return findByHook(base, dataHooks.analyticsSummaryCardCTA).exists();
    },
    /**
     * Checks whether the Analytics are loading
     * @returns {Promise<boolean>}
     */
    isLoading: () => getLoader().exists(),
    /**
     * returns the value text
     * @returns {Promise<string>}
     */
    getValue: () => getValue().getText(),
    /**
     * returns the value tooltip text
     * @returns {Promise<string>}
     */
    getValueTooltipText: async () => getTooltipText(await getValueTooltip()),
    /**
     * returns the title text
     * @returns {Promise<string>}
     */
    getTitle: () => getTitle().getText(),
    /**
     * returns the title tooltip text
     * @returns {Promise<string>}
     */
    getTitleTooltipText: async () => getTooltipText(await getTitleTooltip()),
    /**
     * checks if trend exists
     * @returns {Promise<boolean>}
     */
    trendExists: () => getTrendIndicator().exists(),
    /**
     * returns the trend value
     * @returns {Promise<number>}
     */
    getTrendvalue: () => getTrendIndicator().getTrendValue(),
  };
};
