# Project setup

## NodeJS

Install the latest node.js LTS version. E.g.,

```
nvm install 20
```

Then run `npm install` to pull down all of the project dependencies. 

## Database initialization

This project use posgresql. To quickly spin up a development instance using docker, run the following: 

```
docker run -d \
	--name habitrkr-db \
	-e POSTGRES_PASSWORD=habitrkr \
	-e POSTGRES_USER=habitrkr \
	-e POSTGRES_DB=habitrkr \
	-p 5432:5432 \
	-e PGDATA=/var/lib/postgresql/data/pgdata \
	-v ~/habitrkr-data:/var/lib/postgresql/data \
	postgres
```

We also use [db-migrate](https://github.com/db-migrate/node-db-migrate) to manage database migrations. You will need to install it as a global package, along with postgresql support:

```
npm install -g db-migrate db-migrate-pg
```

Then set up environment variables for your database credentials as follows: 

```
export HABITRKR_DB_USERNAME=habitrkr
export HABITRKR_DB_PASSWORD=habitrkr
```

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