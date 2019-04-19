# Alpine Toolkit

![](http://img.badgesize.io/TimvanScherpenzeel/alpine-toolkit/master/dist/alpine-toolkit.cjs.js.svg?compression=gzip&maxAge=60)
[![npm version](https://badge.fury.io/js/alpine-toolkit.svg)](https://badge.fury.io/js/alpine-toolkit)

A toolkit for creating interactive web experiences.

## Statement

Alpine Toolkit is not a framework but a minimalistic toolkit that has a strong focus on creating progressivily enhanced interactive experiences on a wide range of consumer devices. The goal of the toolkit is to empower the developer to focus on the creative process and less on implementation details, repetitive work and browser specific workarounds. The components in the core of the library are things you will likely need when developing an interactive experience, handle edge-cases (like vendor prefixing, experimental feature support testing and fallbacks) or are things that should inspire the developer to make use of more advanced optimisations that one normally does not have the time to implement and test under short deadlines.

## Browser support

Alpine Toolkit supports the latest two versions of `evergreen` browsers and `Internet Explorer 11`:

- Edge
- Firefox
- Chrome
- Safari
- iOS Safari

Alpine Toolkit does not include any polyfills. It is recommended to use the [polyfill.io](https://polyfill.io/v3/) service in your application.

## Installation

Make sure you have [Node.js](http://nodejs.org/) installed.

```sh
 $ npm install
```

## Development

```sh
$ yarn start

$ yarn lint

$ yarn test

$ yarn build
```

## Licence

My work is released under the [MIT license](https://raw.githubusercontent.com/TimvanScherpenzeel/alpine-toolkit/master/LICENSE).
