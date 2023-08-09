import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;


function GameEditForm() {
    let { id } = useParams();
    let navigate = useNavigate();
  
    const [game, setGame] = useState({
      name: "",
      release_date: "",
      genre: "",
      is_favorite: false,
    });

    useEffect(() => {
      axios.get(`${API}/games/${id}`).then(
        (response) => {console.log(response.data)
          setGame(response.data)},
        
        (error) => navigate(`/not-found`)
      );
    }, [id, navigate]);
  
    const updateGame = (updatedGame) => {
      axios
        .put(`${API}/games/${id}`, updatedGame)
        .then(
          () => {
            navigate(`/games/${id}`);
          },
          (error) => console.error(error)
        )
        .catch((c) => console.warn("catch", c));
    };
  
    const handleTextChange = (event) => {
      setGame({ ...game, [event.target.id]: event.target.value });
    };
  
    const handleCheckboxChange = () => {
      setGame({ ...game, is_favorite: !game.is_favorite });
    };
  

  
    const handleSubmit = (event) => {
      event.preventDefault();
      updateGame(game, id);
    };
    return (
        <div className="Edit">
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
          <Link to={`/games/${id}`}>
            <button className="edit">Nevermind!</button>
          </Link>
        </div>
      );
}

export default GameEditForm;