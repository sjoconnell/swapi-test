import React from 'react';
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

const Sidebar = ({films = []}) => {

  const chartData = wordCount(films);

  return (
    <div className="sidebar">
      
      <ScrawlChart chartData={chartData} />
    </div>
  )
}

export default Sidebar