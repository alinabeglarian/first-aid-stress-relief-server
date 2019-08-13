# :star: :sparkles: FIRST AID STRESS RELIEF :sparkles: :star:

* [CLICK HERE](https://github.com/alinabeglarian/first-aid-stress-relief-client) for the client side repository of this app.
* [CLICK HERE](https://first-aid-stress-relief-db.herokuapp.com/) for the deployed version of the server side.

## Table of contents
* [Technologies used](#technologies-used)
* [Setup](#setup)
* [API](#api)

## Technologies used
* Node.js
* PostgreSQL
* Express
* Sequelize

## Setup

1. git clone
2. npm install
3. npm run dev

Please note that in order to run the server locally run a Postgres container and connect to it using the following command:

`$ docker run -d -p 5432:5432 -e POSTGRES_PASSWORD=secret postgres`

Connect to your database with:
- Mac: Postico
- Linux: DBeaver

Make sure you have HTTPie installed by checking 'http --version' in the terminal, if not install it:
- Mac: brew install httpie
- Linux: sudo apt-get install httpie

## API

### Models

#### Quote
- quoteText
- quoteAuthor

#### Image
- url

### Endpoints

`<base url>` is either http://localhost:4000 for local development or https://first-aid-stress-relief-db.herokuapp.com/ for the deployed backend.

#### Quotes 

* `GET <base url>/randomquote`

Fetches one random quote from the database.

* `POST <base url>/quotes`

Creates a new quote in the database.

* `DELETE <base url>/quotes/:id`

Deletes a quote by it's id from the database. 

#### Images

* `GET <base url>/randomimage`

Fetches one random image from the database.

* `POST <base url>/images`

Creates a new image in the database.
