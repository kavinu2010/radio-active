/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'; // useState,
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import RadioStation from './RadioStation';
import mockStations from '../data/stations.json';

const FavoritesList = () => {
  const [stations, setStations] = useState([mockStations]);
  const { user, isLoading, isAuthenticated } = useAuth0();

  useEffect(() => {
    const getFavorites = async () => {
      if (!isLoading && isAuthenticated) {
        await fetch(`/stations/favorites/${user.email}`)
          .then(res => res.json())
          .then(data => {
            if (data.success) {
              setStations(data.stations);
            }
          })
          .catch(error => console.log('No favorites for user ', error.message));
      }
    };
    getFavorites();
  }, [isLoading, user, isAuthenticated]);

  const isLoggedIn = () => {
    if (!isAuthenticated && !isLoading) {
      return <h3 className="title--not-logged-in">Please log in to view favorites</h3>;
    }
    return isLoading ? <h3 className="title--loading">Loading...</h3> : <h3 className="title--logged-in">My Favorite Stations</h3>;
  };

  return (
    <Wrapper>
      {isLoggedIn()}
      {stations.map(station => (
        <RadioStation key={station.id} station={station} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  background-color: transparent;
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.4rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
  width: 80%;

  @media (min-width: 768px){
    width: 60%;
  }
`;

export default FavoritesList;
