import DatePicker from 'wix-style-react/DatePicker';

import format from 'date-fns/format';

const defaultValue = new Date('2017/05/01');
const today = new Date();
const tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);

export default {
  category: '3. Inputs',
  storyName: '3.6 DatePicker',
  component: DatePicker,
  componentPath: '../src/DatePicker',

  componentProps: setState => ({
    onChange: value => setState({value}),
    dateFormat: 'YYYY/MM/DD',
    dataHook: 'storybook-datepicker',
    placeholderText: 'Select Date',
    value: defaultValue,
    shouldCloseOnSelect: true,
    showYearDropdown: false,
    showMonthDropdown: false,
    locale: 'en'
  }),

  exampleProps: {
    onChange: date => format(date, 'YYYY/MM/DD'),
    value: [
      {label: '2017/05/01', value: defaultValue},
      {label: 'Today', value: today},
      {label: 'Tomorrow', value: tomorrow}
    ]
  }
};
