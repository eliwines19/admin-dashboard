import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts'

import { useStateContext } from '../../contexts/ContextProvider'
import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy'

const Stacked = ({ width, height }) => {

  const { currentMode } = useStateContext()
  const bgColor = currentMode === 'Dark' ? '#33373E' : '#fff'

  return (
    <ChartComponent
      width={width}
      height={height}
      id="charts"
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={ bgColor }
      legendSettings={{ background: bgColor, textStyle: { color: currentMode === 'Dark' ? '#fff' : '#33373E' } }}
    >
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} /> )}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default Stacked