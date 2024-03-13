import React from 'react'
import { ChartComponent, SplineAreaSeries, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, Legend } from '@syncfusion/ej2-react-charts'

import { Header } from '../../components'
import { areaCustomSeries, areaPrimaryYAxis, areaPrimaryXAxis } from '../../data/dummy'

import { useStateContext } from '../../contexts/ContextProvider'

const Area = () => {

  const { currentMode } = useStateContext()
  const bgColor = currentMode === "Dark" ? '#33373E' : '#fff'

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category="Chart" title="Inflation Rate in Percentage" />
      <ChartComponent
        id="area-chart"
        height="420px"
        primaryXAxis={areaPrimaryXAxis}
        primaryYAxis={areaPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        background={ bgColor }
        legendSettings={{ background: bgColor, textStyle: { color: currentMode === 'Dark' ? '#fff' : '#33373E' } }}
      >
        <Inject services={[SplineAreaSeries, DateTime, Legend]}/>
        <SeriesCollectionDirective>
          {areaCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}

export default Area