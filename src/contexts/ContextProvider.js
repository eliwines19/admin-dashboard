import React, { createContext, useContext, useState } from 'react'
import axios from 'axios'

const BASE_URL = 'http://localhost:3000/api/v1'

const StateContext = createContext()

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false
}

export const ContextProvider = ({ children }) => {
    const [ activeMenu, setActiveMenu ] = useState(true)
    const [ isClicked, setIsClicked ] = useState(initialState)
    const [ screenSize, setScreenSize ] = useState(undefined)
    const [ currentColor, setCurrentColor ] = useState('#03C9D7')
    const [ currentMode, setCurrentMode ] = useState('Light')
    const [ themeSettings, setThemeSettings ] = useState(false)

    // sale methods
    const addSale = async (sale) => {
        const response = await axios.post(`${BASE_URL}/sale/new`, sale)
        .catch((error) => {
            console.log(error)
        })
    }

    const getSales = async () => {
        const response = await axios.get(`${BASE_URL}/sales`)
        .catch((error) => {
            console.log(error)
        })
    }

    const deleteSale = async (id) => {
        const response = await axios.delete(`${BASE_URL}/sale/delete/${id}`)
        .catch((error) => {
            console.log(error)
        })
    }
    // end sale methods
    // product methods
    const addProduct = async (product) => {
        const response = await axios.post(`${BASE_URL}/product/new`, product)
        .catch((error) => {
            console.log(error)
        })
    }

    const getProducts = async () => {
        const response = await axios.get(`${BASE_URL}/products`)
        .catch((error) => {
            console.log(error)
        })
    }

    const deleteProduct = async (id) => {
        const response = await axios.delete(`${BASE_URL}/product/delete/${id}`)
        .catch((error) => {
            console.log(error)
        })
    }
    // end product methods
    // employee methods
    const addEmployee = async (employee) => {
        const response = axios.post(`${BASE_URL}/employee/new`, employee)
        .catch((error) => {
            console.log(error)
        })
    }

    const getEmployees = async () => {
        const response = axios.get(`${BASE_URL}/employees`)
        .catch((error) => {
            console.log(error)
        })
    }

    const deleteEmployee = async (id) => {
        const response = axios.delete(`${BASE_URL}/employee/delete/${id}`)
        .catch((error) => {
            console.log(error)
        })
    }
    // end employee methods

    const setMode = (e) => {
        setCurrentMode(e.target.value)
        localStorage.setItem('themeMode', e.target.value)
    }

    const setColor = (color) => {
        setCurrentColor(color)
        localStorage.setItem('colorMode', color)
    }

    const handleClick = (clicked) => {
        setIsClicked({ ...initialState, [clicked]: true})
    }

    return (
        <StateContext.Provider
            value={{
                activeMenu,
                setActiveMenu,
                isClicked,
                setIsClicked,
                handleClick,
                screenSize,
                setScreenSize,
                currentColor,
                setCurrentColor,
                currentMode,
                setCurrentMode,
                themeSettings,
                setThemeSettings,
                setMode,
                setColor,
                initialState,
                addSale,
                getSales,
                deleteSale,
                addProduct,
                getProducts,
                deleteProduct,
                addEmployee,
                getEmployees,
                deleteEmployee
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)