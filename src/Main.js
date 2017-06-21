import React from 'react';
import MovieCard from './MovieCard';

const createGroupedArray = function(arr, chunkSize) {
    var groups = [], i;
    for (i = 0; i < arr.length; i += chunkSize) {
        groups.push(arr.slice(i, i + chunkSize));
    }
    return groups;
}

const Main = ({ films = [] }) => {
  return (
    <div className="main">
      <h1>Main!</h1>
      {
        createGroupedArray(films, 2)
          .map((filmGroup, index) => <MovieCard filmGroup={filmGroup}  key={index}/>)
      }
    </div>
  )
}

export default Main;