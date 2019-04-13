/* eslint-disable */
import React, { Component } from 'react';
import { render } from 'ink';
import TextAnimation from '../src';

// const Example = () => <TextAnimation>Lorem Ipsum dolor sit amet</TextAnimation>;

class Example extends Component {
  componentDidMount() {
    setTimeout(() => {
      process.exit(0); // eslint-disable-line unicorn/no-process-exit
    }, 3000);
  }

  render() {
    return <TextAnimation>Lorem Ipsum dolor sit amet</TextAnimation>;
  }
}

render(<Example />);
