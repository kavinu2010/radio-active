/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'; // useState,
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
// import RadioStation from './RadioStation';

const FavoritesList = () => {
  const [stations, setStations] = useState([]);
  const { user, isLoading, isAuthenticated } = useAuth0();
  useEffect(() => {
    const getFavorites = async () => {
      if (!isLoading && isAuthenticated) {
        await fetch(`/stations/favorites/${user.email}`)
          .then(res => res.json())
          .then(data => {
            if (data.success) {
              console.log({ data });
              setStations(data.stations);
            }
          })
          .catch(error => console.log('No favorites for user ', error.message));
      }
    };
    getFavorites();
  }, [isLoading, user, isAuthenticated]);
  console.log({ stations });

  return (
    <Wrapper>
      Log in to view favorites
      {/* {stations.map(station => (
        <RadioStation key={station.id} station={station} />
      ))} */}
    </Wrapper>

  );
};

const Wrapper = styled.ul`
  background-color: rgba(0,0,0, 0.2);
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.4rem;
  margin-bottom: 2rem;

  @media (min-width: 768px){
    width: 60%;
  }
`;

export default FavoritesList;
