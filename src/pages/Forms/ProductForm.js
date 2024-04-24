import React, { useState } from 'react'

const ProductForm = () => {

  const [ inputState, setInputState ] = useState({
    img: '',
    name: '',
    price: ''
  })

  const { img, name, price } = inputState

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
      <h1>New Product</h1>
      <div className='input-control'>
        <input
          style={styles}
          type="text"
          value={name}
          name={'name'}
          placeholder='Product Name'
          onChange={handleInput('name')}
        />
      </div>
      <div className='input-control'>
        <input
          style={styles}
          type="text"
          value={img}
          name={'img'}
          placeholder='Link to Image'
          onChange={handleInput('img')}
        />
      </div>
      <div className='input-control'>
        <input
          style={styles}
          type="text"
          value={price}
          name={'price'}
          placeholder='Product Price'
          onChange={handleInput('price')}
        />
      </div>

      <div className='submit-btn'>
        <button>Add Product</button>
      </div>
    </form>
  )
}

export default ProductForm