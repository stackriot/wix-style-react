import {sliderTestkitFactory, getStoryUrl, waitForVisibilityOf} from '../../testkit/protractor';
import eyes from 'eyes.it';

describe('Slider', () => {
  const storyUrl = getStoryUrl('Core', 'Slider');

  eyes.it('single handle flow', async () => {
    const dataHook = 'story-slider';
    const driver = sliderTestkitFactory({dataHook});
    let handleTooltipValue;

    browser.get(storyUrl);

    waitForVisibilityOf(driver.element(), 'Cant find Slider');

    handleTooltipValue = await driver.handleTooltipValue({index: 0});
    expect(handleTooltipValue).toEqual(3);

    await driver.hoverHandle({index: 0});
    expect(driver.isHandleTooltipDisplayed()).toBe(true);

    await driver.unHoverHandle({index: 0});
    expect(driver.isHandleTooltipDisplayed()).toBe(false);

    driver.dragHandle({index: 0, offset: 1});
    handleTooltipValue = await driver.handleTooltipValue({index: 0});
    expect(handleTooltipValue).toBe(4);
  });

  eyes.it('multiple handles flow', async () => {
    const dataHook = 'story-slider-multiple';
    const driver = sliderTestkitFactory({dataHook});
    let handleTooltipValue;

    browser.get(storyUrl);

    waitForVisibilityOf(driver.element(), 'Cant find Slider');

    handleTooltipValue = await driver.handleTooltipValue({index: 0});
    expect(handleTooltipValue).toEqual(3);

    handleTooltipValue = await driver.handleTooltipValue({index: 1});
    expect(handleTooltipValue).toEqual(4);

    handleTooltipValue = await driver.handleTooltipValue({index: 2});
    expect(handleTooltipValue).toEqual(5);

    driver.dragHandle({index: 0, offset: 3});
    handleTooltipValue = await driver.handleTooltipValue({index: 0});
    expect(handleTooltipValue).toEqual(4);

    handleTooltipValue = await driver.handleTooltipValue({index: 1});
    expect(handleTooltipValue).toEqual(5);

    handleTooltipValue = await driver.handleTooltipValue({index: 2});
    expect(handleTooltipValue).toEqual(6);
  });
});
