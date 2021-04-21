import * as React from 'react';
import { classes } from './TextFieldExtendedExample.st.css';
import { TextField, TextFieldProps } from '../TextField';
import { TextFieldTheme } from '../TextFieldEnums';

export const TextFieldExtendedExample: React.FunctionComponent<TextFieldProps> = (
  props,
) => (
  <>
    <h3>Theme Box:</h3>
    <TextField {...props} className={classes.root} />

    <h3 style={{ marginTop: '50px' }}>Theme Line:</h3>
    <TextField
      {...{ ...props, theme: TextFieldTheme.Line }}
      className={classes.root}
    />

    <h3 style={{ marginTop: '50px' }}>With Label:</h3>
    <TextField
      {...{ ...props, label: 'label text' }}
      className={classes.root}
    />
  </>
);
