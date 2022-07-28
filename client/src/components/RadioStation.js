/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Radiostation = ({ station }) => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [favorite, setFavorite] = useState(station.favorite);
  const [loginMessage, setLoginMessage] = useState(false);

  const addFavorite = async () => {
    await fetch('/favorites', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: user.email,
        station: station.id,
      }),
    });
    setFavorite(true);
  };

  const unFavorite = async () => {
    await fetch('/favorites', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: user.email,
        station: station.id,
      }),
    });
    setFavorite(false);
  };

  const handleLoginMsg = () => {
    setLoginMessage(true);
    setTimeout(() => {
      setLoginMessage(false);
    }, 1500);
  };

  const renderFavBtn = () => {
    if (isAuthenticated && !isLoading) {
      if (favorite) {
        return <FavoriteIcon sx={{ cursor: 'pointer', color: 'red' }} className="favoriteBtn" onClick={unFavorite} />;
      }
      return <FavoriteBorderIcon sx={{ cursor: 'pointer', color: '#fdf6ed' }} className="favoriteBtn" onClick={addFavorite} />;
    }
    if (!isLoading && !isAuthenticated) {
      return <FavoriteBorderIcon sx={{ cursor: 'pointer', color: '#8a847a' }} className="favoriteBtn--disabled" onClick={handleLoginMsg} />;
    }
    return null;
  };

  const renderFavicon = () => {
    try { return <img src={station.favicon || '/live-stream-logo.png'} alt="logo" />; } catch (error) { return console.log(error.message); }
  };

  return (
    <Station>
      {renderFavicon()}
      <h2>{station.name}</h2>
      {renderFavBtn()}
      {loginMessage ? <p className="loginMsg">Please login to add favorite</p> : null}
      <Audio
        id="audio-element"
        controls="true"
        src={station.url}
        type="audio/mp3"
        controlsList="noplaybackrate nodownload" />
      <p>{station.language.charAt(0).toUpperCase() + station.language.slice(1)}</p>
    </Station>
  );
};

const Station = styled.section`
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 0.25rem;
  padding: .8rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr auto 1fr;
  justify-items: center;
  align-items: center;

.loginMsg{
  position: absolute;
  z-index: 2;
  transform: translate(8rem, -1.5rem);
  background-color: #1b1208;
  border-radius: 3px;
  padding: .4rem;
  color: #2dc847;
}

img{
  grid-column-start: 1;
  grid-column-end: 1;
  width: 2.5rem;
  height: 2.5rem;
  object-fit: contain;
  margin-bottom: 0.5rem;
}

h2{
  font-size: 1rem;
  color: #fdf6ed;
  font-weight: 500;
  grid-column-start: 2;
  grid-column-end: 5;
  grid-row-start: 1; 
  grid-row-end: 3;
  align-self: start;
  margin-top: 1rem;
}

svg{
  grid-column-start: 5;
  grid-column-end: 5;
  transform: scale(1.3);
}

p{
  grid-column-start: 5;
  grid-column-end: 5;
  grid-row-start: 3;
}
`;

const Audio = styled.audio`
  width: 6.8rem; 
  height: 1.7rem;
  transform: scale(1.2);
  grid-column-start: 1;
  grid-column-end: 6;
  grid-row-start: 3;
  justify-self: start;
  align-self: center;
  margin-left: 1.6rem;

  @media (min-width: 768px){
    width: 9rem;
    height: 2rem;
    justify-self: center;
    margin-left:0;
  }

&::-webkit-media-controls-panel {
  background-color: #fdf6ed;
  box-shadow: 4px 4px 4px 4px black;
}

&::-webkit-media-controls-mute-button {
  color: #B1D4E0;
  border-radius: 50%;
}

&::-webkit-media-controls-play-button {
  color: #B1D4E0;
  border-radius: 50%;
}

&::-webkit-media-controls-current-time-display {
  display: none;
}

&::-webkit-media-controls-time-remaining-display {
  display:none;
}

&::-webkit-media-controls-timeline {
  display:none;
}

`;

export default Radiostation;
