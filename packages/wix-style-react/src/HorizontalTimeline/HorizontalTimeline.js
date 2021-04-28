import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';
import { classes, st } from './HorizontalTimeline.st.css';
import {
  classes as iconsClasses,
  st as iconSt,
} from './HorizontalTimelineIcons.st.css';
import { dataHooks } from './constants';
import StatusCompleteFilled from 'wix-ui-icons-common/StatusCompleteFilled';
import StatusAlertFilled from 'wix-ui-icons-common/StatusAlertFilled';

class HorizontalTimeline extends React.PureComponent {
  static displayName = 'HorizontalTimeline';

  static DefaultIcon = ({ skin = 'dark' }) => (
    <div className={iconSt(iconsClasses.upcomingIcon, { skin })} />
  );

  static ActiveIcon = ({ skin = 'dark' }) => (
    <div className={iconSt(iconsClasses.activeIcon, { skin })} />
  );

  static BoundaryIcon = ({ skin = 'dark' }) => (
    <div className={iconSt(iconsClasses.boundaryIcon, { skin })} />
  );

  static DestructiveIcon = () => (
    <StatusAlertFilled className={iconsClasses.errorIcon} />
  );

  static CompleteIcon = ({ skin = 'dark' }) => {
    const className = iconSt(iconsClasses.completeIcon, { skin });
    const standardSkin = <div className={className} />;
    const darkSkin = <StatusCompleteFilled className={className} />;
    return skin === 'standard' ? standardSkin : darkSkin;
  };

  static defaultProps = {
    skin: 'dark',
    alignLabel: 'center',
    items: [],
  };

  _renderLine = ({ skin, line }) => (
    <div className={st(classes.line, { skin, line })} />
  );

  _renderLabel = ({ label, index }) => {
    const { alignLabel } = this.props;
    return (
      <div className={st(classes.label, { alignLabel })}>
        <Text
          size="tiny"
          ellipsis
          dataHook={`${dataHooks.horizontalTimelineLabel}-${index}`}
        >
          {label}
        </Text>
      </div>
    );
  };

  render() {
    const { items, dataHook, className, skin } = this.props;

    return (
      <div
        className={st(classes.root, { skin }, className)}
        data-hook={dataHook}
        data-skin={skin}
      >
        {items.map(
          (
            {
              label,
              width = 'auto',
              skin: deprecatedSkin,
              icon = <HorizontalTimeline.DefaultIcon />,
              line = 'dashed',
            },
            index,
          ) => {
            const nextItemSkin =
              (items[index + 1] && items[index + 1].skin) || 'light';
            const nextItemLine =
              (items[index + 1] && items[index + 1].line) || 'dashed';
            return (
              <div className={classes.column} key={index} style={{ width }}>
                <div className={st(classes.item)}>
                  <div className={classes.lineIconLine}>
                    {this._renderLine({ skin: deprecatedSkin, line })}
                    <div className={classes.icon}>{icon}</div>
                    {this._renderLine({
                      skin: nextItemSkin,
                      line: nextItemLine,
                    })}
                  </div>
                  {this._renderLabel({ label, index })}
                </div>
              </div>
            );
          },
        )}
      </div>
    );
  }
}

HorizontalTimeline.propTypes = {
  /** Controls the style of the component.*/
  skin: PropTypes.oneOf(['dark', 'standard']),
  /** Aligns the labels of items. */
  alignLabel: PropTypes.oneOf(['center', 'start']),
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,
  /** A css class to be applied to the component's root element */
  className: PropTypes.string,
  /**
   * Timeline items
   *  * `skin` - Controls line and text color (deprecated).
   *  * `line ` - Affects the line type, can be one of: 'filled' | 'dashed'.
   *  * `label` -  Text displayed below the icon.
   *  * `icon ` - An icon representing a timeline item.
   *  * `width ` - The width of the timeline item, can be percentage or pixels.
   */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      /** item's skin (deprecated)*/
      skin: PropTypes.oneOf(['dark', 'light']),
      /** item's line type */
      line: PropTypes.oneOf(['filled', 'dashed']),
      /** item's text */
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
      /** item's icon */
      icon: PropTypes.node,
      /** custom width for item */
      width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  ),
};

export default HorizontalTimeline;
