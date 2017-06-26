import React from 'react';
import { VictoryBar, VictoryChart } from 'victory';

const ScrawlChart = ({chartData = []}) => {
  return (
    <div className="scrawlChart">
    { 
      <VictoryChart>
        <VictoryBar
          data={chartData}
          x="title"
          y="wordCount"
        />
      </VictoryChart>
    }
    </div>
  )
}

export default ScrawlChart