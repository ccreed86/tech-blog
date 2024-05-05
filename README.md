# Tech-Blog

## Description

A CMS-style blog site where developers can publish their blog posts and comment on other developers’ posts as well.

## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
- [Features](#features)
- [Contribute](#how-to-contribute)
- [Test](#tests)

## Installation

npm install inquirer
https://www.npmjs.com/package/inquirer

npm install express
https://www.npmjs.com/package/express

npm install pg
https://www.npmjs.com/package/pg

npm install connect-session-sequelize
https://www.npmjs.com/package/connect-session-sequelize

npm install bcrypt
https://www.npmjs.com/package/bcrypt

npm install dotenv
https://www.npmjs.com/package/dotenv

npm install sequelize
https://www.npmjs.com/package/sequelize

npm install express-handlebars
https://www.npmjs.com/package/express-handlebars

## Usage

## Credits

## License

![MIT License](https://img.shields.io/badge/License-MIT-purple)

MIT License

Copyright (c) 2024 Clifton

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Badges

![MIT License](https://img.shields.io/badge/License-MIT-purple)

![NPM INQUIRER](https://img.shields.io/badge/NPM-INQUIRER-darkblue)

![NPM EXPRESS](https://img.shields.io/badge/NPM-EXPRESS-darkblue)

![NPM PG](https://img.shields.io/badge/NPM-PG-darkblue)

![NPM CONNECT SESSION SEQULIZE](https://img.shields.io/badge/NPM-CONNECT_SESSION_SEQULIZE-darkblue)

![NPM BYCRYPT](https://img.shields.io/badge/NPM-BYCRYPT-darkblue)

![NPM DOTENV](https://img.shields.io/badge/NPM-DOTENV-darkblue)

![NPM SEQUELIZE](https://img.shields.io/badge/NPM-SEQUELIZE-darkblue)

![NPM EXPRESS HANDLEBARS](https://img.shields.io/badge/NPM-EXPRESS_HANDLEBARS-darkblue)

![GitHub](https://img.shields.io/badge/GitHub-black)

(https://shields.io/)

## Features

## How to Contribute

You can contribute via the following GitHub link.

https://github.com/ccreed86/note-taker

Clone the repo and request a merg via push of your contributions. If you have further questions please email me at 

cliftionreed1986@gmail.com


## Tests

## Acceptance Criteria

GIVEN a CMS-style blog site

WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in

WHEN I click on the homepage option
THEN I am taken to the homepage

WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in

WHEN I choose to sign up
THEN I am prompted to create a username and password

WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site

WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password

WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out

WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created

WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment

WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created

WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post

WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post

WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post

WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard

WHEN I click on the logout option in the navigation
THEN I am signed out of the site

WHEN I am idle on the site for more than a set time
THEN I am able to view posts and comments but I am prompted to log in again before I can add, update, or delete posts