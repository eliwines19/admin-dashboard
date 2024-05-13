import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import { GoDotFill } from "react-icons/go"

import { Stacked, Pie, Button, SparkLine } from '../components'
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider'
import EcommerceOverview from '../components/EcommerceOverview'

const Ecommerce = () => {

  const { currentColor, recentSales, salesSortedByDate, employees, products, totalEarnings, totalEmployees, totalProducts } = useStateContext()

  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl">${totalEarnings()}</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text="View Sales"
              borderRadius="10px"
              size="md"
              nav={true}
              path="/sales"
            />
          </div>
        </div>
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          <EcommerceOverview />
        </div>
      </div>

      <div className="flex gap-10 flex-wrap justify-center">
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780">
            <div className="flex justify-between">
              <p className="font-semibold text-3xl">Recent Sales</p>
              <div className='flex items-center gap-4'>
                {/* <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
                  <span><GoDotFill /></span>
                  <span>Expense</span>
                </p>
                <p className='flex items-center gap-2 text-green-400 hover:drop-shadow-xl'>
                  <span><GoDotFill /></span>
                  <span>Budget</span>
                </p> */}
              </div>
            </div>

            <div className='mt-10 flex gap-10 flex-wrap '>
              <div className='border-r-1 border-color m-4 pr-10'>
                {recentSales().map((sale, index) => (
                  <div className='mb-8' key={index}>
                    <p>
                      <span className='text-xl font-semibold'>{sale.productName}</span>
                      <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs'>+${sale.productPrice}</span>
                    </p>
                  </div>
                ))}
                <div>
                  <p>
                    <Button
                      nav={true}
                      path='/sales'
                      color="white"
                      bgColor={currentColor}
                      text="See All"
                      borderRadius="10px"
                    />
                  </p>
                </div>
                  {/* <div>
                    <p>
                      <span className='text-3xl font-semibold'>$93,438</span>
                      <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs'>23%</span>
                    </p>
                    <p className='text-gray-500 mt-1'>Budget</p>
                  </div>
                  <div className='mt-8'>
                    <p>
                      <span className='text-3xl font-semibold'>$48,438</span>
                    </p>
                    <p className='text-gray-500 mt-1'>Expense</p>
                  </div>

                  <div className='mt-5'>
                    <SparkLine
                      currentColor={currentColor}
                      id="line-sparkline"
                      type="Line"
                      height="80px"
                      width="250px"
                      data={SparklineAreaData}
                      color={currentColor}
                    />
                  </div>
                  <div className='mt-10'>
                    <Button
                      color="white"
                      bgColor={currentColor}
                      text="Download Report"
                      borderRadius="10px"
                    />
                  </div> */}
              </div>

              <div>
                <Stacked
                  width="400px"
                  height="360px"
                />
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Ecommerce