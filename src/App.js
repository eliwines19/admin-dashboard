import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import { Navbar, Sidebar, ThemeSettings } from './components'
import { SaleForm, ProductForm, EmployeeForm, Ecommerce, Products, Sales, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Area, Bar, Pie, Line, Financial, ColorPicker, ColorMapping, Editor } from './pages'
import './App.css'

import { useStateContext } from './contexts/ContextProvider'

const App = () => {
    const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode } = useStateContext()

    return (
        <div className={currentMode === 'Dark' ? 'dark' : ''}>
            <BrowserRouter>
                <div className="flex relative dark:bg-main-dark-bg">
                    <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
                        <TooltipComponent content="Settings" position="Top">
                            <button
                                type="button"
                                className="text-3xl padding-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                                style={{ background: currentColor, borderRadius: '50%' }}
                                onClick={() => setThemeSettings(true)}
                            >
                                <FiSettings />
                            </button>
                        </TooltipComponent>
                    </div>
                    {activeMenu ? (
                        <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
                            <Sidebar />
                        </div>
                    ) : (
                        <div className="w-0 dark:bg-secondary-dark-bg">
                            <Sidebar />
                        </div>
                    )}
                    <div className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
                        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
                            <Navbar />
                        </div>

                        <div>
                            {themeSettings && <ThemeSettings />}

                            <Routes>
                                {/* Dashboard */}
                                <Route path="/"element={<Ecommerce />}/>
                                <Route path="/ecommerce" element={<Ecommerce />}/>

                                {/* Pages */}
                                <Route path="/sales" element={<Sales />}/>
                                <Route path="/products" element={<Products />}/>
                                <Route path="/employees" element={<Employees />}/>
                                <Route path="/customers" element={<Customers />}/>

                                {/* Forms */}
                                <Route path='/new/sale' element={<SaleForm />}/>
                                <Route path='/new/product' element={<ProductForm />}/>
                                <Route path='/new/employee' element={<EmployeeForm />}/>

                                {/* Apps */}
                                <Route path="/kanban" element={<Kanban />}/>
                                <Route path="/editor" element={<Editor />}/>
                                <Route path="/calendar" element={<Calendar />}/>
                                <Route path="/color-picker" element={<ColorPicker />}/>

                                {/* Charts */}
                                <Route path="/line" element={<Line />}/>
                                <Route path="/area" element={<Area />}/>
                                <Route path="/bar" element={<Bar />}/>
                                <Route path="/pie" element={<Pie />}/>
                                <Route path="/financial" element={<Financial />}/>
                                <Route path="/color-mapping" element={<ColorMapping />}/>
                                <Route path="/pyramid" element={<Pyramid />}/>
                                <Route path="/stacked" element={<Stacked />}/>
                            </Routes>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App