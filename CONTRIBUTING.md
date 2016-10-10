# Contributing to the [Toolkit](https://github.com/sky-uk/toolkit)

We greatly appreciate and encourage people contributing back into the Toolkit!

## Creating Issues

Submit issues to the issue tracker on the [appropriate repository](https://github.com/sky-uk/toolkit#structure) for suggestions, recommendations, and bugs.

When submitting issues, please make sure you follow the template provided.

**Please note**: If it's an issue that's urgent / you feel you can fix yourself, please feel free to make some changes and submit a [pull request](#pull-requests). We'd love to see your contributions.

## Pull Requests

0. Create a new local branch for your work.
0. As early as possible, create a pull request in the [appropriate repository](https://github.com/sky-uk/toolkit#structure). Make sure you give enough information in the pull request description (utilising the template provided by default), and add the label `in progress` with any other appropriate label.
0. Once any conflicts have been fixed and you're ready for your code to be reviewed, remove the `in progress` label and add `hunting for squirrels`. 
0. Get a code review by **two** developers. One of these **must** be a [core maintainer of Toolkit](https://github.com/sky-uk/toolkit#maintainers). 
	- You need two :shipit: :shipit: left as comments on the pull request.
0. One of the [core maintainers](https://github.com/sky-uk/toolkit#maintainers) will merge the changes and apply appropriate versioning to release (see below).

## Releases

0. Ensure both `package.json` and `CHANGELOG.md` have been updated appropriately.
0. Once the changes have been pushed into `master`, go to the repo's **Releases** and create a new release titled and tagged `v[VERSION-NUMBER]`.
0. Add details from `CHANGELOG.md` into the release description and publish.
0. Pull down master to your machine (making sure new tags have been pulled down), and run `npm publish` to bump the version on NPM.

**If releasing toolkit-core, also:**

Ensure [`toolkit-ui`](https://github.com/sky-uk/toolkit-ui)'s dependency of toolkit-core is updated, following the same release process as above.

**If releasing toolkit-ui, also:**

Ensure [`toolkit`](https://github.com/sky-uk/toolkit)'s dependency of toolkit-ui is updated, following the same release process as above.

## Discussion

For discussion of issues and general project talk, head over to [#toolkit](http://sky.slack.com/messages/toolkit) on Slack.
