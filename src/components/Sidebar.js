import React from 'react';
import Character from './Character';
import ScrawlChart from './ScrawlChart';

const wordCount = (allFilms) => {
  return allFilms.map(film => {
    var obj = {
      title: film.title,
      wordCount: film.opening_crawl.split(/\W/g)
        .filter(Boolean)
        .length
    }
    return obj;
  })
}

const Sidebar = ({films = [], fav = {}, least = {}}) => {

  const chartData = wordCount(films);

  return (
    <div className="sidebar">
      <Character character={fav} favorite={true} />
      <Character character={least} favorite={false} />
      <ScrawlChart chartData={chartData} />
    </div>
  )
}

export default Sidebar