// import { Link } from "react-router-dom";

// export default function NavBar() {
//   function openNav() {
//     document.getElementById("myNav").style.width = "100%";
//   }
  
//   function closeNav() {
//     document.getElementById("myNav").style.width = "0%";
//   }
//   return (
//     <>
//     <nav>
//       <h1>
//         <Link className="title" to="/">Gamify</Link>
//       </h1>
//       <button className="button">
//         <Link  to="/games/new">New Game</Link>
//       </button>
//       <button className="button2"> 
//         <Link  to="/games">Games</Link>
//       </button>
//     </nav>
//     <div id="myNav" class="overlay">
//   <a href="" class="closebtn" onclick="closeNav()">&times;</a>
//   <div class="overlay-content">
//     <a href="#">About</a>
//     <a href="#">Services</a>
//     <a href="#">Clients</a>
//     <a href="#">Contact</a>
//   </div>
// </div>

// <span  onclick="openNav()">&#9776; open</span>

//     </>
//   );
// }


import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [navOpen, setNavOpen] = useState(false);

  function toggleNav() {
    setNavOpen(!navOpen);
  }

  return (
    <>
      <nav>
        <h1>
          <Link className="title" to="/">
            <span className="g">G</span>amify
          </Link>
        </h1>
        <button className="button">
          <Link to="/games/new">New Game</Link>
        </button>
        <button className="button2">
          <Link to="/games">Games</Link>
        </button>
      </nav>
      <div className={navOpen ? "overlay open" : "overlay"}>
        <div className="overlay-content">
          <a href="#" className="overlay-link">Playstation</a>
          <a href="#" className="overlay-link">Xbox</a>
          <a href="#" className="overlay-link">About</a>
          <a href="#" className="overlay-link">Services</a>
        </div>
      </div>
      <span className="hamburger" onClick={toggleNav}>
        &#9776;
      </span>
    </>
  );
}
