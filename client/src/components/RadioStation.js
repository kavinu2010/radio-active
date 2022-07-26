/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'; // , { useState }
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
// import AudioSpectrum from 'react-audio-spectrum2';

const Radiostation = ({ station }) => {
  const { user, isAuthenticated } = useAuth0();
  const [favorite, setFavorite] = useState(station.favorite);

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

  const renderFavBtn = () => {
    if (isAuthenticated) {
      if (favorite) {
        return <FavoriteIcon className="favoriteBtn" onClick={unFavorite} />;
      }
      return <FavoriteBorderIcon className="favoriteBtn" onClick={addFavorite} />;
    }
    // add onClick and display "need to log in to add favorites"
    return <FavoriteBorderIcon className="favoriteBtn" disabled />;
  };

  const renderFavicon = () => {
    try { return <img src={station.favicon || '/radio.jpeg'} alt="Radio Station Logo" />; } catch (error) { return console.log(error.message); }
  };

  return (
    <Station>
      <div className="playerHeader">
        {renderFavicon()}
        <h2>{station.name}</h2>
        {renderFavBtn()}
      </div>
      <p>{station.language}</p>
      <audio id="audio-element" controls src={station.url} type="audio/mp3" />
      {/* <AudioSpectrum
        id="audio-canvas"
        height={60}
        width="100%"
        audioId="audio-element"
        capColor="red"
        capHeight={2}
        meterWidth={2}
        meterCount={512}
        meterColor={[
          { stop: 0, color: '#f00' },
          { stop: 0.5, color: '#0CD7FD' },
          { stop: 1, color: 'red' },
        ]}
        gap={4} /> */}
    </Station>
  );
};

const Station = styled.section`
background-color: rgba(255, 255, 255, 0.588);
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

/* .favoriteBtn{
  align-self: flex-end;
} */

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
}
`;
export default Radiostation;
