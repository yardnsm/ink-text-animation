# ink-text-animation

[![Build Status](https://travis-ci.org/yardnsm/ink-text-animation.svg?branch=master)](https://travis-ci.org/yardnsm/ink-text-animation)

> A text animation component for [Ink](https://github.com/vadimdemedes/ink/)

![](.github/screenshot.gif)

## Install

```console
$ npm install --save ink-text-animation
```

## Usage

```javascript
import { h, render, Text } from 'ink';
import TextAnimation from 'ink-text-animation';

render(
  <div>
    <TextAnimation>
      <Text>{`Look at me, I'm moving!`}</Text>
    </TextAnimation>
  </div>
);
```

## API

### `<TextAnimation />`

Accepts a string or an Ink component as `children`.

#### Props

##### name

Type: `string`<br />
Default: `rainbow`<br />
Values: `rainbow` `pulse` `glitch` `radar` `neon`

The name of the animation. You can find all the available animations in the
[`chalk-animations` README](https://github.com/bokub/chalk-animation#available-animations).

##### speed

Type: `number`<br />
Default: `1`

The speed of the animation.

---

## License

MIT © [Yarden Sod-Moriah](http://yardnsm.net/)
