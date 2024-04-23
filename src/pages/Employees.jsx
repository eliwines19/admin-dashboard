import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Search, Inject, Toolbar } from '@syncfusion/ej2-react-grids'

import { employeesData, employeesGrid } from '../data/dummy'
import { Header } from '../components'
import { NavLink } from 'react-router-dom'

const Employees = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg">
      <div className='flex justify-between'>
        <Header category="Page" title="Employees" />
        <NavLink
          to='/new/employee'
          className={'flex justify-center rounded-3xl'}
        ><button>Add Employee</button></NavLink>
      </div>
      <GridComponent
        width="auto"
        dataSource={employeesData}
        allowPaging
        toolbar={['Search']}
      >
      <ColumnsDirective>
        {employeesGrid.map((item, index) => (
          <ColumnDirective key={index} {...item} />
        ))}
      </ColumnsDirective>
      <Inject services={[Page, Search, Toolbar]} />
    </GridComponent>
  </div>
  )
}

export default Employees