---
id: git-overview
title: Git Overview
---

Git is a versioning control software run at your local command line. Github is where code is stored and shared online and where you upload your repositories.

Git is:

- a distributed version control system or DVSC
- free and open source
- designed to handle everything from small to very large projects with speed and efficiency
- easy to learn and has a tiny footprint with lightning fast performance

Git features cheap local branching, convenient staging areas, and multiple workflows.

As we begin to discuss Git (and what makes it special) it would be helpful if you could forget everything you know about other version control systems (VCSs) for just a moment. Git stores and thinks about information very differently than other VCSs.

We will learn more about how Git stores your code as we go through this class, but the first thing you will need to understand is how Git works with your content.

Snapshots, not Deltas

One of the first ideas you will need understand is that Git does not store your information as series of changes. Instead Git takes a snapshot of your repository at a given point in time. This snapshot is called a commit.

Optimized for Local Operations

Git is optimized for local operation. When you clone a copy of a repository to your local machine, you receive a copy of the entire repository and its history. This means you can work on the plane, on the train, or anywhere else your adventures find you

Branches are Lightweight and Cheap

Branches are an essential concept in Git.

When you create a new branch in Git, you are actually just creating a pointer that corresponds to the most recent commit in a line of work. Git keeps the commits for each branch separate until you explicitly tell it to merge those commits into the main line of work.

Git is Explicit

Which brings us to our final point for now; Git is very explicit. It does not do anything until you tell it to. No auto-saves or auto-syncing with the remote, Git waits for you to tell it when to take a snapshot and when to send that snapshot to the remote.

## Github Enterprise

### What is GitHub Enterprise?

GitHub Enterprise is a collaboration platform built on top of a distributed version control system called Git. GitHub Enterprise is focused on developers, the people who code and create software. Our focus is also the people who partner with and employ developers, who are encouraging them to build amazing things. GitHub Enterprise is similar to the public GitHub site except that it's an internally-hosted application which means that all the data stays within our internal UHG network.

We do all we can to help unlock the creativity of developers and to foster a community of developers that can come together—as individuals and in teams—to create the future of software and make a difference in the world.

GitHub Enterprise concentrates on three things:

- Building a technology platform that is like no other, on which developers can create, share and grow the best code possible
- Nurturing a community for developers; a safe and collaborative place that facilitates sharing, amplifies creativity, and supports the principles of open source
- Providing access, opening up a community of opportunity, where new developers can be born and where experienced developers can hone their skills and expand their knowledge

In addition to being a place to host and share your Git projects, GitHub Enterprise provides a number of features to help you and your team collaborate more effectively. These features include:

- Issues
- Pull Requests
- Projects
- Organizations and Teams

## Repositories

Creating a New Repository

1. Hit the plus sign in Git and then click the "new Repository" button
1. Name the repo, select public or private, depending on how secure you want your repository, and click "initialize this repo with a readme" and click the "Create" button.

## Exploring a GitHub Enterprise Repository

A repository is the most basic element of GitHub Enterprise. It is easiest to imagine as a project's folder. However, unlike an ordinary folder on your laptop, a GitHub Enterprise repository offers simple yet powerful tools for collaborating with others.

A repository contains all of the project files (including documentation), and stores each file's revision history. Whether you are just curious or you are a major contributor, knowing your way around a repository is essential

User Accounts vs. Organization Accounts

There are two account types in GitHub Enterprise, user accounts and organization accounts. While there are many differences in these account types, one of the more notable differences is how you handle permissions.

User Accounts

When you signed up for GitHub Enterprise, you were automatically given a user account. Permissions for a user account are simple, you add people as collaborators to specific repositories to give them full read-write access to the project.

Organization Accounts

Organization accounts provide more granular control over repository permissions. In an organization account you create teams of people and then give those teams access to specific repositories. Permissions can be assigned at the team level (e.g, read, write, or admin).

## Repository Navigation

Code

The code view is where you will find the files included in the repository. These files may contain the project code, documentation, and other important files. We also call this view the root of the project. Any changes to these files will be tracked via Git version control.

Issues

Issues are used to track bugs and feature requests. Issues can be assigned to specific team members and are designed to encourage discussion and collaboration.

Pull Requests

A Pull Request represents a change, such as adding, modifying, or deleting files, which the author would like to make to the repository. Pull Requests help you write better software by facilitating code review and showing the status of any automated tests.

Projects

Projects allow you to visualize your work with Kanban style boards. Projects can be created at the repository or organization level.

Wiki

Wikis in GitHub Enterprise can be used to communicate project details, display user documentation, or almost anything your heart desires. And of course, GitHub Enterprise helps you keep track of the edits to your Wiki

Pulse

Pulse is your project's dash board. It contains information on the work that has been completed and the work in progress.

Graphs

Graphs provide a more granular view into the repository activity, including who has contributed, when the work is being done, and who has forked the repository.

README.md

The README.md is a special file that we recommend all repositories contain. GitHub Enterprise looks for this file and helpfully displays it below the repository. The README should explain the project and point readers to helpful information within the project.

CONTRIBUTING.md

The CONTRIBUTING.md is another special file that is used to describe the process for collaborating on the repository. The link to the CONTRIBUTING.md file is shown when a user attempts to create a new issue or pull request.

ISSUE_TEMPLATE.md

The ISSUE_TEMPLATE.md (and its twin the pull request template) are used to generate templated starter text for your project issues. Any time someone opens an issue, the content in the template will be pre-populated in the issue body.

## Issues

Using GitHub Enterprise Issues

In GitHub Enterprise, you will use issues to record and discuss ideas, enhancements, tasks, and bugs. Issues make collaboration easier by:

- Replacing email for project discussions, ensuring everyone on the team has the complete story, both now and in the future.
- Allowing you to cross-link to related issues and pull requests.
- Creating a single, comprehensive record of how and why you made certain decisions.
- Allowing you to easily pull the right people into a conversation with @ mentions and team mentions.

Activity: Creating A GitHub Issue

Follow these steps to create an issue in the class repository:

1. Click the Issues tab.
1. Click New Issue.
1. Type the following in the Subject line: YOUR-USERNAME Workflow
1. In the body of the issue, include the text below:

YOUR-USERNAME will choose an image, add a caption, and add both to a file.

- [ ] Create a branch
- [ ] Edit the file
- [ ] Commit the changes
- [ ] Create a Pull Request
- [ ] Request a Review
- [ ] Make more changes
- [ ] Get an approval
- [ ] Merge the Pull Request

Copy to clipboard

Error

Copied

## Pages

Introduction to GitHub Pages

GitHub Pages enable you to host free, static web pages directly from your GitHub Enterprise repositories. Several of the projects we use in class will use GitHub Pages as the deployment strategy. We will barely scratch the surface in this class, but there are a few things you need to know:

- You can create two types of websites, a user/organization site or a project site. We will be working with project websites.
- For a project site, GitHub Enterprise will only serve the content on a specific branch. Depending on the settings for your repository, GitHub Enterprise can serve your site from a master or gh-pages branch, or a /docs folder on the master branch.
- The rendered sites for our projects will appear at https://github.optum.com/pages/GHE-Training/repo-name.

## Github Flow

Understanding the GitHub flow

In this section, we discuss the collaborative workflow enabled by GitHub.

The Essential GitHub Workflow

The GitHub flow is a lightweight workflow that allows you to experiment with new ideas safely, without fear of compromising a project.

Branching is a key concept you will need to understand. Everything in GitHub lives on a branch. By default, the "blessed" or "canonical" version of your project lives on a branch called master. This branch can actually be named anything, as we will see in a few minutes.

When you are ready to experiment with a new feature or fix an issue, you create a new branch of the project. The branch will look exactly like master at first, but any changes you make will only be reflected in your branch. Such a new branch is often called a "feature" branch.

As you make changes to the files within the project, you will commit your changes to the feature branch.

When you are ready to start a discussion about your changes, you will open a pull request. A pull request doesn't need to be a perfect work of art - it is meant to be a starting point that will be further refined and polished through the efforts of the project team.

When the changes contained in the pull request are approved, the feature branch is merged onto the master branch. In the next section, you will learn how to put this GitHub workflow into practice.

Exploring

Here are some interesting things you can check out later:

guides.github.com/introduction/flow/ - An interactive review of the GitHub Workflow.

## Basic Commands

git init  -- Initialized a new Git Repo

git clone  'github url' --- Clones a Github repo to your local repo

git remote –v --- Displays communication path from the local to GitHub repos

git status  --- Displays the status of modified files to be committed

git add 'filename' --- Prepares a specific file to be committed from your local repo

git add *  --- Prepares all of your files in your local repo to be committed

git commit –m ‘add your message’ --- Commits your file to GitHub with a version message

git push origin 'branch' --- Uploads  and commits file or files to the GitHub repos

git pull

git pull --prune

git config --global fetch.prune

## Basic Branch Commands

git branch --- Lists all branches in current repository

git branch 'branch name' --- Creates a new branch

git checkout 'branch name' --- Checks out branch and allows editing

git merge 'branch name' --- Combines checked out branch back into master branch

git branch --merged - see which branches are safe to delete

git branch -d 'branch-name' - delete local branch

To set pruning the remote tracking branches to be set as your default behavior when you pull, you can use the following configuration option: 

git config --global fetch.prune true

## Basic Log Commands

git log

git log --oneline

git log --oneline --graph

git log --oneline --graph --decorate

git log --oneline --graph --decorate --all

git log --stat

git log --patch

git bisect

git show SHA

git revert (Generally safe since it creates a new commit.)

git commit --amend (Only use on local commits.)

git reset (Only use on local commits.)

git cherry-pick (Only use on local commits.)

git rebase (Only use on local commits.)

git reset HEAD~

git reset 'commit id'

## Basic Tag Commands

remove remote tags - git ls-remote --tags --refs origin | cut -f2 | xargs git push origin --delete

remove local tags - git push --delete origin 'tagname'

## Github Jekyll

Install Ruby

Install Jekyll

Enable Admin Privileges  

Open Terminal  

Run:  

gem install bundle jekyll

jekyll new 'github repository' --force

Example:

jekyll new documentation --force

Add this line to your Jekyll site's Gemfile:

gem "just-the-docs"

And add this line to your Jekyll site's _config.yml:

theme: just-the-docs

And then execute:

$ bundle

To test locally, run:  

bundle exec jekyll serve

Then open a browser and navigate to localhost:4000

## Git Configuration Levels

## Local Git Configuration

In this section, we will prepare your local environment to work with Git.

### Checking Your Git Version

First, let's confirm your Git Installation:

$ git --version

$ git version 2.11.0

Copy to clipboard

Error

Copied

If you do not see a git version listed or this command returns an error, you may need to install Git.

To get the latest version of Git, see Downloading and Installing Git.

Git Configuration Levels

Git allows you to set configuration options at three different levels.

--system

These are system-wide configurations. Saving configurations under --system on your work computer should be avoided in favor of --global and --local. These settings apply to all users on this computer and are usually stored in /etc/gitconfig.

--global

These are the user level configurations. They only apply to your user account and are persisted to ~/.gitconfig.

--local

These are the repository level configurations. They only apply to the specific repository where they are set. Local git configs are found within the git repo under .git/config.

The default value for git config is --local.

## Viewing Your Configurations

If you would like to see which config settings have been added automatically, you can type git config --list. This will automatically read from each of the three config files and list the setting they contain.

$ git config --list

Copy to clipboard

Error

Copied

You can also narrow the list to a specific configuration level by including it before the list option.

$ git config --global --list

Copy to clipboard

Error

Copied

Configuring Your User Name and Email

Git uses the config settings for your user name and email address to generate a unique fingerprint for each of the commits you create. You can't create commits without these settings:

$ git config --global user.name "Last, First"

$ git config --global user.email "you@optum.com"

Copy to clipboard

Error

Copied

Tip: Your user name and email should match the default account set up in Outlook. A good trick is to start an email and then copy and paste your email address. It will look something like Last, First 'you@optum.com'.

## Git Config Privacy for Public Repos

The instructions for this exercise use the --global flag when identifying your user.name and user.emailconfiguration settings. In some cases, you may need to contribute to open source projects on public github. By omitting the --global flag in configuration commands, you can set configurations specific to a particular repo. To obscure your real name and work email, github users often supply their Github handle as user.name and their spam email accounts as user.email.

You can configure the email field for all future commits in a specific repo by running the following command in the directory where the repository is located:

For example:

git config user.email "personal_correspondence@example.com"

Copy to clipboard

Error

Copied

Your name and email address will automatically be stored in the commits you make with Git.

Configuring autocrlf

$ //for Windows users

$ git config --global core.autocrlf true

$ //for Mac or Linux users

$ git config --global core.autocrlf input

Copy to clipboard

Error

Copied

Different systems handle line endings and line breaks differently. If you open a file created on another system and do not have this config option set, git will think you made changes to the file based on the way your system handles this type of file.

Memory Tip: autocrlf stands for auto carriage return line feed.

## Viewing Local History

### Using Git Log

When you clone a repository, you receive the history of all the commits made in that repository. The log command allows us to view that history on our local machine.

Aliases

An alias allows for a shorthand command to represent a long string on the command line.

Example:

Original Command

git log --oneline --graph --decorate --all

Creating the Alias

git config --global alias.lol "log --oneline --graph --decorate --all"

Using the Alias

git lol

### Leveraging Bash Aliases

You can shorten commands like git and checkout or any other commands to save typing.

Adding to ~/.profile

alias g="git"

alias c="git checkout"

alias d="git diff"

alias glg="git log --branches --tags --graph --oneline --decorate --remotes"

Note that those aliases must be put into a startup file. Typically the ~/.profile or ~/.bashrc will work well for defining these aliases automatically whenever your terminal boots up.

Helpful alias links

https://git-scm.com/book/en/v2/Git-Basics-Git-Aliases 

http://haacked.com/archive/2014/07/28/github-flow-aliases/

http://haacked.com/archive/2015/06/29/git-migrate/ 

http://haacked.com/archive/2017/01/04/git-alias-open-url/

## Merge Conflicts

What is a merge conflict?

When you work with a team (and even sometimes when you are working alone) you will occasionally create merge conflicts. At first, merge conflicts can be intimidating, but resolving them is actually quite easy.

In real merge conflicts, it's important to know who to ask in case you aren't sure how to resolve the conflict on your own. Usually it's a good idea to ask the person who made the conflicting changes, or someone who is a code owner on the file.

Local merge conflicts

Merge conflicts are a natural and minor side effect of distributed version control. They only happen under very specific circumstances.

- Changes to the same "hunk" of the same file
- Two different branches
- Changes on both branches happened since the branches have diverged

## Merge Strategies

- Rebase
- Fast Forward
- Recursive
- Octopus

## .gitconfig

[credential]
  helper = wincred

[core]
  autocrlf = input

[user]
  name="Greg Schullo"
  email=greg.schullo@gmail.com

[push]
  default = simple
