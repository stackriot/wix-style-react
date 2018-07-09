import s from './Page.scss';
import React from 'react';
import WixComponent from '../BaseComponents/WixComponent';
import PageHeader from '../PageHeader';
import Content from './Content';
import Tail from './Tail';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const SCROLL_TOP_THRESHOLD = 24;
const SHORT_SCROLL_TOP_THRESHOLD = 3;

/**
 * A page container which contains a header and scrollable content
 */
class Page extends WixComponent {
  constructor() {
    super();

    this._setContainerScrollTopThreshold(false);
    this._handleScroll = this._handleScroll.bind(this);

    this.state = {
      headerHeight: 0,
      tailHeight: 0,
      minimized: false
    };
  }

  componentDidMount() {
    super.componentDidMount();
    this._getScrollContainer().addEventListener('scroll', this._handleScroll);
    this._calculateComponentsHeights();
  }

  componentDidUpdate() {
    // Do not trigger height calculation if the component is minimized
    if (!this.state.minimized) {
      setTimeout(() => this._calculateComponentsHeights());
    }
  }

  componentWillUnmount() {
    super.componentWillUnmount();
    this._getScrollContainer().removeEventListener('scroll', this._handleScroll);
  }

  _calculateComponentsHeights() {
    const {headerHeight, tailHeight} = this.state;
    const newHeaderHeight = this.pageHeaderRef ? this.pageHeaderRef.offsetHeight : headerHeight;
    const newTailHeight = this.pageHeaderTailRef ? this.pageHeaderTailRef.offsetHeight : tailHeight;

    if (headerHeight !== newHeaderHeight || tailHeight !== newTailHeight) {
      this.setState({
        headerHeight: newHeaderHeight,
        tailHeight: newTailHeight
      });
    }
  }

  _setContainerScrollTopThreshold(shortThreshold) {
    this.containerScrollTopThreshold = shortThreshold ? SHORT_SCROLL_TOP_THRESHOLD : SCROLL_TOP_THRESHOLD;
  }

  _getScrollContainer() {
    return this.scrollableContentRef;
  }

  _shouldBeMinimized(containerScrollTop) {
    return containerScrollTop > this.containerScrollTopThreshold;
  }

  _handleScroll() {
    const scrollContainer = this._getScrollContainer();
    const containerScrollTop = scrollContainer.scrollTop;
    const nextMinimized = this._shouldBeMinimized(containerScrollTop);
    const {minimized} = this.state;

    if (minimized !== nextMinimized) {
      this.setState({
        minimized: nextMinimized
      });
    }
  }

  _safeGetChildren(element) {
    if (!element || !element.props || !element.props.children) {
      return [];
    }

    return element.props.children;
  }

  _calculatePageDimensionsStyle() {
    const {maxWidth, sidePadding} = this.props;
    if (!maxWidth && !sidePadding && sidePadding !== 0) {
      return null;
    }

    const styles = {};
    if (maxWidth) {
      styles.maxWidth = `${maxWidth}px`;
    }

    if (sidePadding || sidePadding === 0) {
      styles.paddingLeft = `${sidePadding}px`;
      styles.paddingRight = `${sidePadding}px`;
    }

    return styles;
  }

  render() {
    const {backgroundImageUrl, gradientClassName, children} = this.props;
    const {headerHeight, tailHeight, minimized} = this.state;
    const hasBackgroundImage = !!backgroundImageUrl;
    const hasGradientClassName = !!gradientClassName;
    const {
      PageHeader,
      PageContent,
      PageTail
    } = getChildrenObject(children);

    const pageDimensionsStyle = this._calculatePageDimensionsStyle();
    this._setContainerScrollTopThreshold(PageTail && hasGradientClassName);

    return (
      <div className={s.page}>
        <div
          className={classNames(s.pageHeaderContainer, {
            [s.minimized]: minimized,
            [s.withBackgroundColor]: minimized || (!hasBackgroundImage && !hasGradientClassName),
            [s.withoutBottomPadding]: PageTail && minimized
          })}
          ref={r => this.pageHeaderRef = r}
          >
          {
            PageHeader &&
              <div className={s.pageHeader} style={pageDimensionsStyle}>
                {React.cloneElement(
                  PageHeader, {
                    minimized,
                    hasBackgroundImage
                  })}
              </div>
          }
          {
            PageTail &&
              <div
                data-hook="page-tail"
                className={classNames(s.tail, {[s.minimized]: minimized})}
                style={pageDimensionsStyle}
                ref={r => this.pageHeaderTailRef = r}
                >
                {PageTail}
              </div>
          }
        </div>
        <div
          className={s.scrollableContent} ref={r => this.scrollableContentRef = r}
          data-hook="page-scrollable-content"
          >
          <div className={s.contentPlaceholder} style={{height: `${headerHeight}px`}}/>
          {
            hasBackgroundImage &&
              <div
                className={s.imageBackground}
                style={{
                  height: `${headerHeight + (PageTail ? -tailHeight : 39)}px`,
                  backgroundImage: `url(${backgroundImageUrl})`
                }}
                data-hook="page-background-image"
                >
                <div className={s.imageBackgroundOverlay}/>
              </div>
          }
          {
            hasGradientClassName && !hasBackgroundImage &&
              <div
                data-hook="page-gradient-class-name"
                className={`${s.gradientBackground} ${gradientClassName}`}
                style={{height: `${headerHeight + (PageTail ? -SCROLL_TOP_THRESHOLD : 39)}px`}}
                />
          }
          <div className={s.content} style={pageDimensionsStyle}>
            {this._safeGetChildren(PageContent)}
          </div>
        </div>
      </div>
    );
  }
}

Page.displayName = 'Page';
Page.Header = PageHeader;
Page.Content = Content;
Page.Tail = Tail;

Page.propTypes = {
  /** Background Url */
  backgroundImageUrl: PropTypes.string,
  /** Max width of the content */
  maxWidth: PropTypes.number,
  /** Max width of the content */
  sidePadding: PropTypes.number,
  /** Header background color class name, allows to add a gradient to the header */
  gradientClassName: PropTypes.string,
  children: PropTypes.arrayOf((children, key) => {
    const childrenObj = getChildrenObject(children);

    if (!childrenObj.PageHeader) {
      return new Error(`Page: Invalid Prop children, must contain Page.Header`);
    }

    if (!childrenObj.PageContent) {
      return new Error(`Page: Invalid Prop children, must contain Page.Content`);
    }

    if (
      children[key].type !== Page.Header &&
      children[key].type !== Page.Content &&
      children[key].type !== Page.Tail
    ) {
      return new Error(`Page: Invalid Prop children, unknown child ${children[key].type}`);
    }
  }).isRequired
};

function getChildrenObject(children) {
  return React.Children.toArray(children).reduce((acc, child) => {
    switch (child.type) {
      case Page.Header : {
        acc.PageHeader = child;
        break;
      }
      case Page.Content : {
        acc.PageContent = child;
        break;
      }
      case Page.Tail : {
        acc.PageTail = child;
        break;
      }
      default : {
        break;
      }
    }
    return acc;
  }, {});
}

export default Page;
