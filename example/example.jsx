/* eslint-disable */
import React from 'react';
import { render } from 'ink';
import TextAnimation from '../src';

const Example = () => <TextAnimation>Lorem Ipsum dolor sit amet</TextAnimation>;

const { unmount } = render(<Example />);

setTimeout(() => {
  unmount();
}, 3000);
