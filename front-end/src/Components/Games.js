import axios from "axios";
import { useState, useEffect } from "react";
import Game from "./Game";

const API = process.env.REACT_APP_API_URL;

function Games() {
  const [games, setGames] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/games`)
      .then((response) => setGames(response.data))
      .catch((c) => console.warn("catch", c));
  }, []);
  return (
    <div className="Games">
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Take me there</th>
              <th>See this Game</th>
            </tr>
          </thead>
          <tbody>
            {games.map((game) => {
              return <Game key={game.id} game={game} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Games;