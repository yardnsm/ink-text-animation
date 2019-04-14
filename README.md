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
import React from 'react';
import {render} from 'ink';
import TextAnimation from 'ink-text-animation';

render(<TextAnimation>Look at me, I'm moving!</TextAnimation>);
```

## Example

There is a simple example inside the `example` folder.
To run it on the console you can type:

```console
$ npm run example
```

## API

### `<TextAnimation />`

#### Props

##### children

Type: `string`

The text / sentence that will be displayed.

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
