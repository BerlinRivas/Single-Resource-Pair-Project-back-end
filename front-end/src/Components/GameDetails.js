import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

function GameDetails() {
    const [game, setGame] = useState([]);
    let { id } = useParams();
    let navigate = useNavigate()
  
    const handleDelete = () => {
      deleteGame();
    };
  
    const deleteGame = () => {
      axios
        .delete(`${API}/games/${id}`)
        .then(
          () => {
            navigate(`/games`);
          },
          (error) => console.error(error)
        )
        .catch((c) => console.warn("catch", c));
    };
  
    useEffect(() => {
      axios
        .get(`${API}/games/${id}`)
        .then((response) => {
          console.log(response.data);
          setGame(response.data);
        })
        .catch((c) => {
          console.warn("catch", c);
        });
    }, [id, API]);


    return (
        <article>
        <h3>{true ? <span>⭐️</span> : null} {game.name}</h3>
        <h5>
          <span>
            <a href={game.url}>{game.name}</a>
          </span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {game.url}
        </h5>
        <h6>{game.genre}</h6>
        <p>{game.description}</p>
        <div className="showNavigation">
          <div>
            <Link to={`/games`}>
              <button>Back</button>
            </Link>
          </div>
          <div>
            <Link to={`/games/${id}/edit`}>
              <button>Edit</button>
            </Link>
          </div>
          <div>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </article>
      );
}
export default GameDetails;