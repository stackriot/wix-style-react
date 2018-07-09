import React from 'react';
import {storiesOf} from '@storybook/react';
import InteractiveCodeExample from '../../utils/Components/InteractiveCodeExample';
import ButtonWhite from './ButtonWhite';
import ButtonIcon from './ButtonIcon';
import ButtonError from './ButtonError';
import ButtonPremium from './ButtonPremium';
import ButtonTransparent from './ButtonTransparent';
import ButtonClose from './ButtonClose';
import ButtonTextLink from './ButtonTextLink';
import story from '../../utils/Components/Story';

const category = '5. Buttons';

story({
  category,
  storyName: '5.1 Standard',
  componentSrcFolder: 'Backoffice/Button',
  componentProps: {
    height: 'medium',
    disabled: false,
    theme: 'fullblue',
    children: 'Click On Me'
  }
});

storiesOf(category, module)
  .add('5.2 White', () => (
    <div>
      <h1>White</h1>
      <InteractiveCodeExample title="Customize a <Button/>">
        <ButtonWhite/>
      </InteractiveCodeExample>
    </div>
  ))
  .add('5.3 Icon', () => (
    <div>
      <h1>Icon</h1>
      <InteractiveCodeExample title="Customize a <Button/>">
        <ButtonIcon/>
      </InteractiveCodeExample>
    </div>
  ))
  .add('5.4 Error', () => (
    <div>
      <h1>Error</h1>
      <InteractiveCodeExample title="Customize a <Button/>">
        <ButtonError/>
      </InteractiveCodeExample>
    </div>
  ))
  .add('5.5 Premium', () => (
    <div>
      <h1>Premium</h1>
      <InteractiveCodeExample title="Customize a <Button/>">
        <ButtonPremium/>
      </InteractiveCodeExample>
    </div>
  ))
  .add('5.6 Transparent', () => (
    <div>
      <h1>Transparent</h1>
      <InteractiveCodeExample title="Customize a <Button/>">
        <ButtonTransparent/>
      </InteractiveCodeExample>
    </div>
  ))
  .add('5.7 Close', () => (
    <div>
      <h1>Close</h1>
      <InteractiveCodeExample title="Customize a <Button/>">
        <ButtonClose/>
      </InteractiveCodeExample>
    </div>
  ))
  .add('5.8 Text Link', () => (
    <div>
      <h1>Text Link</h1>
      <InteractiveCodeExample title="Customize a <TextLink/>">
        <ButtonTextLink/>
      </InteractiveCodeExample>
    </div>
  ));
