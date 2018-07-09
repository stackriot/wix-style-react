import css from './../Animator.scss';
import toPairs from 'lodash.topairs';

class CssClass {

  constructor() {
    this.childCssProps = ['opacity', 'scale', 'timing'];
    this.parentCssProps = ['sequenceDelay'];
    this.baseCss = toPairs({child: true});
  }

  filter(list, key) {
    return list.indexOf(key) > -1;
  }

  map(key, value) {
    if (value) {
      return typeof value === 'boolean' ? css[key] : css[value];
    }
  }

  getCssList(props, cssProps) {
    return toPairs(props)
      .filter(([key]) => this.filter(cssProps, key));
  }

  getChild(props) {
    return this.getCssList(props, this.childCssProps)
      .concat(this.baseCss)
      .map(([key, value]) => this.map(key, value))
      .join(' ');
  }

  getChildTranslate(props) {
    const {translate} = props;
    const {to = 'TOP', size = 100} = translate;
    const cssList = translate ? [css.translate, css[`translate-${to.toLowerCase()}`], css[`translate-${size}`]] : [];
    return cssList.join(' ');
  }

  getChildSequence(props) {
    const {index, sequenceDelay} = props;
    return sequenceDelay ? css[`childSequenceDelay-${index}`] : '';
  }

  getParent(props) {
    return this.getCssList(props, this.parentCssProps)
      .map(([key, value]) => this.map(key, value))
      .join(' ');
  }

}

export default CssClass;
