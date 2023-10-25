docker run -d \
--name habitrkr-db \
-e POSTGRES_PASSWORD=$HABITRKR_DATABASE_PASSWORD \
-e POSTGRES_USER=$HABITRKR_DATABASE_USERNAME \
-e POSTGRES_DB=habitrkr \
-p 5432:5432 \
-e PGDATA=/var/lib/postgresql/data/pgdata \
-v ~/habitrkr-data:/var/lib/postgresql/data \
postgres