/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';
import RadioStation from './RadioStation';

const ResultsList = ({ filter }) => {
  const [stations, setStations] = useState([]);
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
      const filteredStations = await data.map(station => {
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
margin-top: 1.3rem;
  background-color: rgba(0,0,0, 0.2);
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.4rem;
  margin-bottom: 2rem;
`;

export default ResultsList;
