import { h, build } from 'ink';
import renderToString from 'ink/lib/render-to-string';
import chalkAnimation from 'chalk-animation';
import TextAnimation from './TextAnimation';

const getAnimationFrame = (name, i) => {
  const animation = chalkAnimation[name]('This is a text').stop();
  animation.f = i;

  return animation.frame();
};

const getComponentFrames = (props, numberOfFrames = 50) => {
  let tree;
  let component;

  const frames = [];

  const setRef = (ref) => {
    component = ref;
  };

  for (let i = 0; i < numberOfFrames; i += 1) {
    tree = build(
      (<TextAnimation ref={setRef} {...props}>This is a text</TextAnimation>),
      tree,
    );

    frames.push(renderToString(tree));
    component.update();
  }

  // Make sure the component will unmount
  tree = build(null, tree);

  return frames;
};

describe('<TextAnimation />', () => {
  it('should render', () => {
    getComponentFrames().forEach((frame, i) => {
      expect(getAnimationFrame('rainbow', i)).toContain(frame);
    });
  });

  it('should allow changing the animation', () => {
    getComponentFrames({ name: 'pulse' }).forEach((frame, i) => {
      expect(getAnimationFrame('pulse', i)).toContain(frame);
    });
  });
});
