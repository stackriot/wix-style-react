import { baseUniDriverFactory } from '../../test/utils/unidriver';

export const radioDriverFactory = (base, body) => {
  return {
    ...baseUniDriverFactory(base, body),
  };
};
