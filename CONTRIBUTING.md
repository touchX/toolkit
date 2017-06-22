# Contributing to the [Toolkit](https://github.com/sky-uk/toolkit)

We greatly appreciate and encourage people contributing back into the Toolkit.

## Coding Style

Toolkit follows closely to the principles of Sky’s [CSS Style
Guide](https://github.com/sky-uk/css), as well as extending its `stylelint`
configuration.

## Quick Start

Instantly grab a Toolkit-conformant [.scss template](https://git.io/template):

```
curl -L git.io/template -o _<your-file-name>.scss
```

## Creating Issues

Submit issues to the issue tracker on the [appropriate
repository](https://github.com/sky-uk/toolkit#structure) for suggestions,
recommendations, and bugs.

When submitting issues, please make sure you utilise the template provided by
default.

**Please note**: If it’s an issue that’s urgent / you feel you can fix yourself,
please feel free to make some changes and submit a [pull
request](#pull-requests). We’d love to see your contributions.

## Pull Requests

1. Create a new local branch for your work.
2. As early as possible, create a pull request in the [appropriate
   repository](https://github.com/sky-uk/toolkit#structure). Make sure you give
   enough information in the pull request description (utilising the template
   provided by default), and add the label `in progress` with any other
   appropriate label.
3. Once any conflicts have been fixed and you’re ready for your code to be
   reviewed, remove the `in progress` label and add `reviews needed`.
4. Request a code review from two or more developers.
   * You’ll need at least **two** approvals on the pull request before being
     able to merge, and **one of these approvals must be from a [core
     maintainer](https://github.com/sky-uk/toolkit#maintainers)**.
     * **N.B.** For major/breaking changes, you require **two core maintainer
       approvals**.
5. One of the [core maintainers](https://github.com/sky-uk/toolkit#maintainers)
   will merge the changes and apply appropriate versioning to release (see
   below).

## Discussion

For discussion of issues and general project talk, head over to
[#toolkit](http://sky.slack.com/messages/toolkit) on Slack.

---

# [Core Maintainers](https://github.com/sky-uk/toolkit#champions)

## Responsibilities

### Code Reviews

* Each core maintainer should participate in 20% of PRs.
* All PRs must have at least one comment within one working day.

### Steering

* Each core maintainer should attend 50% of steering meetings.

### Contributions

* Every core maintainer will complete 1 ticket per month.
* Work is done in priority order according to the
   [backlog](https://waffle.io/sky-uk/toolkit).

If you feel like you can’t meet these responsibilities, please contact one of
the core maintainers or [Tom Davidson](@tom-davidson).

## Releases

1. Merge fully-approved PR into `master`.
2. Run `git checkout master && git pull`.
3. Include all new functional changes in the appropriate `CHANGELOG.md`(s).
   * Pro tip: use the following command to get a commit summary of changes.

      ```
      $ git log --oneline <last tag>.. -- packages/sky-toolkit-[core|ui]/
      ```
4. Commit and push the `CHANGELOG.md` changes to `master`.
5. Run `lerna publish`.
   * Be sure to read and follow the wizard very carefully, making sure to use
     the correct and appropriate patch/minor/major semver tag(s).
6. Go to [Toolkit/Releases](https://github.com/sky-uk/toolkit/releases), and
   check the tag exists.
   * If the tag exists, congrats! Now create a [**new**
     release](https://github.com/sky-uk/toolkit/releases/new) that utilises that
     tag.
   * If the tag doesn't exist, something went wrong.
7. Run `npm run dist` to generate `toolkit.css` and `toolkit-core.css`.
   * Upload these to s3 `sky.com/assets/[toolkit|toolkit-core]/v[version]` as
     well as overriding `/latest` (see maintainers Slack channel).
   * N.B. If your CSS doesn’t seem to be compiling with the expected changes,
     run `npm run clean` and try again.
8. Communicate changes out on Slack.
