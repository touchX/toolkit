[![npm version](https://badge.fury.io/js/sky-toolkit.svg)](https://badge.fury.io/js/sky-toolkit)  [![Circle CI](https://circleci.com/gh/sky-uk/toolkit/tree/master.svg?style=svg&circle-token=6b7a4f1adf2fb7fad8c0942b8d4d8386afb681f4)](https://circleci.com/gh/sky-uk/toolkit/tree/master) 

# Toolkit 

Sky's CSS Toolkit.

- [See the Wiki](https://github.com/sky-uk/toolkit/wiki/) for full documenation.
- [See the Style Guide](http://sky-uk.github.io/toolkit/) to view currently available Toolkit components.

**Note**: The Toolkit is still in active development and not yet 100% stable. This means breaking updates may occur, minor issues and quirks may be present.

## Goals

- Enable teams across tribes to share common styles.
- Provide a modular approach to handling CSS/Sass components.
- Provide example use cases with a generated style guide.

## Structure

The project consists of 3 repositories: 

- **this repo**: consumes the UI and Core layers and serves static pages.
- [toolkit-core](https://github.com/sky-uk/toolkit-core): Global styles and defaults for all projects.
- [toolkit-ui](https://github.com/sky-uk/toolkit-ui): Aesthetic components following Polaris brand guidelines.

## Installation
```
$ npm install sky-toolkit --save
```

[See the Wiki](https://github.com/sky-uk/toolkit/wiki/) for full documenation and information on how to [implement the Toolkit](https://github.com/sky-uk/toolkit/wiki/Getting-started) in your project.

## Requirements

Because of how the Toolkit loads third party dependencies such as `sass-mq`, `npm` `>3.0.0` is required (included in `node` `>v5.0.0`).

If you're using `webpack` and `sass-loader`, you will need `sass-loader` >3.1.0.

## Versioning

The Toolkit follows [Semantic Versioning](http://semver.org) to help manage the impact of releasing new library versions.

## Champions

| [![Joe Bell](https://avatars.githubusercontent.com/joebell93?s=100)<br /><sub>Joe Bell</sub>](https://github.com/joebell93)<br />[📧](mailto:joseph.bell@sky.uk) | [![Joe Dinsdale](https://avatars.githubusercontent.com/mrdinsdale?s=100)<br /><sub>Joe Dinsdale</sub>](https://github.com/mrdinsdale)<br />[📧](mailto:joseph.dinsdale@sky.uk) | [![Aaron Thomas](https://avatars.githubusercontent.com/aaronthomas?s=100)<br /><sub>Aaron Thomas</sub>](https://github.com/aaronthomas)<br />[📧](mailto:aaron.thomas@sky.uk) | [![Steve Duffin](https://avatars.githubusercontent.com/steveduffin?s=100)<br /><sub>Steve Duffin</sub>](https://github.com/skitson)<br />[📧](mailto:steve.duffin@sky.uk) | [![Luke Barratt](https://avatars.githubusercontent.com/lbarratt?s=100)<br /><sub>Luke Barratt</sub>](https://github.com/lbarratt)<br />[📧](mailto:luke.barratt@sky.uk) | [![Stefan McCready](https://avatars.githubusercontent.com/StefanMcCready?s=100)<br /><sub>Stefan McCready</sub>](https://github.com/StefanMcCready)<br />[📧](mailto:stefan.mccready@sky.uk) |
| :---: | :---: | :---: | :---: | :---: | :---: |

| [![Chris Vernon](https://avatars.githubusercontent.com/welikeideas?s=100)<br /><sub>Chris Vernon</sub>](https://github.com/welikeideas)<br />[📧](mailto:christopher.vernon@sky.uk) | [![Sam Kitson](https://avatars.githubusercontent.com/skitson?s=100)<br /><sub>Sam Kitson</sub>](https://github.com/skitson)<br />[📧](mailto:sam.kitson@sky.uk) | [![Djenan Kozic](https://avatars.githubusercontent.com/Djenan?s=100)<br /><sub>Djenan Kozic</sub>](https://github.com/Djenan)<br />[📧](mailto:jjenan.kozic@sky.uk) | 
| :---: | :---: | :---: | :---: | :---: | :---: |

## Contributing

We appreciate **any** contribution to the Toolkit, please check out [CONTRIBUTING.md](CONTRIBUTING.md).

We keep a list of features and bugs [in the issue tracker](https://github.com/sky-uk/toolkit/issues).

**Special thanks to the following contributors:**

- [Harry Roberts](https://github.com/csswizardry) - [@csswizardry](https://twitter.com/csswizardry)
- [Callum Barratt](https://github.com/cbarratt) - callum.barratt@sky.uk
- [Richard McIntyre](https://github.com/mackstar) - richard.mcintyre@sky.uk
- [Ross Warren](https://github.com/rosswarren) - ross.warren@sky.uk
- [Steven Bapaga](https://github.com/romidane) - steven.bapaga@sky.uk



