import React from 'react';
import { render } from 'ink-testing-library';
import chalk from 'chalk';
import TextAnimation from './TextAnimation';

chalk.enabled = true;
chalk.level = 2;

const text = 'Lorem ipsum';

describe('<TextAnimation />', () => {
  it('should render with default animation', () => {
    const { lastFrame, unmount } = render(<TextAnimation>{text}</TextAnimation>);
    expect(lastFrame()).toMatchSnapshot();
    unmount();
  });

  it('should render with rainbow animation', () => {
    const { lastFrame, unmount } = render(<TextAnimation name="rainbow">{text}</TextAnimation>);
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
    const { lastFrame, unmount } = render(<TextAnimation name="neon">{text}</TextAnimation>);
    expect(lastFrame()).toMatchSnapshot();
    unmount();
  });

  it('should render with karaoke animation', () => {
    const { lastFrame, unmount } = render(<TextAnimation name="karaoke">{text}</TextAnimation>);
    expect(lastFrame()).toMatchSnapshot();
    unmount();
  });

  describe('when using the glitch animation', () => {
    it('should render some random characters', () => {
      const { lastFrame, unmount } = render(<TextAnimation name="glitch">{text}</TextAnimation>);
      expect([...lastFrame()].some(char => text.includes(char))).toBeTruthy();
      unmount();
    });
  });

  describe('when changing the text prop', () => {
    it('should render new text', () => {
      const { lastFrame, unmount, rerender } = render(<TextAnimation>{text}</TextAnimation>);
      expect(lastFrame()).toMatchSnapshot();
      rerender(<TextAnimation>New Text</TextAnimation>);
      expect(lastFrame()).toMatchSnapshot();
      unmount();
    });
  });
});
