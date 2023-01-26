<h1 align="center">
  pennrobotics.org
</h1>

<p align="center">
  The base iteration of pennrobotics.org built with HTML, SCSS, and JS, and hosted on Google Cloud Platform
</p>

## 1. Documentation Outline

This documentation is aimed at future members of Penn Robotics looking to maintain and update this project. This document will contain multiple guides aimed at new web developers, along with information about project structure for those with more experience.

## 2. Public Forking and Use

This website is open source, licensed under the MIT License. Feel free to use this code towards other projects and fork this repository, but please give me proper credit by linking back to [Arda Kurama](https://ardakurama.com).

## 3. Web Development Guide

This section of documentation will outline the educational process I underwent while self learning web development.

### The Odin Project

I would recommend beginning with [The Odin Project](https://www.theodinproject.com). The Odin Project houses a series of very approachable and comprehensive lessons on HTML, CSS, JS, and other web development concepts.

Of their Foundations Course, I took:

- Lessons 1-5 of Introduction
- Lessons 1-2 of Prerequisites
- Lessons 1-7 of HTML Foundations
- Lessons 1-4 of CSS Foundations
- Lessons 1-5 of Flexbox
- Lesson 1 of JavaScript Basics

I would also recommend finishing JavaScript Basics and previewing their other courses.

> Also, when I say I “took” these lessons, I didn’t just skim each page and read the headlines. I extensively understood every concept on each page. I also completed all of the assignments, answered all of the knowledge check questions, read all of the additional resources, and completed all of the practice questions. The first Foundations lesson explains this process further.

### SCSS Basics

From there, I learned more about SCSS, a preprocessor for CSS. The majority of styling for this project was done in SCSS.

The major SCSS features I used were:

- Variables
- Nesting
- Partials

This [Sass guide](https://sass-lang.com/guide) further explains these features.

## 4. Quickstart Guide

These various applications and softwares must be installed to properly edit this project.

### GitHub Desktop

This project is stored in GitHub. Install [GitHub Desktop](https://desktop.github.com/) to edit this project.

- You will also need to install [Git](https://git-scm.com/) at some point in this process .
- [This guide](https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/installing-and-authenticating-to-github-desktop/setting-up-github-desktop) may be helpful while installing Github Desktop.

### Visual Studio Code

My default text editor (mentioned at the bottom of the tutorial above) is VS Code. Install [VS Code](https://code.visualstudio.com/).

Once inside VS Code, you will also need the following extensions:

- GitLens — Git supercharged
- HTML CSS Support
- JavaScript (ES6) code snippets
- Live Sass Compiler
- Live Server
- Prettier - Code formatter
- Project Manager

## 5. Website Structure

Here is some information about project file hierarchy, resources used, and hosting information.

### File Hierarchy

This project has 21 files and 10 folders in the parent directory.

#### Files:

- 9 .html
- 5 .js
- 3 .scss partials
- 2 .png images
- 2 .md (README and LICENSE)

#### Folders:

- 9 webpage folders containing:
- 1 media folder
  - numerous .webp images
- 1 .scss file
- 1 .css file
- 1 .css.map file
- 1 folder containing photoswipe imports

### Resources Used

This project utilizes many JavaScript libraries, GitHub repositories, and online resources for more complex features. These are linked below.

#### Other GitHub repositories:

- https://github.com/mattboldt/typed.js JavaScript typing animation
- https://github.com/nolimits4web/swiper JavaScript touch slider
- https://github.com/dimsemenov/PhotoSwipe JavaScript image gallery
- https://github.com/dev-ggaurav/responsive-hamburger-tutorial HTML, CSS, and JavaScript hamburger menu

#### Websites:

- https://fontawesome.com/ Online icon library

### Hosting Information

This website is hosted on Google Cloud Platform (GCP) under the website-specific email pennroboticswebsite@gmail.com. This email is connected to Email, Google Cloud Platform, Google Domains, Google Search Engine, and Font Awesome. Do not use it for non-website related tasks. Ask Mr. Marsh for its password.

- Use Google Cloud Platform to update the website. More information on this below.
- Use Google Domains to edit and view Domain Registration and edit DNS records.
- Use Google Search Engine to manage SEO, view current Google indexing/crawling, and view website analytics.

I followed [this guide](https://cloud.google.com/storage/docs/hosting-static-website) for hosting this project with GCP. If the host breaks or needs updating, re-follow this guide.

## 6. Continuity Plan

The website as I am leaving it will be permanently stored in this GitHub repository. To make updates in the future:

1. Fork this repository
2. Make the edits
3. Upload the edited files to the Google Cloud Platform Bucket. Website updates will not show unless uploaded to the GCP Bucket.

Future members can use any GitHub account to make a project fork, and none of these forked repositories will ever be linked to the project. Make forks as needed, but try to keep everything organized.

As a fallback, if the website ever falls into an unrepairable position, copy the files in this GitHub repository into the GCP Bucket and the website will return to how it was when I left it.

Good luck Penn Robotics! If you ever have a large problem with this project, contact me at ardakurama@gmail.com.
