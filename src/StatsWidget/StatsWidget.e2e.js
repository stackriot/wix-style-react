import eyes from 'eyes.it';
import {statsWidgetTestkitFactory, getStoryUrl, waitForVisibilityOf} from '../../testkit/protractor';

describe('StatsWidget', () => {
  const storyUrl = getStoryUrl('Core', 'Stats Widget');
  const dataHook = 'standard-stats-widget';

  eyes.it('should show proper amount of statistics', () => {
    const driver = statsWidgetTestkitFactory({dataHook});

    browser.get(storyUrl);

    waitForVisibilityOf(driver.element(), 'Cannot find StatsWidget')
      .then(() => {
        expect(driver.numberOfStatistics()).toBe(3);
      });
  });
});
