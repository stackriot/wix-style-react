import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';
import { analyticsSummaryCardPrivateDriverFactory } from './AnalyticsSummaryCard.private.uni.driver';
import AnalyticsSummaryCard from '../AnalyticsSummaryCard';

const getAnalyticsComponent = props => {
  return (
    <AnalyticsSummaryCard
      chartColorHex="#3899ec"
      chartData={[
        {
          label: new Date('2020-09-03T21:00:00.000Z'),
          value: 3,
        },
        {
          label: new Date('2020-09-04T21:00:00.000Z'),
          value: 17,
        },
        {
          label: new Date('2020-09-05T21:00:00.000Z'),
          value: 18,
        },
      ]}
      chartWidth={169}
      ctaButton={<button>button</button>}
      footer={<div> This is footer</div>}
      trend={12}
      title="Sessions"
      titleTooltip="tooltip"
      value="1,9K"
      valueTooltip="1,943"
      {...props}
    />
  );
};

describe(AnalyticsSummaryCard.displayName, () => {
  const render = createRendererWithUniDriver(
    analyticsSummaryCardPrivateDriverFactory,
  );

  afterEach(cleanup);

  it('should render', async () => {
    const { driver } = render(getAnalyticsComponent());

    expect(await driver.exists()).toBe(true);
  });

  it('should click', async () => {
    const onClick = jest.fn();
    const { driver } = render(getAnalyticsComponent({ onClick }));

    await driver.click();
    expect(onClick).toBeCalled();
  });

  it('should show value', async () => {
    const valueText = 'test value';
    const { driver } = render(getAnalyticsComponent({ value: valueText }));
    expect(await driver.getValue()).toBe(valueText);
  });

  it('should show value tooltip', async () => {
    const tooltipText = 'test value tooltip';
    const { driver } = render(
      getAnalyticsComponent({ valueTooltip: tooltipText }),
    );
    expect(await driver.getValueTooltipText()).toBe(tooltipText);
  });

  it('should show title', async () => {
    const titleText = 'test title';
    const { driver } = render(getAnalyticsComponent({ title: titleText }));
    expect(await driver.getTitle()).toBe(titleText);
  });

  it('should show title tooltip', async () => {
    const tooltipText = 'test title tooltip';
    const { driver } = render(
      getAnalyticsComponent({ titleTooltip: tooltipText }),
    );
    expect(await driver.getTitleTooltipText()).toBe(tooltipText);
  });

  describe('CTA', () => {
    it('should show CTA', async () => {
      const { driver } = render(getAnalyticsComponent());
      expect(await driver.CTAExists()).toBe(true);
    });

    it('should not show CTA while loading', async () => {
      const { driver } = render(getAnalyticsComponent({ isLoading: true }));
      expect(await driver.CTAExists()).toBe(false);
    });

    it('should click CTA', async () => {
      const onCTAClick = jest.fn();
      const { driver } = render(getAnalyticsComponent({ onCTAClick }));

      await driver.clickCTA();
      expect(onCTAClick).toBeCalled();
    });
  });

  describe('trend', () => {
    it('should show trend given isTrendVisible is true', async () => {
      const trendValue = 10;
      const { driver } = render(
        getAnalyticsComponent({ isTrendVisible: true, trend: trendValue }),
      );
      expect(await driver.trendExists()).toBe(true);
      expect(await driver.getTrendvalue()).toBe(trendValue);
    });

    it('should not show trend given isTrendVisible is false', async () => {
      const { driver } = render(
        getAnalyticsComponent({ isTrendVisible: false }),
      );
      expect(await driver.trendExists()).toBe(false);
    });
  });

  describe('loader', () => {
    it('should show Loader given isLoading is true', async () => {
      const { driver } = render(getAnalyticsComponent({ isLoading: true }));
      expect(await driver.isLoading()).toBe(true);
    });

    it('should not show Loader given isLoading is false', async () => {
      const { driver } = render(getAnalyticsComponent({ isLoading: false }));
      expect(await driver.isLoading()).toBe(false);
    });
  });
});
