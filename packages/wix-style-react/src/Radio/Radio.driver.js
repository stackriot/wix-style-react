import { radioButtonDriverFactory } from 'wix-ui-core/dist/src/components/radio-button/RadioButton.driver';

export const radioDriverFactory = ({ element, eventTrigger }) => {
  const coreRadioDriver = radioButtonDriverFactory({ element, eventTrigger });

  return {
    /**
    /* Triggers a keyDown event on the radio input 
     * @param {string} key
     * @return {void}
     */
    keyDown: key => coreRadioDriver.keyDown(key),

    /**
    /* Triggers click event on radio
     * @return {void}
     */
    click: () => coreRadioDriver.click(),

    /**
     * Gets value of radio input
     * @return {string}
     */
    getValue: () => coreRadioDriver.value(),

    /**
     * Gets name of radio input
     * @return {string}
     */
    getName: () => coreRadioDriver.getName(),

    /**
     * Checks if icon of radio exists
     * @return {boolean}
     */
    iconExists: () => coreRadioDriver.iconExists(),

    /**
     * Checks if label of radio exists
     * @return {boolean}
     */
    labelExists: () => coreRadioDriver.labelExists(),

    /**
     * Checks if radio is checked
     * @return {boolean}
     */
    isChecked: () => coreRadioDriver.isChecked(),

    /**
     * Checks if radio is disabled
     * @return {boolean}
     */
    isDisabled: () => coreRadioDriver.isDisabled(),
  };
};

export default radioDriverFactory;
