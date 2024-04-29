import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CountryDropdown } from 'react-country-region-selector';
import { useStateContext } from '../../contexts/ContextProvider';
import { Header } from '../../components';

const SaleForm = () => {

  const { addSale } = useStateContext()

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

  const handleSubmit = e => {
    e.preventDefault()
    addSale(inputState)
    setInputState({
      productName: '',
      productPrice: '',
      date: '',
      customerName: '',
      customerEmail: '',
      customerPhoneNumber: '',
      customerCountry: ''
    })
  }

  return (
    <form onSubmit={handleSubmit} className='justify-center text-center'>
      <Header category="" title="New Sale" />

      <div className='flex justify-center'>
        <div className='input-control'>
          <input
            type="text"
            value={productName}
            name={'productName'}
            placeholder='Name of Product'
            onChange={handleInput('productName')}
          />
        </div>
        <div className='input-control'>
          <input
            type="text"
            value={productPrice}
            name={'productPrice'}
            placeholder='Price of Product'
            onChange={handleInput('productPrice')}
          />
        </div>
      </div>

      <div className='flex justify-center'>
        <div className='input-control'>
          <DatePicker
            id='date'
            placeholderText='Date of Sale'
            selected={date}
            dateFormat='dd/MM/yyyy'
            onChange={(date) => {
                setInputState({...inputState, date: date})
            }}
          />
        </div>
        <div className='input-control'>
          <input
            type="text"
            value={customerName}
            name={'customerName'}
            placeholder='Customer Name'
            onChange={handleInput('customerName')}
          />
        </div>
      </div>
      
      <div className='flex justify-center'>
        <div className='input-control'>
          <input
            type="text"
            value={customerEmail}
            name={'customerEmail'}
            placeholder='Customer Email'
            onChange={handleInput('customerEmail')}
          />
        </div>
        <div className='input-control'>
          <input
            type="text"
            value={customerPhoneNumber}
            name={'customerPhoneNumber'}
            placeholder='Customer Phone Number'
            onChange={handleInput('customerPhoneNumber')}
          />
        </div>
      </div>

      <div className='flex justify-center'>
        <div className='input-control'>
          <CountryDropdown
            value={customerCountry}
            onChange={(customerCountry) => {
              setInputState({...inputState, customerCountry: customerCountry})
            }}
          />
        </div>
      </div>

      <div className='p-10'>
        <button>Add Sale</button>
      </div>
    </form>
  )
}

export default SaleForm