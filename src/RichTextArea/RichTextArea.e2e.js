import eyes from 'eyes.it';
import {richTextAreaTestkitFactory, getStoryUrl, waitForVisibilityOf} from '../../testkit/protractor';
import {settings} from '../../stories/RichTextArea/RichTextArea.story';
import autoExampleDriver from 'wix-storybook-utils/AutoExampleDriver';
import {BUTTON_TYPES} from './RichTextArea.protractor.driver';
import {flattenInternalDriver} from '../test-common';

const EDITOR_TAB_ORDINAL = 7;

describe('RichTextArea', () => {
  const storyUrl = getStoryUrl(settings.category, settings.storyName);
  const richTextAreaTestkit = richTextAreaTestkitFactory({dataHook: settings.dataHook});

  const pressTab = times => browser.actions().sendKeys([...Array(times)].map(() => protractor.Key.TAB)).perform();
  const focusEditor = () => pressTab(EDITOR_TAB_ORDINAL);

  // TODO: We can change this to beforeAll (to make the test go faster),
  // after we have a way to reset the focus before Each test.
  beforeEach(() => {
    browser.get(storyUrl);
  });

  beforeEach(async() => {
    await waitForVisibilityOf(richTextAreaTestkit.element());
  });

  eyes.it('should render default props', async () => {
    expect(richTextAreaTestkit.isEditorFocused()).toBe(false, 'isEditorFocused');
    // TODO: replace with forEachAsync
    for (let index = 0; index < BUTTON_TYPES.length; index++) {
      expect(richTextAreaTestkit.isButtonFocused(index)).toBe(false, 'isButtonFocused');
    }
  });

  describe('Focus', () => {
    eyes.it('should show focus styles for editor', async () => {
      expect(await richTextAreaTestkit.isEditorFocused()).toBe(false);
      await focusEditor();
      expect(await richTextAreaTestkit.isEditorFocused()).toBe(true);
    });

    eyes.it('should show focus styles when navigated by keyboard', async () => {
      // TODO: replace with forEachAsync
      for (let index = 0; index < BUTTON_TYPES.length; index++) {
        const type = BUTTON_TYPES[index];
        const buttonDriver = flattenInternalDriver(richTextAreaTestkit.getToolbarButtonDriver(index));
        expect(await buttonDriver.isFocused()).toBe(false, `${type} - before - focused`);
        expect(await buttonDriver.hasFocusState()).toBe(false, `${type} - before - hasFocusState`);
        expect(await buttonDriver.hasFocusVisibleState()).toBe(false, `${type} - before - hasFocusVisibleState`);
        await pressTab(1);
        expect(await buttonDriver.isFocused()).toBe(true, `${type} - after - focused`);
        expect(await buttonDriver.hasFocusState()).toBe(true, `${type} - after - hasFocusState`);
        expect(await buttonDriver.hasFocusVisibleState()).toBe(true, `${type} - after - hasFocusVisibleState`);
        await eyes.checkWindow(`${type} button with focus-visible`);
      }
    });

    it('should NOT show focus styles when clicking buttons by mouse', async () => {
      // TODO: replace with forEachAsync
      for (let index = 0; index < BUTTON_TYPES.length; index++) {
        const type = BUTTON_TYPES[index];
        const buttonDriver = flattenInternalDriver(richTextAreaTestkit.getToolbarButtonDriver(index));
        expect(await buttonDriver.isFocused()).toBe(false, `${type} - before - focused`);
        expect(await buttonDriver.hasFocusState()).toBe(false, `${type} - before - hasFocusState`);
        expect(await buttonDriver.hasFocusVisibleState()).toBe(false, `${type} - before - hasFocusVisibleState`);
        await buttonDriver.clickRoot();
        // These buttons shold not be focusable by mouse, since we want the focus to stay in the editor.
        expect(await buttonDriver.isFocused()).toBe(false, `${type} - after - focused`);
        expect(await buttonDriver.hasFocusState()).toBe(false, `${type} - after - hasFocusState`);
        expect(await buttonDriver.hasFocusVisibleState()).toBe(false, `${type} - after - hasFocusVisibleState`);
      }
    });
  });

  describe('Focus+Error', () => {
    beforeEach(async () => {
      await autoExampleDriver.setProps({error: true});
    });

    eyes.it('should show focus styles for editor', async () => {
      expect(await richTextAreaTestkit.isEditorFocused()).toBe(false);
      await focusEditor();
      expect(await richTextAreaTestkit.isEditorFocused()).toBe(true);
    });

    eyes.it('should show focus styles for each button', async () => {
      // TODO: replace with forEachAsync
      for (let index = 0; index < BUTTON_TYPES.length; index++) {
        const type = BUTTON_TYPES[index];
        expect(await richTextAreaTestkit.isButtonFocused(index)).toBe(false);
        await pressTab(1);
        expect(await richTextAreaTestkit.isButtonFocused(index)).toBe(true);
        await eyes.checkWindow(`Button ${type}`);
      }
    });
  });

});
