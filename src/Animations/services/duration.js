class Duration {

  props;

  constructor() {
    this.durationMap = {
      micro: 120,
      small: 150,
      medium: 200,
      large: 300,
      debug: 10000
    };

    this.defaults = {
      duration: 300,
      sequenceDuration: 80
    };

    this.validAnimationProps = ['opacity', 'scale', 'height', 'translate', 'width'];
  }

  isMoreThanOneChild() {
    const {children} = this.props;
    return children && children.length > 1;
  }

  isPropsToAnimate() {
    return !!this.validAnimationProps.find(p => !!this.props[p]);
  }

  isAnimation() {
    const {timing, sequence, children} = this.props;
    return timing && sequence && this.isPropsToAnimate() && this.isMoreThanOneChild(children);
  }

  calculateDelay() {
    return (this.props.children.length - 1) * this.defaults.sequenceDuration;
  }

  calculateTiming() {
    const {timing, translate} = this.props;
    return timing && !translate ? this.durationMap[timing] : this.defaults.duration;
  }

  get(props) {
    this.props = props;
    const duration = this.isPropsToAnimate() ? this.calculateTiming() : 0;
    const sequenceDuration = this.isAnimation() ? this.calculateDelay() : 0;
    return duration + sequenceDuration;
  }
}

export default Duration;
