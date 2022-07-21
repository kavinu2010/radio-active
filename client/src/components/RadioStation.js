/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'; // , { useState }
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

// get user
// wait for authenticated

// display addFavoriteButton / removeFavoriteButton depending on favorite state of station
// when click favorite button
// fetch post req with user email and station id

const Radiostation = ({ station }) => {
  const { isAuthenticated } = useAuth0();
  const [favorite, setFavorite] = useState(station.favorite);

  const addFavorite = () => {
    console.log('favorited: ', station.name);
    setFavorite(true);
  };
  const unFavorite = () => {
    console.log('removed favorite: ', station.name);
    setFavorite(false);
  };

  const renderFavBtn = () => {
    console.log({ isAuthenticated });
    if (isAuthenticated) {
      if (favorite) {
        return <FavoriteIcon onClick={unFavorite} />;
      }
      return <FavoriteBorderIcon onClick={addFavorite} />;
    }
    // add onClick and display "need to log in to add favorites"
    return <FavoriteBorderIcon disabled />;
  };

  return (
    <Station>
      <img src={station.favicon} alt="" />
      <h2>{station.name}</h2>
      {renderFavBtn()}
      <p>{station.language}</p>
      <audio controls>
        <source src={station.url} type="audio/mp3" />
      </audio>
    </Station>
  );
};

const Station = styled.section`
background-color:salmon;
border-radius:0.25rem;
padding: 0.5rem;
display: flex;
flex-direction:column;
gap: 0.5rem;

img{
  max-width: 30px;
  max-height: 30px;
  position: absolute;
}
audio{
  height: 30px;
}
h2{
  font-size: 1rem;
  margin-left: 35px;
  
}
`;
export default Radiostation;
