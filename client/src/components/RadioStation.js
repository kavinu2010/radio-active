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
    try { return <img src={station.favicon || '/radio.jpeg'} alt="logo" />; } catch (error) { return console.log(error.message); }
  };

  return (
    <Station>
      <div className="playerHeader">
        {renderFavicon()}
        <h2>{station.name}</h2>
        {renderFavBtn()}
        {loginMessage ? <p className="loginMsg">Please login to add favorite</p> : null}
      </div>
      <p>{station.language}</p>
      <audio id="audio-element" controls src={station.url} type="audio/mp3" />
    </Station>
  );
};

const Station = styled.section`
background-color: rgba(255, 255, 255, 0.15);
border-radius: 0.25rem;
padding: 0.5rem;
display: flex;
flex-direction: column;
gap: 0.5rem;

.playerHeader{
  display: inherit;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
};

.loginMsg{
  background-color: #1b1208;
  border-radius: 3px;
  position: fixed;
  z-index: 2;
  transform: translate(4rem, 0rem);
  opacity: 100%;
  transition: opacity 2s;
  padding: .2rem;
  color: #2dc847;
}

img{
  max-width: 30px;
  max-height: 30px;
}

audio{
  width:100%;
  height: 30px;
}

h2{
  font-size: 1rem;
  color: #2dc847;
}
`;
export default Radiostation;
