/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';
import RadioStation from './RadioStation';
import mockStations from '../data/stations.json';

const ResultsList = ({ filter }) => {
  const [stations, setStations] = useState([mockStations]);
  const { user, isLoading, isAuthenticated } = useAuth0();

  useEffect(() => {
    const getStations = async () => {
      const favorites = [];
      if (!isLoading && isAuthenticated) {
        await fetch(`/favorites/${user.email}`)
          .then(res => res.json())
          .then(data => {
            if (data.success) {
              favorites.push(...data.favorites);
            }
          })
          .catch(error => console.log('No favorites for user ', error.message));
      }
      const data = await fetch(`/stations/${filter.country}`).then(res => res.json());
      // if data.success = true map them, else, display error?
      const filteredStations = await data.stations.map(station => {
        const filteredStation = station;
        if (favorites.some(uuid => station.stationuuid === uuid)) {
          filteredStation.favorite = true;
          return filteredStation;
        }
        filteredStation.favorite = false;
        return filteredStation;
      });
      setStations(filteredStations);
    };

    getStations();
  }, [filter, isAuthenticated, isLoading, user]);

  return (
    <Wrapper>
      {stations.map(station => (
        <RadioStation key={station.id} station={station} />
      ))}
    </Wrapper>

  );
};

const Wrapper = styled.ul`
  width: 80%;
  margin-top: -7rem;
  background-color: transparent;
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

export default ResultsList;
