import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function GameNewForm() {
    let navigate = useNavigate();
  
    const addGame = (newGame) => {
      console.log(newGame)
      console.log(`${API}/games`)
      axios
        .post(`${API}/games`, newGame)
        .then(
          () => {
            navigate(`/games`);
          },
          (error) => console.error(error)
        )
        .catch((c) => console.warn("catch", c));
    };
  
    const [game, setGame] = useState({
      name: "",
      release_date: "",
      genre: "",
      is_favorite: false,
    });
  
    const handleTextChange = (event) => {
      setGame({ ...game, [event.target.id]: event.target.value });
    };
  
    const handleCheckboxChange = () => {
      setGame({ ...game, is_favorite: !game.is_favorite });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      addGame(game);
    };

    return (
        <div className="New">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              value={game.name}
              type="text"
              onChange={handleTextChange}
              placeholder="Name of Game"
              required
            />
            <label htmlFor="release_date">Release Date:</label>
            <input
              id="release_date"
              type="text"
              required
              value={game.artist}
              placeholder="2010, 2007"
              onChange={handleTextChange}
            />
            <label htmlFor="genre">Genre:</label>
            <input
              id="genre"
              type="text"
              name="genre"
              value={game.genre}
              placeholder="Action-Adventure, Horror"
              onChange={handleTextChange}
            />
          
            <label htmlFor="is_favorite">Favorite:</label>
            <input
              id="is_favorite"
              type="checkbox"
              onChange={handleCheckboxChange}
              checked={game.is_favorite}
            />
    
            <br />
            <input type="submit" />
          </form>
        </div>
      );

}

export default GameNewForm;