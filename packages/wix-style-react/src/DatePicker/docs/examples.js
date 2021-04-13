export const simple = `
() => {
  const [value, setState] = React.useState('');
  return (
    <DatePicker
      placeholderText="Select Date"
      value={value || new Date()}
      onChange={value => setState(value)}
    />
  );
}
`;

export const customizations = `
() => {
  const [value, setState] = React.useState('');
  return (
    <DatePicker
      value={value || new Date('08/07/1986')}
      placeholderText="Select Date"
      onChange={value => setState(value)}
      dateFormatV2="d/L/yy"
      locale='fr'
      showMonthDropdown
      showYearDropdown
    />
  )
  }
`;

export const filterDate = `
() => {
  const [value, setState] = React.useState('');
  return (
    <DatePicker
      value={value ||new Date()}
      placeholderText="Select Date"
      onChange={value => setState(value)}
      filterDate={date => date < new Date()}
    />
  )
}
`;

export const status = `
<Layout cols={1}>
  <Cell>
    <DatePicker
      value={new Date()}
      placeholderText="Select Date"
      onChange={event => console.log(event)}
      filterDate={date => date < new Date()}
      status="error"
      statusMessage="Error Message"
    />
  </Cell>
  <Cell>
    <DatePicker
      value={new Date()}
      placeholderText="Select Date"
      onChange={event => console.log(event)}
      filterDate={date => date < new Date()}
      status="warning"
      statusMessage="Warning Message"
    />
  </Cell>
  <Cell>
    <DatePicker
      value={new Date()}
      placeholderText="Select Date"
      onChange={event => console.log(event)}
      filterDate={date => date < new Date()}
      status="loading"
      statusMessage="Loading Message"
    />
  </Cell>
</Layout>
`;

export const rangeSelection = `
() => {
  const [value, setState] = React.useState('');
  return (
    <DatePicker
      value={value || new Date()}
      placeholderText="Select Date Range"
      onChange={value => setState(value)}
      twoMonths
      selectionMode="range"
      shouldCloseOnSelect={false}
    />
)
}
`;

export const sizes = `
<Layout cols={1}>
  <Cell>
    <DatePicker
      value={new Date()}
      placeholderText="Select Date"
      onChange={event => console.log(event)}
      filterDate={date => date < new Date()}
      size="small"
    />
  </Cell>
  <Cell>
    <DatePicker
      value={new Date()}
      placeholderText="Select Date"
      onChange={event => console.log(event)}
      filterDate={date => date < new Date()}
      size="medium"
    />
  </Cell>
  <Cell>
    <DatePicker
      value={new Date()}
      placeholderText="Select Date"
      onChange={event => console.log(event)}
      filterDate={date => date < new Date()}
      size="large"
    />
  </Cell>
</Layout>
`;

export const readOnly = `
() => {
  const [value, setState] = React.useState('');
  return (
    <DatePicker
      value={value || new Date()}
      placeholderText="Select Date Range"
      onChange={value => setState(value)}
      readOnly
    />
  )
}
`;

export const width = `
<Layout cols={1}>
  <Cell>
    <DatePicker
      value={new Date()}
      placeholderText="Select Date"
      onChange={event => console.log(event)}
    />
  </Cell>
  <Cell>
    <DatePicker
      value={new Date()}
      placeholderText="Select Date"
      onChange={event => console.log(event)}
      width="100%"
    />
  </Cell>
</Layout>
`;

export const clearButton = `
() => {
  const [value, setState] = React.useState('');
  return (
    <DatePicker
      placeholderText="Select Date"
      value={value}
      clearButton
      width="250px"
      onClear={() => setState('')}
      onChange={value => setState(value)}
    />
  );
}
`;

export const disableKeyboardType = `
() => {
  const [value, setState] = React.useState('');
  return (
    <DatePicker
      placeholderText="Select Date"
      value={value || new Date()}
      onChange={value => setState(value)}
      disableKeyboardType
    />
  );
}
`;
