# Toolkit UI v0.4.3

## 1. Bug Fixes
- [bezel] Added `max-width: 100%` to prevent overflow issues on IE.
- [forms] Removed tick on selected radio button.

===

# Toolkit UI v0.4.2

## 1. Bug Fixes
- [tiles] Only title now underlines on hover.
- [tiles] Specificity reduced with hover style allowing easier customisation

===

# Toolkit UI v0.4.1

## 1. Enhancements
- [select] Reduced horizontal padding from 60px to 40px.

## 1. Bug Fixes
- [select] Border styles are now applied to the label element, this resolves a rendering issue were multiple select buttons  lost their borders.
- [select] Webkit vendor prefixes applied so buttons look and function correctly in older versions of Safari (including iOS8).

===

# Toolkit UI v0.4.0

## 1. Enhancements
- [buttons] Secondary (invert) hover color changed to align with branding.
- [panels] Panels now utilise a white background by default.
- [tiles] Sky Cinema gradient implemented to `c-tile`, replacing Sky Movies.
- [typography] New responsive Typographic scale (and added to components where used).

## 2. Deprecations
- [legacy-typography] We removed the previous typographic variables in favour of a responsive approach. To deprecate gracefully, a toggle variable has been provided in settings/config.
- [panels] Following branding, grey panels are no longer used.

===

# Toolkit UI v0.3.9

## 1. Feature
- [Tooltip] Adds the `c-tooltip` component. Easily apply tooltip bubbles to any trigger.

===


# Toolkit UI v0.3.8

## 1. Feature
- [Accordion] Integrate `c-accordion`, a simple accordion container which can be animated and controlled by a range of different frameworks.

===

# Toolkit UI v0.3.7

## 1. Bug Fixes
- [spinner] Changed the `.c-spinner` transition from targeting all properties to target opacity and visibility as these are the properties that need to be transitioned when the `.is-complete` class is added.

===

# Toolkit UI v0.3.6

## 1. Bug Fixes
- [tile] Corrected `c-tile__media` overflow from `none` to `hidden`.

===

# Toolkit UI v0.3.5

## 1. Bug Fixes
- [select] Hover states moved to `.c-select__btn` rather than the hidden input (`.c-select__input`) to ensure better browser support.
- [select] Focus style uses shaded border rather than matching the hover state to avoid confusion over the actual state.

===

# Toolkit UI v0.3.4

## 1. Enhancements
- [tile] Removed outer border and refactor of variables.
- [hero] Match glass border thickness to `c-tile`.

===

# Toolkit UI v0.3.3

## 1. Bezel
- [bezel] Added the `.c-bezel` component, which provides a glass "bezel" inner border to the container of a media element.

===

# Toolkit UI v0.3.2

## 1. Bug Fixes
- [tile] Changed tile brand modifiers class to `.c-tile__body` rather than `.c-tile__caption` so that it applies to all tiles rather than just the split media tiles
- [select] Fixes gap in bg and border on hover state caused by duplicate `border-radius` properties.

===

# Toolkit UI v0.3.1

## 1. Enhancements
- [select] Added `.is-selected` state to `.c-select__input` to change icon to cross

===

# Toolkit UI v0.3.0

## 1. Enhancements
- [tile] Added `.c-tile--collapsable` modifier to replecate previous default of removing height and `.c-tile__media` on mobile
- [tile] Refactored tile to improve performance
- [tile] Added radial gradient for content tiles and linear for media tiles by default
- [shine] Added `pointer-events: none;` to `.c-shine` to prevent it influencing hover states
- [select] Added hover state
- [defence] Moved defence to `toolkit-ui` from `toolkit-core

## 2. Bug Fixes
- [tile] Branded Tile hover text and background tweaks to be more consistent between focus / active
- [tile] Prevented multiple gradients being applied to single tiles
- [forms] Fixed unwanted outline on inputs on firefox when element in focus
- [forms] Fixed select drop down showing default arrow on firefox and IE
- [forms] Fixed input spacing on IE
- [select] Fixed select not showing tick icon correctly on firefox
- [hero] Fixed IE9 video support
- [typography] Corrected `.c-text-body` selector

## 3. Deprecations
This release contains the following potentially breaking deprecations:

- [tile] Default removal of height constraint and `.c-tile__media` on mobile has been replaced with the `.c-tile--collapsable` modifier
- [form] Removed `.c-form-inline` due to accessibilty concerns and support issues
- [sass-deprecate] We removed the sass-deprecate library in favour of changelogs and improved release notes
