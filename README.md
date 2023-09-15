# User API

## Table of Contents

- [Overview](#general-info)
- [UML Diagram](#uml-diagram)
- [Prerequisites](#prerequisites)
- [Modules and Dependencies](#modules-and-dependencies)
- [Setup](#setup)
- [Usage](#usage)

## Overview

A simple API built with NodeJS, that performs basic CRUD functionalities and stored in a MongoDB Non relational Data Base.

- C - Creates a new person in the Mongodb database.
- R - Reads a person from the database.
- U - Updates a person's record in the database.
- D - Deletes a person's record from the database.

The above functionalities performed using MongoDB Atlas database.
## UML Diagram
![Person API - Page 1(1)](https://github.com/VictorChukwudi/hng_stage_two/assets/81536363/89533098-6d9b-48e8-a93c-cb8f87448fdb)
## Prerequisites

To run this API locally or following through the implementation, [Node.js](nodejs.org/en) runtime environment is required, most preferably, the long term support (LTS) version.

## Modules and Dependencies

The node modules used for this API are

- Express
- Mongodb
- Mongoose
  with their versions shown in the package.json file.

## Setup

To run this project (i.e. locally), mongodb should be available on your machine or use mongodb Atlas

- Clone the repo:

```
git clone https://github.com/oranucarl/hngstage2.git
```

- Open the folder and run the command to install the dependencies:

```
npm install
```

- Create a .env file in the root and add code below to the file

```
DB_URL= <mongodb_connection_string>
```

- Next, run the command below to start the server

```
npm run dev
```

## Usage

The Person API has the routes(endpoints) available for the api usage:

- **POST** /api : to add or create a new person.
- **GET** /api/user_id : to fetch an existing person details using the user_id.
- **PUT** /api/user_id : to update an existing person details using the user_id.
- **DELETE** /api/user_id : to delete an existing person details using the user_id.

The routes are appended to the base URL with is

- for local

```
http://localhost:3000
```

- for deployed

```
https://api-hngstage2.onrender.com/api
```

### Deployed

To use the deployed version of the API, the base URL is https://personapi-xc6z.onrender.com (with the routes attached for any of the CRUD operations)