/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import RadioStation from './RadioStation';

const ResultsList = ({ filter }) => {
  const [stations, setStations] = useState([]);

  useEffect(() => {
    const uri = `http://91.132.145.114/json/stations/bycountry/${filter.country}?hidebroken=true&order=name&limit=10`;
    fetch(uri).then(res => res.json())
      .then(data => {
        const filteredStations = data.map(station => ({
          id: station.stationuuid,
          name: station.name,
          url: station.url_resolved,
          favicon: station.favicon,
          language: station.language,
          genres: station.tags,
          country: filter.country,
        }));
        setStations(filteredStations);
      });
  }, [filter]);
  return (
    <Wrapper>
      ResultsList
      {stations.map(station => (
        <RadioStation key={station.id} station={station} />
      ))}
    </Wrapper>

  );
};

const Wrapper = styled.ul`
margin-top: 1.3rem;
  background-color: white;
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default ResultsList;
