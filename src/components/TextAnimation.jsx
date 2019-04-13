import React from 'react';
import chalkAnimation from 'chalk-animation';
import PropTypes from 'prop-types';

const delays = {
  rainbow: 15,
  pulse: 16,
  glitch: 55,
  radar: 50,
  neon: 500,
};

class TextAnimation extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.timeout = null;
    this.animation = chalkAnimation[props.name]('').stop();
    this.state = {
      frame: '',
    };
  }

  componentDidMount() {
    this.start();
  }

  componentWillReceiveProps(nextProps) {
    const { name } = this.props;

    if (name !== nextProps.name) {
      this.animation = chalkAnimation[nextProps.name]('');
      this.animation.stop();
    }
  }

  componentWillUnmount() {
    this.stop();
  }

  start() {
    const { name, speed } = this.props;

    this.update();

    // Using `setTimeout` instead of `setInterval`
    // since the animation can change, thus its delay.
    this.timeout = setTimeout(() => {
      this.start();
    }, delays[name] / speed);
  }

  update() {
    const { children } = this.props;
    const frame = this.animation
      .replace(children)
      .frame()
      .replace(/^\u001B\[(\d)F\u001B\[G\u001B\[2K/, '');

    this.setState({ frame });
  }

  stop() {
    clearTimeout(this.timeout);
    this.timeout = null;
    this.animation.destroy();
  }

  render() {
    return this.state.frame;
  }
}

TextAnimation.defaultProps = {
  name: 'rainbow',
  speed: 1,
};

TextAnimation.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string]).isRequired,
  name: PropTypes.oneOf(['rainbow', 'pulse', 'glitch', 'radar', 'neon']),
  speed: PropTypes.number,
};

export default TextAnimation;
