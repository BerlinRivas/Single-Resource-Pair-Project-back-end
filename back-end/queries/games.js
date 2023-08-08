const db = require("../db/dbConfig.js");

const getAllGames = async () => {
    try {
        const allGames = await db.any("SELECT * FROM games");
        return allGames;
        console.log(allGames)
        }   catch (error) {
            return error
        }
    };
    //ONE GAME
    const getGame = async (id) => {
        try {
            const oneGame = await db.one("SELECT * FROM games WHERE id=$1", id);
            return oneGame;
        } catch (error) {
            return error;
        }
    };

    //CREATE
    const createGame = async (game) => {
        try {
            const newGame = await db.one(
                "INSERT INTO games (name, release_date, genre, is_favorite) VALUES($1, $2, $3, $4) RETURNING *",
                [game.name, game.release_date, game.genre, game.is_favorite]
            );
            return newGame
        }   catch(error) {
            return error;
        }
    };

    //DELETE
    const deleteGame = async (id) => {
        try {
          const deletedGame = await db.one(
            "DELETE FROM games WHERE id = $1 RETURNING *",
            id
          );
          return deletedGame;
        } catch (error) {
          return error;
        }
      };

    //UPDATE
const updateGame = async (id, game) => {
    try {
      const updatedGame = await db.one(
        "UPDATE games SET name=$1, release_date=$2, genre=$3, is_favorite=$4 WHERE id =$5 RETURNING *",
        [game.name, game.release_date, game.genre, game.is_favorite, id]
      );
      return updatedGame;
    } catch (error) {
      return error;
    }
  };

  module.exports = {
    getAllGames,
    createGame,
    getGame,
    deleteGame,
    updateGame
  };