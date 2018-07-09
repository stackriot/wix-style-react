import s from './Page.scss';
import React from 'react';
import WixComponent from '../BaseComponents/WixComponent';
import PageHeader from '../PageHeader';
import Content from './Content';
import Tail from './Tail';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const SCROLL_TOP_THRESHOLD = 24;

/**
 * A page container which contains a header and scrollable content
 */
class Page extends WixComponent {

  constructor(props) {
    super(props);

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

  _calculateComponentsHeights() {
    this.setState({
      headerHeight: this.pageHeaderRef ? this.pageHeaderRef.offsetHeight : this.state.headerHeight,
      tailHeight: this.pageHeaderTailRef ? this.pageHeaderTailRef.offsetHeight : this.state.tailHeight
    });
  }

  componentWillUnmount() {
    super.componentWillUnmount();

    this._getScrollContainer().removeEventListener('scroll', this._handleScroll);
  }

  _getScrollContainer() {
    return this.scrollableContentRef;
  }

  _shouldBeMinimized(containerScrollTop) {
    return containerScrollTop > SCROLL_TOP_THRESHOLD;
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

  render() {
    const {backgroundImageUrl, children} = this.props;
    const {headerHeight, tailHeight, minimized} = this.state;
    const hasBackgroundImage = !!backgroundImageUrl;
    const {
      PageHeader,
      PageContent,
      PageTail
    } = getChildrenObject(children);

    const pageHeaderStyle = {};
    if (!minimized) {
      pageHeaderStyle.paddingBottom = `${SCROLL_TOP_THRESHOLD}px`;
    }

    return (
      <div className={s.page}>
        <div
          className={classNames(s.pageHeader, {
            [s.minimized]: minimized,
            [s.withBackgroundColor]: minimized || !hasBackgroundImage
          })}
          ref={r => this.pageHeaderRef = r}
          style={pageHeaderStyle}
          >
          {PageHeader && React.cloneElement(PageHeader, {minimized, hasBackgroundImage})}
          {PageTail &&
          <div
            data-hook="page-tail"
            className={classNames(s.tail, {[s.minimized]: minimized})}
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
          {backgroundImageUrl &&
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
          <div className={s.content}>
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
