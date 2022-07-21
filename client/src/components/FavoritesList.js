/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'; // useState,
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
// import RadioStation from './RadioStation';

const FavoritesList = () => {
  // const [stations, setStations] = useState([]);
  const { user, isLoading, isAuthenticated } = useAuth0();
  useEffect(() => {
    if (!isLoading && isAuthenticated) { // doesnt do the fetch unless the user is loaded
      fetch(`http://localhost:5001/favorites/${user.email}`)
        .then(res => res.json())
        .then(data => console.log('abbc', data));
    }
  }, [isLoading, user, isAuthenticated]);

  // useEffect(() => {
  //   const uri = `http://91.132.145.114/json/stations/byuuid/${filter.country}?hidebroken=true&order=name&limit=10`;
  //   fetch(uri).then(res => res.json())
  //     .then(data => {
  //       const filteredStations = data.map(station => ({
  //         id: station.stationuuid,
  //         name: station.name,
  //         url: station.url_resolved,
  //         favicon: station.favicon,
  //         language: station.language,
  //         genres: station.tags,
  //         country: filter.country,
  //       }));
  //       setStations(filteredStations);
  //     });
  // }, [filter]);
  return (
    <Wrapper>
      FavoritesList
      {/* {stations.map(station => (
        <RadioStation key={station.id} station={station} />
      ))} */}
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

export default FavoritesList;
