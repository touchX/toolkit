[![npm version](https://badge.fury.io/js/sky-toolkit.svg)](https://badge.fury.io/js/sky-toolkit)  [![Circle CI](https://circleci.com/gh/sky-uk/toolkit/tree/master.svg?style=svg&circle-token=6b7a4f1adf2fb7fad8c0942b8d4d8386afb681f4)](https://circleci.com/gh/sky-uk/toolkit/tree/master) 

# Toolkit 

Sky's CSS Toolkit.

- Visit [#toolkit](http://sky.slack.com/messages/toolkit) on Slack for full documentation (INTERNAL ONLY)
- or visit the [Toolkit Wiki](https://github.com/sky-uk/toolkit/wiki/)

## Goals

- Enable teams across tribes to share common styles.
- Provide a modular approach to handling CSS/Sass components.
- Provide a single source of truth for Polaris brand guidelines.

## Structure

The project consists of 3 repositories: 

- **this repo**: provides the UI and Core layers.
- [toolkit-core](https://github.com/sky-uk/toolkit-core): Global styles and defaults for all projects.
- [toolkit-ui](https://github.com/sky-uk/toolkit-ui): Aesthetic components.

## Installation

```
$ npm install sky-toolkit --save
```

[See the Wiki](https://github.com/sky-uk/toolkit/wiki/) for full documentation and information on how to [implement the Toolkit](https://github.com/sky-uk/toolkit/wiki/Getting-started) in your project.

### Compiled

For rapid prototyping and static sites you can include our latest compiled CSS in the `<head>` of your page.

```
<link rel="stylesheet" href="https://www.sky.com/assets/toolkit/v1.0.0/toolkit.css">
```

**We strongly advise not to use this method in live projects**.
Use `npm` installation to benefit from the Toolkit's modularity and extensibility.


## Requirements

Because of how the Toolkit loads third party dependencies (such as [sass-mq](https://github.com/sass-mq/sass-mq)), your development environment needs:

* [npm](https://www.npmjs.com/) (3.0 or greater)
* [NodeJS](https://nodejs.org/en/) (5.0 or greater)

If you're using [**webpack**](https://webpack.github.io/) you'll also need:

* [sass-loader](https://github.com/jtangelder/sass-loader) (3.1 or greater)

## Versioning

The Toolkit follows [Semantic Versioning](http://semver.org) to help manage the impact of releasing new library versions.

## Champions

| [![Joe Bell](https://avatars.githubusercontent.com/joebell93?s=100)<br /><sub>Joe Bell</sub>](https://github.com/joebell93)<br />[](mailto:joseph.bell@sky.uk) | [![Joe Dinsdale](https://avatars.githubusercontent.com/mrdinsdale?s=100)<br /><sub>Joe Dinsdale</sub>](https://github.com/mrdinsdale)<br />[](mailto:joseph.dinsdale@sky.uk) | [![Aaron Thomas](https://avatars.githubusercontent.com/aaronthomas?s=100)<br /><sub>Aaron Thomas</sub>](https://github.com/aaronthomas)<br />[](mailto:aaron.thomas@sky.uk) | [![Steve Duffin](https://avatars.githubusercontent.com/steveduffin?s=100)<br /><sub>Steve Duffin</sub>](https://github.com/steveduffin)<br />[](mailto:steve.duffin@sky.uk) | [![Luke Barratt](https://avatars.githubusercontent.com/lbarratt?s=100)<br /><sub>Luke Barratt</sub>](https://github.com/lbarratt)<br />[](mailto:luke.barratt@sky.uk) | 
| :---: | :---: | :---: | :---: | :---: | :---: |

| [![Chris Vernon](https://avatars.githubusercontent.com/welikeideas?s=100)<br /><sub>Chris Vernon</sub>](https://github.com/welikeideas)<br />[](mailto:christopher.vernon@sky.uk) | [![Sam Kitson](https://avatars.githubusercontent.com/skitson?s=100)<br /><sub>Sam Kitson</sub>](https://github.com/skitson)<br />[](mailto:sam.kitson@sky.uk) | [![Djenan Kozic](https://avatars.githubusercontent.com/Djenan?s=100)<br /><sub>Djenan Kozic</sub>](https://github.com/Djenan)<br />[](mailto:djenan.kozic@sky.uk) | [![Stefan McCready](https://avatars.githubusercontent.com/StefanMcCready?s=100)<br /><sub>Stefan McCready</sub>](https://github.com/StefanMcCready)<br />[](mailto:stefan.mccready@sky.uk) | 
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



