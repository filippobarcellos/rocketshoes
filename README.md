<p align="center">
   <img src=".github/logo-chef.png" width="200"/>
</p>

# RocketShoes - Shopping cart Context API

> Shopping cart created to understand more about how Context API works in React.

<br />
<p align="center"><img src=".github/home.gif?raw=true"/></p>
<p align="center"><img src=".github/toggle_theme.gif?raw=true"/></p>

---

# :pushpin: Table of Contents

- [Features](#rocket-features)
- [Installation](#construction_worker-installation)
- [Getting Started](#runner-getting-started)
- [FAQ](#postbox-faq)
- [Found a bug? Missing a specific feature?](#bug-issues)
- [Contributing](#tada-contributing)
- [License](#closed_book-license)

# :rocket: Features

- 👩🏽‍🍳 Add and Remove awesome shoes to your cart.

# :construction_worker: Installation

**You need to install [Node.js](https://nodejs.org/en/download/) and [Yarn](https://yarnpkg.com/) first, then in order to clone the project via HTTPS, run this command:**

`git clone https://github.com/LauraBeatris/foodfy.git`

SSH URLs provide access to a Git repository via SSH, a secure protocol. If you have a SSH key registered in your Github account, clone the project using this command:

`git clone git@github.com:LauraBeatris/foodfy.git`

**Install dependencies**

`yarn install`

Create your environment variables based on the examples of `.env.example`

`cp .env.example .env`

After copying the examples, make sure to fill the variables with new values.

# :runner: Getting Started

**Running with docker-compose**

In order to prepare the database and also run the application, set your environment variables and then execute docker-compose

`docker-compose up`

With this command, the port seted in your environment `PORT` variable will be available to access the application.

**Manually setup**

You may prefer to manually configure the database and the application.

Install [Postgres](https://www.postgresql.org/) to create a database or if you have [Docker](https://www.docker.com/) in your machine, fill the environment values related to database configurations and the run the following commands in order to create a postgres container.

`docker-compose up postgres`

Execute the follow command to create tables, relationships and procedures:

`yarn db:create`

To start, run the seeds provided in [Seeds](https://github.com/LauraBeatris/foodfy/blob/master/src/database/seeds.js) in order to populate the database with an initial data.

`yarn run:seeds`

Run the following command in order to start the application in a development environment:

`yarn dev`

# :postbox: Faq

**Question:** What are the technologies used in this project?

**Answer:** The tecnologies used in this project are [NodeJS](https://nodejs.org/en/) + [Express Framework](http://expressjs.com/en/) to handle the server, [Nunjucks](https://mozilla.github.io/nunjucks/templating.html) to develop amazing views & [SCSS](https://sass-lang.com/documentation/syntax) to handle the styles architecture and a better maintenance than normal CSS.

##

**Question:** How the multi language support is handled by the server?

**Answer:** This application handle multi language support with the help of a library called [i18n-node](https://github.com/mashpie/i18n-node). It has a middleware that gather language settings of visitors and then persist translations from [JSON files](https://github.com/LauraBeatris/foodfy/tree/master/src/locales) related with a specific locale.

The locale is storaged as a cookie named `foodfy:locale` and that can be changed by passing a query string with the value `?lang=pt`

##

**Question:** Are all kind of users able to create and update chefs or recipes?

**Answer:** The application has two kind of users: Visitors and Administrators. As a administrator, you're able to create, update and view all the data related to recipes, chefs and also other users. Visitors can also access the admin platform but they don't have access to the views responsable to create and update data.

Made by [Filippo Barcellos](https://github.com/filippobarcellos) 🚀
