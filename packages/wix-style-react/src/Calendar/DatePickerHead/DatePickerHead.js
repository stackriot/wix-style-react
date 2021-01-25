import React from 'react';
import PropTypes from 'prop-types';

import ChevronLeftLarge from 'wix-ui-icons-common/ChevronLeftLarge';
import ChevronRightLarge from 'wix-ui-icons-common/ChevronRightLarge';

import YearDropdown from './YearDropdown';
import MonthDropdown from './MonthDropdown';
import { st, classes } from './DatePickerHead.st.css';
import Text from '../../Text';

const getMonthName = (months, month) => months[month] || months[0];

const DatePickerHead = ({
  className,
  date,
  localeUtils,
  onChange,
  onLeftArrowClick,
  onRightArrowClick,
  showMonthDropdown,
  showYearDropdown,
  leftArrowAriaLabel,
  leftArrowAriaLabelledBy,
  rightArrowAriaLabel,
  rightArrowAriaLabelledBy,
  monthDropdownAriaLabel,
  monthDropdownAriaLabelledBy,
  yearDropdownAriaLabel,
  yearDropdownAriaLabelledBy,
}) => {
  return (
    <div data-hook="datepicker-head" className={st(classes.root, className)}>
      <div
        className={st(classes.arrow, classes.arrowLeft)}
        data-hook="datepicker-left-arrow"
        onClick={onLeftArrowClick}
        role="button"
        aria-label={leftArrowAriaLabel}
        aria-labelledby={leftArrowAriaLabelledBy}
      >
        <ChevronLeftLarge className={classes.arrowIcon} />
      </div>
      <div
        className={st(classes.arrow, classes.arrowRight)}
        data-hook="datepicker-right-arrow"
        onClick={onRightArrowClick}
        role="button"
        aria-label={rightArrowAriaLabel}
        aria-labelledby={rightArrowAriaLabelledBy}
      >
        <ChevronRightLarge className={classes.arrowIcon} />
      </div>
      <div className={st(classes.yearAndMonthWrapper)} role="alert">
        {showMonthDropdown ? (
          <MonthDropdown
            className={classes.monthDropdown}
            date={date}
            onChange={onChange}
            months={localeUtils.getMonths()}
            ariaLabel={monthDropdownAriaLabel}
            ariaLabelledBy={monthDropdownAriaLabelledBy}
          />
        ) : (
          <Text
            className={classes.caption}
            weight="normal"
            dataHook={'datepicker-month-caption'}
          >
            {getMonthName(localeUtils.getMonths(), date.getMonth())}
          </Text>
        )}

        {showYearDropdown ? (
          <YearDropdown
            className={classes.yearDropdown}
            date={date}
            onChange={onChange}
            ariaLabel={yearDropdownAriaLabel}
            ariaLabelledBy={yearDropdownAriaLabelledBy}
          />
        ) : (
          <Text
            className={classes.caption}
            weight="normal"
            dataHook={'datepicker-year-caption'}
          >
            {date.getFullYear()}
          </Text>
        )}
      </div>
    </div>
  );
};

DatePickerHead.propTypes = {
  date: PropTypes.object.isRequired,
  localeUtils: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onLeftArrowClick: PropTypes.func.isRequired,
  onRightArrowClick: PropTypes.func.isRequired,
  showMonthDropdown: PropTypes.bool,
  showYearDropdown: PropTypes.bool,
  leftArrowAriaLabel: PropTypes.string,
  leftArrowAriaLabelledBy: PropTypes.string,
  rightArrowAriaLabel: PropTypes.string,
  rightArrowAriaLabelledBy: PropTypes.string,
  monthDropdownAriaLabel: PropTypes.string,
  monthDropdownAriaLabelledBy: PropTypes.string,
  yearDropdownAriaLabel: PropTypes.string,
  yearDropdownAriaLabelledBy: PropTypes.string,
};

export default DatePickerHead;
