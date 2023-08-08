// function Home() {
//     return (
//      <>
//      <img className="kratos" src="https://www.pngmart.com/files/22/Fortnite-Kratos-PNG-Photo.png" alt=""></img>
//      <img className="halo" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a8baa77f-c488-4769-bb75-a8a228144b41/debw2vq-26be5f8e-e91e-4009-b8f8-a56114f7efbe.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E4YmFhNzdmLWM0ODgtNDc2OS1iYjc1LWE4YTIyODE0NGI0MVwvZGVidzJ2cS0yNmJlNWY4ZS1lOTFlLTQwMDktYjhmOC1hNTYxMTRmN2VmYmUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.2Y1e2-K8UFgLruzqOct38BZCgN0D16VsS98j55F5lJ8" alt=""></img>
//      <div class="home-txt">
//         <h2 class="typing-text">Unleash your gaming prowess and conquer new realms</h2>
//     </div>
     
     
//      </>
//     );
//   }
  
//   export default Home;
  
import React, { useEffect } from 'react';

const TypingAnimation = () => {
  const textArray = ['Welcome', 'Unleash your inner gamer'];
  const [index, setIndex] = React.useState(0);
  const [typing, setTyping] = React.useState(true);
  const [text, setText] = React.useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (typing) {
        if (text.length < textArray[index].length) {
          setText((prevText) => prevText + textArray[index].charAt(text.length));
        } else {
          setTyping(false);
          setTimeout(() => setTyping(true), 3000);
        }
      } else {
        if (text.length > 0) {
          setText((prevText) => prevText.slice(0, -1));
        } else {
          if (index === textArray.length - 1) {
            setIndex(0);
          } else {
            setIndex((prevIndex) => prevIndex + 1);
          }
          setTyping(true);
        }
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [index, typing, text]);

  return (
    <div className='type'>
      <h2 className='home-text'>{text}</h2>
    </div>
  );
};

const Home = () => {
  const showNotification = () => {
    const notification = new Notification('New message from gamify!', {
      body: 'You have a new message. Click to view.',
    });

    // Remove the onclick handler
  };

  useEffect(() => {
    if (Notification.permission === 'granted') {
      showNotification();
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          showNotification();
        }
      });
    }
  }, []);

  return (
    <>
      <img
        className="kratos"
        src="https://www.pngmart.com/files/22/Fortnite-Kratos-PNG-Photo.png"
        alt=""
      />
      <img
        className="halo"
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a8baa77f-c488-4769-bb75-a8a228144b41/debw2vq-26be5f8e-e91e-4009-b8f8-a56114f7efbe.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E4YmFhNzdmLWM0ODgtNDc2OS1iYjc1LWE4YTIyODE0NGI0MVwvZGVidzJ2cS0yNmJlNWY4ZS1lOTFlLTQwMDktYjhmOC1hNTYxMTRmN2VmYmUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.2Y1e2-K8UFgLruzqOct38BZCgN0D16VsS98j55F5lJ8"
        alt=""
      />
      <TypingAnimation /> 
      
    </>
  );
};

export default Home;
