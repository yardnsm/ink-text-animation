import { h, renderToString, Component } from 'ink';
import chalkAnimation from 'chalk-animation';
import PropTypes from 'prop-types';

const delays = {
  rainbow: 15,
  pulse: 16,
  glitch: 55,
  radar: 50,
  neon: 500,
};

class TextAnimation extends Component {
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
    const { name } = nextProps;

    if (name !== this.props.name) {
      this.animation = chalkAnimation[name]('').stop();
    }
  }

  componentWillUnmount() {
    this.stop();
  }

  start() {
    const { name, speed } = this.props;

    this.update();

    // Using `setTimeout` instead of `setInterval` since the animation can change, thus its delay.
    this.timeout = setTimeout(() => {
      this.start();
    }, delays[name] / speed);
  }

  update() {
    const text = renderToString((
      <span>{this.props.children}</span>
    ));

    // There's probably some clashing between `chalk-animation` and Ink's rendering mechanism
    // (which uses `log-update`). The solution is to remove the ANSI escape sequence at the
    // start of the frame that we're getting from `chalk-animation` that tells the terminal to
    // clear the lines.
    const frame = this.animation.replace(text)
      .frame()
      .replace(/^\u001B\[(\d)F\u001B\[G\u001B\[2K/, ''); // eslint-disable-line no-control-regex

    this.setState({
      frame,
    });
  }

  stop() {
    clearTimeout(this.timeout);

    this.timeout = null;
  }

  render() {
    return (<span>{this.state.frame}</span>);
  }
}

TextAnimation.defaultProps = {
  name: 'rainbow',
  speed: 1,
};

TextAnimation.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  name: PropTypes.oneOf([
    'rainbow',
    'pulse',
    'glitch',
    'radar',
    'neon',
  ]),
  speed: PropTypes.number,
};

export default TextAnimation;
