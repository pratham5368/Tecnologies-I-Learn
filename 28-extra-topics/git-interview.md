## [Developer Leadership] GitHub provides three options when merging a pull request: Create a merge commit, Squash and merge, or Rebase and merge. When might you want to use each?

Using the Squash and merge option is a good way to preserve a tidy main branch history. Atomic commits are often useful when developing a feature or fixing a bug, but are not always necessary when merging the finished work into the main branch. However, one should really only use Squash and merge when the work being pulled forms a truly cohesive whole.

The Rebase and merge option is also good for a tidy commit history, as some maintainers want to preserve atomic commits made while building a feature, but find merge commits noisy or otherwise unsightly. However, after a Rebase and merge, it may be problematic to merge in any further work done in the feature branch. This may not be a problem, as one can always simply start a new feature bug-fix branch if any issues arise in the merged code.

When in doubt, Create a merge commit is always a fine, safe option. Though it creates an additional commit that some may see as unnecessary, the atomic commits and their hashes will be preserved from the branch.

## [Development] When you use a repository’s SSH URL to push a commit to GitHub, you do not have to provide your username and password on each push. How does GitHub know that it’s you?


There are two parts to this:

- Each machine that you use GitHub from will have access to a private key that is connected to your account.
- GitHub uses the commit’s email address, which is set either on a local repository level, or globally across repositories on a given machine.
## 