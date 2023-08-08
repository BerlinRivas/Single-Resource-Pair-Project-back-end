import { Link } from "react-router-dom";

function Game({ game }) {
  return (
    <tr>
      <td>
        {game.is_favorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
        <a href={game.url} target="_blank" rel="noreferrer">
          {game.name}
        </a>
      </td>
      <td>
        <Link to={`/games/${game.id}`}>✏️</Link>
      </td>
    </tr>
  );
}

export default Game;