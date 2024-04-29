import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CountryDropdown } from 'react-country-region-selector';
import { useStateContext } from '../../contexts/ContextProvider';
import { Header } from '../../components';

const EmployeeForm = () => {

  const { addEmployee } = useStateContext()

  const [ inputState, setInputState ] = useState({
    name: '',
    country: '',
    jobTitle: '',
    hireDate: ''
  })

  const { name, country, jobTitle, hireDate } = inputState

  const handleInput = name => e => {
    setInputState({...inputState, [name]: e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault()
    addEmployee(inputState)
    setInputState({
      name: '',
      country: '',
      jobTitle: '',
      hireDate: ''
    })
  }

  const styles = {
    outline: 'none',
    padding: '.5rem 1rem',
    borderRadius: '5px',
    border: '2px solid #fff',
    resize: 'none',
    boxShadow: '0px 1px 15px rgba(0,0,0,0.06)',
    color: 'rgba(34, 34, 96, 0.4)'
  }

  return (
    <form onSubmit={handleSubmit} className='justify-center text-center'>
      <Header category="" title="New Employee" />

      <div className='flex justify-center'>
        <div className='input-control'>
          <input
            type="text"
            value={name}
            name={'name'}
            placeholder='Employee Name'
            onChange={handleInput('name')}
          />
        </div>
        <div className='input-control'>
          <CountryDropdown
            value={country}
            onChange={(country) => {
              setInputState({...inputState, country: country})
            }}
          />
        </div>
      </div>


      <div className='flex justify-center'>
        <div className='input-control'>
          <input
            type="text"
            value={jobTitle}
            name={'jobTitle'}
            placeholder='Job Title'
            onChange={handleInput('jobTitle')}
          />
        </div>
        <div className='input-control'>
          <DatePicker
            id='hireDate'
            placeholderText='Enter A Date'
            selected={hireDate}
            dateFormat='dd/MM/yyyy'
            onChange={(hireDate) => {
                setInputState({...inputState, hireDate: hireDate})
            }}
          />
        </div>
      </div>

      <div className='p-10'>
        <button>Add Employee</button>
      </div>
    </form>
  )
}

export default EmployeeForm