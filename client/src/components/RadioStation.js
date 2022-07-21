/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'; // , { useState }
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Radiostation = ({ station }) => {
  const { user, isAuthenticated } = useAuth0();
  const [favorite, setFavorite] = useState(station.favorite);

  const addFavorite = async () => {
    await fetch('http://localhost:5001/favorites', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: user.email,
        station: station.id,
      }),
    });
    console.log('favorited: ', station.name);
    setFavorite(true);
  };

  const unFavorite = async () => {
    await fetch('http://localhost:5001/favorites', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: user.email,
        station: station.id,
      }),
    });
    console.log('removed favorite: ', station.name);
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

  return (
    <Station>
      <div className="playerHeader">
        <img src={station.favicon} alt="" />
        <h2>{station.name}</h2>
        {renderFavBtn()}
      </div>
      <p>{station.language}</p>
      <audio controls>
        <source src={station.url} type="audio/mp3" />
      </audio>
    </Station>
  );
};

const Station = styled.section`
background-color: salmon;
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
