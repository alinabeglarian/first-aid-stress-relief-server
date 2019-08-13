# :star: :sparkles: FIRST AID STRESS RELIEF :sparkles: :star:

* [CLICK HERE](https://github.com/alinabeglarian/first-aid-stress-relief-client) for the client side repository of this app.
* [CLICK HERE](https://first-aid-stress-relief-db.herokuapp.com/) for the deployed version of the server side.

## Table of contents
* [Technologies used](#technologies-used)
* [Setup](#setup)
* [API](#api)

## Technologies used
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

### Endpoints
