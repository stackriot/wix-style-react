import React from 'react';
import PropTypes from 'prop-types';
import isEqual from 'lodash/isEqual';
import omit from 'lodash/omit';
import classNames from 'classnames';
import s from './Table.scss';
import DataTable from '../DataTable';
import WixComponent from '../BaseComponents/WixComponent';
import Checkbox from '../Checkbox';
import styles from '../../src/Card/Header/Header.scss';
import typography from '../Typography/Typography.scss';

const BulkSelectionState = Object.freeze({
  CHECKED: 'checked',
  UNCHECKED: 'unchecked',
  INTERMEDIATE: 'indeterminate'
});

/**
 * Table is a composit component that allows adding header, fuooter and bulk actions to tables
 */
export default class Table extends WixComponent {

  constructor(props) {
    super(props);
    const selections = props.selections.slice();
    this.state = {
      selections
    };
  }

  getSelectionsCount(selections) {
    return selections.reduce((total, current) => current ? total + 1 : total, 0);
  }

  getNextCheckboxState(selections) {
    const numOfSelected = this.getSelectionsCount(selections);
    const numOfRows = selections.length;
    return numOfSelected === 0 ? BulkSelectionState.UNCHECKED :
      numOfSelected === numOfRows ? BulkSelectionState.CHECKED : BulkSelectionState.INTERMEDIATE;
  }

  // This method is equivilant to the React 16 Lifecycle method getDerivedStateFromProps
  static _getDerivedStateFromProps(props, state) {
    return isEqual(props.selections, state.selections) ? null : {selections: props.selections.slice()};
  }

  componentWillReceiveProps(nextProps) {
    const newState = Table._getDerivedStateFromProps(nextProps, this.state);
    newState && this.setState(newState);
  }

  toggleAll(enable) {
    return this.state.selections.map(() => enable);
  }

  handleRowOnChange(onSelectionChanged) {
    let selections;
    const bulkSelectionState = this.getNextCheckboxState(this.state.selections);
    if (bulkSelectionState === BulkSelectionState.INTERMEDIATE) {
      selections = this.toggleAll(true);
    } else if (bulkSelectionState === BulkSelectionState.CHECKED) {
      selections = this.toggleAll(false);
    } else {
      selections = this.toggleAll(true);
    }
    this.setState({selections});
    onSelectionChanged && onSelectionChanged(selections);
  }

  craeteCheckboxColumn(onSelectionChanged) {
    const bulkSelectionState = this.getNextCheckboxState(this.state.selections);
    return {
      title: <Checkbox
        dataHook="table-select"
        checked={bulkSelectionState === BulkSelectionState.CHECKED}
        indeterminate={bulkSelectionState === BulkSelectionState.INTERMEDIATE}
        onChange={() => this.handleRowOnChange(onSelectionChanged)}
        />,
      render: (row, rowNum) => (<Checkbox
        dataHook="row-select"
        checked={this.state.selections[rowNum]}
        onChange={() => {
          const selections = this.state.selections.slice();
          selections[rowNum] = !selections[rowNum];
          this.setState({selections});
          onSelectionChanged && onSelectionChanged(selections);
        }}
        />)
    };
  }

  renderHeader() {
    const {header} = this.props;
    return (
      <div className={s.header} data-hook="table-header">
        {typeof header === 'function' ? header(this.state.selection) : header}
      </div>);
  }

  renderFooter() {
    const {footer} = this.props;
    return (
      <div className={s.footer} data-hook="table-footer">
        {typeof footer === 'function' ? footer(this.state.selection) : footer}
      </div>);
  }

  renderSelectionCounter(selectionCount) {
    const {selectionCounterRenderer} = this.props;
    return selectionCounterRenderer ?
      (<div className={classNames(typography.t1, styles.container)} data-hook="table-selection-counter">
        {selectionCounterRenderer(selectionCount)}
      </div>) : null;
  }

  renderSelectionActions() {
    const {selectionHeader} = this.props;
    return selectionHeader ?
      (<div className={s.actions}>
        <div className={s.selectionHeader} data-hook="table-selection-header">
          {typeof selectionHeader === 'function' ? selectionHeader(this.state.selection) : selectionHeader}
        </div>
      </div>) : null;
  }

  renderSelectionHeader(selectionCount) {
    const {selectionHeader, selectionCounterRenderer} = this.props;

    return (selectionHeader || selectionCounterRenderer) ? (
      <div className={styles.header}>
        {this.renderSelectionCounter(selectionCount)}
        {this.renderSelectionActions()}
      </div>) : null;
  }

  shouldComponentUpdate() {
    // Table extends WixComponent which is a PureComponent, but Table is not pure.
    // returning true, disables the PureComponent optimization.
    return true;
  }

  render() {
    const {header, footer, showSelection, onSelectionChanged, columns} = this.props;
    const selectionCount = this.getSelectionsCount(this.state.selections);
    const extendedColumns = showSelection ? [this.craeteCheckboxColumn(onSelectionChanged), ...columns] : columns;

    const dataTableProps = omit(this.props,
      'header',
      'footer',
      'selectionHeader',
      'showSelection',
      'selections',
      'selectionCounterRenderer',
      'onSelectionChanged',
      'columns',
      'dataHook');

    return (
      <div>
        {header && !selectionCount && this.renderHeader()}
        {!!selectionCount && this.renderSelectionHeader(selectionCount)}
        <DataTable
          {...dataTableProps}
          dataHook="table"
          columns={extendedColumns}
          newDesign
          />
        {footer && this.renderFooter()}
      </div>
    );
  }
}

Table.defaultProps = {
  ...DataTable.defaultProps,
  showSelection: false,
  selections: []
};

Table.propTypes = {
  ...omit(DataTable.propTypes, ['thPadding', 'thHeight', 'thFontSize', 'thBorder', 'thColor', 'thOpacity', 'thLetterSpacing']),
  /** Indicates wether to show a selection column (with checkboxes) */
  showSelection: PropTypes.bool,
  /** Array of row selection boolean states. Should correspond in length to the data prop */
  selections: PropTypes.arrayOf(PropTypes.bool),
  /** Called when row selection changes. Receives the updated selection array as argument. */
  onSelectionChanged: PropTypes.func,
  /** The header that appear above the table's column titles. Can be a Node, or a function with this signature: (selection: Array[boolean])=>React.ReactNode */
  header: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  /** The header that appear above the table when there is selected rows. Can be a Node, or a function with this signature: (selection: Array[boolean])=>React.ReactNode */
  selectionHeader: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  /** The footer that appear below the table. Can be a Node, or a function with this signature: (selection: Array[boolean])=>React.ReactNode*/
  footer: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  /** A function that receives the number of selected rows and returns string to dislpay */
  selectionCounterRenderer: PropTypes.func
};



