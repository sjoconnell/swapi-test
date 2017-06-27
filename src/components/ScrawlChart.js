import React from 'react';

const ScrawlChart = ({chartData = []}) => {
  return (
    <div className="scrawlChart">
      <p className="scrawlChart-title">Opening Scrawl Lengths</p>
      <ul className="bar-graph">
        <li className="bar-graph-axis">
          <div className="bar-graph-label">100</div>
          <div className="bar-graph-label">50</div>
          <div className="bar-graph-label">0</div>
        </li>
        {
          chartData.map(chart => 
            <li className="bar alert" style={{height: `${chart.wordCount}%`}} key={chart.title}>
              <div className="percent">{chart.wordCount}</div>
              <div className="description">{chart.title}</div>
            </li>
          )
        }
      </ul>
    </div>
  )
}

export default ScrawlChart