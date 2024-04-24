import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CountryDropdown } from 'react-country-region-selector';

const SaleForm = () => {

  const [ inputState, setInputState ] = useState({
    productName: '',
    productPrice: '',
    date: '',
    customerName: '',
    customerEmail: '',
    customerPhoneNumber: '',
    customerCountry: ''
  })

  const { productName, productPrice, date, customerName, customerEmail, customerPhoneNumber, customerCountry } = inputState

  const handleInput = name => e => {
    setInputState({...inputState, [name]: e.target.value})
  }

  console.log(inputState)

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
    <form className='flex flex-col gap-8'>
      <h1>New Sale</h1>
      <div className='input-control'>
        <input
          style={styles}
          type="text"
          value={productName}
          name={'productName'}
          placeholder='Product Name'
          onChange={handleInput('productName')}
        />
      </div>
      <div className='input-control'>
        <input
          style={styles}
          type="text"
          value={productPrice}
          name={'productPrice'}
          placeholder='Product Price'
          onChange={handleInput('productPrice')}
        />
      </div>
      <div className='input-control'>
        <DatePicker
          className='outline-none p-2 rounded border-2 border-white resize-none shadow-sm text-indigo-800 opacity-40'
          id='date'
          placeholderText='Enter A Date'
          selected={date}
          dateFormat='dd/MM/yyyy'
          onChange={(date) => {
              setInputState({...inputState, date: date})
          }}
        />
      </div>
      <div className='input-control'>
        <input
          style={styles}
          type="text"
          value={customerName}
          name={'customerName'}
          placeholder='Customer Name'
          onChange={handleInput('customerName')}
        />
      </div>
      <div className='input-control'>
        <input
          style={styles}
          type="text"
          value={customerEmail}
          name={'customerEmail'}
          placeholder='Customer Email'
          onChange={handleInput('customerEmail')}
        />
      </div>
      <div className='input-control'>
        <input
          style={styles}
          type="text"
          value={customerPhoneNumber}
          name={'customerPhoneNumber'}
          placeholder='Customer Phone Number'
          onChange={handleInput('customerPhoneNumber')}
        />
      </div>
      <div className='input-control'>
        <CountryDropdown
          style={styles}
          value={customerCountry}
          onChange={(customerCountry) => {
            setInputState({...inputState, customerCountry: customerCountry})
          }}
        />
      </div>

      <div className='submit-btn'>
        <button>Add Sale</button>
      </div>
    </form>
  )
}

export default SaleForm