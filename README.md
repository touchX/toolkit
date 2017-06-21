[![npm version](https://badge.fury.io/js/sky-toolkit.svg)](https://badge.fury.io/js/sky-toolkit)  [![Circle CI](https://circleci.com/gh/sky-uk/toolkit/tree/master.svg?style=svg&circle-token=6b7a4f1adf2fb7fad8c0942b8d4d8386afb681f4)](https://circleci.com/gh/sky-uk/toolkit/tree/master)

# Toolkit

**Sky’s CSS Toolkit**

For full documentation, visit [sky.com/toolkit](http://sky.com/toolkit)

## Contents

1. [Goals](#goals)
2. [Structure](#structure)
3. [Installation](#installation)
4. [Requirements](#requirements)
5. [Usage](#usage)
6. [Contributing](#contributing)
7. [Versioning](#versioning)
8. [History](#history)
9. [Maintainers](#maintainers)

## Goals

* Enable teams across tribes to share common styles.
* Provide a modular approach to handling CSS/Sass components.
* Provide a single source of truth for Polaris brand guidelines.

## Structure

The project consists of 3 packages:

* **sky-toolkit**: provides the UI and Core layers.
  * **sky-toolkit-core**: Global styles and defaults for all projects.
  * **sky-toolkit-ui**: Aesthetic components.

### Libraries

* [toolkit-react](https://github.com/sky-uk/toolkit-react): React.js UI
  components built on Toolkit styles.

## Installation

```
$ npm install sky-toolkit --save
```

:warning: **Note:** your Sass configuration **must** be set to access certain
dependencies or installation will fail. Either:

* include [Eyeglass](https://github.com/sass-eyeglass/eyeglass) in your [build
  tools](https://github.com/sass-eyeglass/eyeglass#building-sass-files-with-eyeglass-support),
  **or**;
* set `node_modules` in your `includedPaths`.

See [sky.com/toolkit](http://sky.com/toolkit) for full individual component
documentation.

### Requirements/Dependencies

Because of how the Toolkit loads third party dependencies (such as
[sass-mq](https://github.com/sass-mq/sass-mq)), your development environment
needs:

* [npm](https://www.npmjs.com/) (3.0 or greater)
* [NodeJS](https://nodejs.org/en/) (5.0 or greater)

If you’re using [**webpack**](https://webpack.github.io/) you’ll also need:

* [sass-loader](https://github.com/jtangelder/sass-loader) (3.1 or greater)

### Supporting IE9+

To support IE9+, you **must** include the following at the top of your
`index.html` / default container view.

```
<!DOCTYPE html>
<!--[if IE 9 ]>               <html lang="en-GB" class="ie9"> <![endif]-->
<!--[if gt IE 9 | !IE ]><!--> <html lang="en-GB"> <!--<![endif]—>
<head>
  ...
```

### Compiled/Hosted Version

For rapid prototyping and static sites you can include our latest compiled CSS
in the `<head>` of your page.

```
<link rel="stylesheet" href="https://www.sky.com/assets/toolkit/v2.0.0/toolkit.css">
```

**We strongly advise not to use this method in live projects**. Use `npm`
installation to benefit from the Toolkit’s modularity and extensibility.

## Usage

Once installed, include `sky-toolkit-core` at the top of your global `.scss`
file.

This is required by all `sky-toolkit-ui` components.

```css
@import "sky-toolkit-core/all";
```

Following that, you can import individual toolkit-ui components and your own
project-specific styles, for example:

```css
@import "sky-toolkit-core/all";

@import "sky-toolkit-ui/components/typography";
@import "sky-toolkit-ui/components/tile";
@import "sky-toolkit-ui/components/panel";

@import "your-component-here";
```

There is the option to import all components, however, we strongly recommend
only importing the individual components required in your project.

```css
@import "sky-toolkit-ui/all";
```

## Contributing

We love to have people contributing, but please make sure you **[follow our
guidelines](https://github.com/sky-uk/toolkit/blob/master/CONTRIBUTING.md)**.

### Set-up

To get set up with a working development version of Toolkit, follow the steps
detailed below:

```bash
# Clone the repo to your machine.
git clone git@github.com:sky-uk/toolkit.git
# Jump into your Toolkit folder.
cd toolkit
# Install common dependencies.
npm i
# Toolkit comprises several sub-packages; Lerna links them together for us.
# Learn more at lernajs.io
lerna bootstrap
```

After running these commands, you should have all the relevant code and its
dependencies installed and linked up ready to go…

### Compiling CSS

To compile changes across the packages into a single `build/toolkit.css` file,
run the following command:

```bash
npm run build
```

## Versioning

Toolkit follows [Semantic Versioning](http://semver.org) to help manage the
impact of releasing new library versions.

## History

Before mid-June, 2017, Toolkit was split across two separate repositories:

1. [Toolkit Core](https://github.com/sky-uk/toolkit-core), containing structural
   and architectural styles.
2. [Toolkit UI](https://github.com/sky-uk/toolkit-ui), containing specific,
   styled UI components.

After enough time, this strategy proved too cumbersome: managing the surface
area and coordinating releases became a task in itself, even across only two
repositories. To that end, we folded them into one—this one.

To view a complete history of many of the files, you will need to pass the
`--follow` flag into your `log`.

Without `--follow`:

```
$ git log --oneline packages/sky-toolkit-core/objects/_media.scss

8b6541a [refs #173] Move into packages to merge into Toolkit
```

With `--follow`:

<pre><code>$ git log --oneline <b>--follow</b> packages/sky-toolkit-core/objects/_media.scss

8b6541a [refs #173] Move into packages to merge into Toolkit
3485ad7 [refs #204] Tidy up comments and file titles
b12bfcd [refs #204] Modify spacing of list-inline and media to align with Supercell
b496258 Various typos
ec9dee7 Add more functionality to the media object
feba9a8 Use a clearfix mixin instead of @\extends
7d8ad25 Rename base variables to global
804f36c Revert media object margin to spacing unit
5224fa5 Tidy up existing typographical rules into neater groups</code></pre>

## Maintainers

If you run into any trouble or need support getting to grips with Toolkit,
reach out to one of the maintainers:

| [![Joe Bell](https://avatars.githubusercontent.com/joebell93?s=100)<br /><sub>Joe Bell</sub>](https://github.com/joebell93) | [![Joe Dinsdale](https://avatars.githubusercontent.com/mrdinsdale?s=100)<br /><sub>Joe Dinsdale</sub>](https://github.com/mrdinsdale) | [![Aaron Thomas](https://avatars.githubusercontent.com/aaronthomas?s=100)<br /><sub>Aaron Thomas</sub>](https://github.com/aaronthomas) | [![Luke Barratt](https://avatars.githubusercontent.com/lbarratt?s=100)<br /><sub>Luke Barratt</sub>](https://github.com/lbarratt) | [![Steve Duffin](https://avatars.githubusercontent.com/steveduffin?s=100)<br /><sub>Steve Duffin</sub>](https://github.com/steveduffin) | [![Sam Kitson](https://avatars.githubusercontent.com/skitson?s=100)<br /><sub>Sam Kitson</sub>](https://github.com/skitson) |
| :---: | :---: | :---: | :---: | :---: | :---: |

### Champions

You can also get support from your local tribe champion:

| CF                                                | DC                                             | DE                                            | DS                                             | DT                                                   |
|---------------------------------------------------|------------------------------------------------|-----------------------------------------------|------------------------------------------------|------------------------------------------------------|
| [Josh Nesbitt](https://github.com/joshnesbitt)    | [Chris Vernon](https://github.com/welikeideas) | [Callum Barratt](https://github.com/cbarratt) | [Clare Devine](https://github.com/claredevine) | [Alex Fenton](https://github.com/afenton90)          |
| [Mahesh Jagadeesan](https://github.com/maheshjag) | [Djenan Kozic](https://github.com/djenan)      | [Jag Sispal](https://github.com/jsispal)      | [Greg Pratt](https://github.com/gregorypratt)  | [Stefan McCready](https://github.com/stefanmccready) |
|                                                   |                                                | [John Bower](https://github.com/beclamide)    | [Rory King](https://github.com/geit)           | [Rich Gorman](https://github.com/coderas)            |

**Special thanks to the following contributors:**

* [Harry Roberts](https://github.com/csswizardry)
* [Richard McIntyre](https://github.com/mackstar)
