DROP DATABASE IF EXISTS games_dev;
CREATE DATABASE games_dev;

\c games_dev;

CREATE TABLE games (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 release_date TEXT,
 genre TEXT,
 is_favorite BOOLEAN
);
