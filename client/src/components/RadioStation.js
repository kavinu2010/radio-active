/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import FavoriteIcon from '@mui/icons-material/Favorite';

const Radiostation = ({ station }) => {
  const handleFavorite = () => {
    console.log('favorited: ', station.id);
  };
  return (
    <Station key={station.id}>
      <img src={station.favicon} alt="" />
      <h2>{station.name}</h2>
      <FavoriteBorderIcon onClick={handleFavorite} />
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
