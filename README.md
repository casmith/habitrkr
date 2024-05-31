# Project setup

## NodeJS

Install the latest node.js LTS version. E.g.,

```
nvm install 20
```

Then run `npm clean-install` to pull down all of the project dependencies. 

## Database initialization

This project use posgresql. To quickly spin up a development instance using docker, first you'll need to set some database credentials as environment variables:

```
export HABITRKR_DATABASE_USERNAME=habitrkr
export HABITRKR_DATABASE_PASSWORD=habitrkr
```

...and then run the following: 

```
scripts/start-db.sh
```

We also use [db-migrate](https://github.com/db-migrate/node-db-migrate) to manage database migrations. You will need to install it as a global package, along with postgresql support:

```
npm install -g db-migrate db-migrate-pg
```

Then set up environment variables for your database credentials as follows: 



Now you can run `db-migrate check` to verify things are working. You should see some output similar to: 

```
[INFO] Migrations to run: []
[INFO] Done
```

To bring the database up to the latest version, run 

`db-migrate up`

And you can run `db-migrate --help` for more information. 

## Running the Server

To start up the server, just run `npm start`

The following configuration options can be set as environment variables (e.g., `PORT=3001 npm start`)

- PORT
- DB_HOST
- DB_USER
- DB_NAME
- DB_PASS
- DB_PORT

## Using the server

TODO
