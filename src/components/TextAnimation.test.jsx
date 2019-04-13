import React from 'react';
import { render } from 'ink-testing-library';
import TextAnimation from './TextAnimation';

const text = 'Lorem ipsum';

describe('<TextAnimation />', () => {
  it('should render with rainbow animation', () => {
    const { lastFrame, unmount } = render(<TextAnimation>{text}</TextAnimation>);
    expect(lastFrame()).toMatchSnapshot();
    unmount();
  });

  it('should render with pulse animation', () => {
    const { lastFrame, unmount } = render(<TextAnimation name="pulse">{text}</TextAnimation>);
    expect(lastFrame()).toMatchSnapshot();
    unmount();
  });

  it('should render with radar animation', () => {
    const { lastFrame, unmount } = render(<TextAnimation name="radar">{text}</TextAnimation>);
    expect(lastFrame()).toMatchSnapshot();
    unmount();
  });

  it('should render with neon animation', () => {
    const { lastFrame, unmount } = render(<TextAnimation name="radar">{text}</TextAnimation>);
    expect(lastFrame()).toMatchSnapshot();
    unmount();
  });
});
