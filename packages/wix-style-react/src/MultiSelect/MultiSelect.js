import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import InputWithOptions from '../InputWithOptions/InputWithOptions';
import InputWithTags from './InputWithTags';
import last from 'lodash/last';
import difference from 'difference';
import { classes } from './MultiSelect.st.css';

class MultiSelect extends InputWithOptions {
  constructor(props) {
    super(props);

    this.onKeyDown = this.onKeyDown.bind(this);
    this.onPaste = this.onPaste.bind(this);
    this.state = { ...this.state, pasteDetected: false };
  }

  hideOptions() {
    super.hideOptions();
    if (this.props.clearOnBlur) {
      this.clearInput();
    }
  }

  onClickOutside() {
    if (this.state.showOptions) {
      this.hideOptions();
    }
  }

  getUnselectedOptions() {
    const optionIds = this.props.options.map(option => option.id);
    const tagIds = this.props.tags.map(tag => tag.id);
    const unselectedOptionsIds = difference(optionIds, tagIds);
    return this.props.options.filter(option =>
      unselectedOptionsIds.includes(option.id),
    );
  }

  dropdownAdditionalProps() {
    return {
      options: this.getUnselectedOptions().filter(this.props.predicate),
      closeOnSelect: false,
      selectedHighlight: false,
      selectedId: -1,
    };
  }

  closeOnSelect() {
    return false;
  }

  inputAdditionalProps() {
    return {
      readOnly: false,
      disableEditing: true,
      inputElement: (
        <InputWithTags
          onReorder={this.props.onReorder}
          maxNumRows={this.props.maxNumRows}
          mode={this.props.mode}
          hideCustomSuffix={this.isDropdownLayoutVisible()}
          customSuffix={this.props.customSuffix}
        />
      ),
      onKeyDown: this.onKeyDown,
      delimiters: this.props.delimiters,
      onPaste: this.onPaste,
    };
  }

  onPaste() {
    this.setState({ pasteDetected: true });
  }

  _splitByDelimitersAndTrim(value) {
    const delimitersRegexp = new RegExp(this.props.delimiters.join('|'), 'g');
    return value
      .split(delimitersRegexp)
      .map(str => str.trim())
      .filter(str => str);
  }

  _onChange(event) {
    if (this.state.pasteDetected) {
      const value = event.target.value;
      this.setState({ pasteDetected: false }, () => {
        this.submitValue(value);
      });
    } else {
      this.setState({ inputValue: event.target.value });
      this.props.onChange && this.props.onChange(event);
    }
    // If the input value is not empty, should show the options
    if (event.target.value.trim()) {
      this.showOptions();
    }
  }

  _onSelect(option) {
    this.onSelect(option);
  }

  _onManuallyInput(inputValue, event) {
    const { value } = this.props;

    // FIXME: InputWithOptions is not updating it's inputValue state when the `value` prop changes.
    // So using `value` here, covers for that bug. (This is tested)
    // BTW: Previously, `value` was used to trigger onSelect, and `inputValue` was used to trigger onManuallyInput. Which is crazy.
    // So now both of them trigger a submit (onManuallyInput).
    const _value = (value && value.trim()) || (inputValue && inputValue.trim());

    this.submitValue(_value);
    _value && event.preventDefault();

    if (this.closeOnSelect()) {
      this.hideOptions();
    }
  }

  getManualSubmitKeys() {
    return ['Enter', 'Tab'].concat(this.props.delimiters);
  }

  onKeyDown(event) {
    const { tags, value, onRemoveTag } = this.props;

    if (
      tags.length > 0 &&
      (event.key === 'Delete' || event.key === 'Backspace') &&
      value.length === 0
    ) {
      onRemoveTag(last(tags).id);
    }

    if (event.key === 'Escape') {
      this.clearInput();
      super.hideOptions();
    }

    if (this.props.onKeyDown) {
      this.props.onKeyDown(event);
    }
  }

  optionToTag({ id, value, tag, theme }) {
    return tag ? { id, ...tag } : { id, label: value, theme };
  }

  onSelect(option) {
    this.clearInput();

    const { onSelect } = this.props;

    if (onSelect) {
      onSelect(this.props.options.find(o => o.id === option.id));
    }
  }

  submitValue(inputValue) {
    if (!inputValue) {
      return;
    }

    const { onManuallyInput } = this.props;
    const values = this._splitByDelimitersAndTrim(inputValue);
    onManuallyInput && values.length && onManuallyInput(values);

    this.clearInput();
  }

  clearInput() {
    this.input.clear();
    if (this.props.onChange) {
      this.props.onChange({ target: { value: '' } });
    }
  }

  static autoSizeInput = ({ className, 'data-ref': dataRef, ...rest }) => {
    const inputClassName = classNames(className, classes.autoSizeInput);
    return <input {...rest} ref={dataRef} className={inputClassName} />;
  };

  static autoSizeInputWithRef = () =>
    React.forwardRef((props, ref) =>
      (({ className, ref, ...rest }) => {
        const inputClassName = classNames(className, classes.autoSizeInput);
        return <input {...rest} ref={ref} className={inputClassName} />;
      })({ ...props, ref }),
    );
}

MultiSelect.displayName = 'MultiSelect';

MultiSelect.propTypes = {
  /** Closes list once list item is selected */
  closeOnSelect: PropTypes.bool,

  /** Callback predicate for the filtering options function */
  predicate: PropTypes.func,

  /** Optional list of strings that are selected suggestions. */
  tags: PropTypes.array,

  /** Max number of visible lines */
  maxNumRows: PropTypes.number,

  /** Delimiters that will trigger a Submit action (call to onTagsAdded). By default it is [,] but also enter and tab keys work. */
  delimiters: PropTypes.array,

  /** Passing 'select' will render a readOnly input with menuArrow suffix **/
  mode: PropTypes.string,

  /** The status of the Multiselect */
  status: PropTypes.oneOf(['loading', 'warning', 'error']),

  /** Text to be shown in the status icon tooltip */
  statusMessage: PropTypes.string,

  /** When this callback function is set, tags can be reordered. The expected callback signature is `onReorder({addedIndex: number, removedIndex: number}) => void` **/
  onReorder: PropTypes.func,

  /** A callback which is called when the user enters something in the input and then confirms the input with some action like Enter key or Tab. */
  onManuallyInput: PropTypes.func,

  /** A callback which is called when options dropdown is shown */
  onOptionsShow: PropTypes.func,

  /** A callback which is called when options dropdown is hidden */
  onOptionsHide: PropTypes.func,

  /** A callback which is called when the user selects an option from the list. `onSelect(option: Option): void` - Option is the original option from the provided options prop. */
  onSelect: PropTypes.func,

  /** Allows adding your own custom Input component instead of the one that is used by default internally. */
  customInput: PropTypes.elementType
    ? PropTypes.oneOfType([PropTypes.func, PropTypes.elementType])
    : PropTypes.oneOfType([PropTypes.func]),

  /** A node to display as input suffix when the dropdown is closed */
  customSuffix: PropTypes.node,

  /** When set to true this component is disabled */
  disabled: PropTypes.bool,

  /** When set to false, the input will not be cleared on blur */
  clearOnBlur: PropTypes.bool,

  /** A callback function to be called when a tag should be removed. The expected callback signature is `onRemoveTag(tagId: number | string) => void.` */
  onRemoveTag: PropTypes.func,
};

MultiSelect.defaultProps = {
  ...InputWithOptions.defaultProps,
  predicate: () => true,
  tags: [],
  delimiters: [','],
  clearOnBlur: true,
  customInput: MultiSelect.autoSizeInputWithRef(),
};

export default MultiSelect;
