import React from 'react'
import { ChartComponent, LineSeries, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, Legend, Tooltip } from '@syncfusion/ej2-react-charts'

import { lineCustomSeries, LinePrimaryYAxis, LinePrimaryXAxis } from '../../data/dummy'

import { useStateContext } from '../../contexts/ContextProvider'

const LineChart = () => {

  const { currentMode } = useStateContext()
  const bgColor = currentMode === "Dark" ? '#33373E' : '#fff'

  return (
    <ChartComponent
      id="line-chart"
      height="420px"
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={ bgColor }
      legendSettings={{ background: bgColor, textStyle: { color: currentMode === 'Dark' ? '#fff' : '#33373E' } }}
    >
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]}/>
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default LineChart