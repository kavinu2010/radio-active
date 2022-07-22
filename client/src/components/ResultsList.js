/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';
import RadioStation from './RadioStation';

const ResultsList = ({ filter }) => {
  const [stations, setStations] = useState([]);
  const { user, isLoading, isAuthenticated } = useAuth0();

  useEffect(() => {
    const getStations = async uri => {
      const favorites = [];
      if (!isLoading && isAuthenticated) {
        await fetch(`http://localhost:5001/favorites/${user.email}`)
          .then(res => res.json())
          .then(data => {
            if (data.success) {
              favorites.push(...data.favorites);
            }
          })
          .catch(error => console.log('No favorites for user ', error.message));
      }
      const data = await fetch(uri).then(res => res.json());
      const filteredStations = await data.map(station => {
        const filteredStation = {
          id: station.stationuuid,
          name: station.name,
          url: station.url_resolved,
          favicon: station.favicon,
          language: station.language,
          genres: station.tags,
          country: filter.country,
        };
        if (favorites.some(uuid => station.stationuuid === uuid)) {
          filteredStation.favorite = true;
          return filteredStation;
        }
        filteredStation.favorite = false;
        return filteredStation;
      });
      setStations(filteredStations);
    };

    const uri = `http://91.132.145.114/json/stations/bycountry/${filter.country}?hidebroken=true&order=name&limit=10`;
    getStations(uri);
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
  background-color: rgba(0,0,0, 0.5);
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.4rem;
`;

export default ResultsList;
