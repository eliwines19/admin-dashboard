import React from 'react'
import { MdOutlineCancel } from "react-icons/md";
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';

// no longer need, rendering colorpicker component instead
// import { themeColors } from '../data/dummy';
// import { BsCheck } from 'react-icons/bs'
// import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import { useStateContext } from '../contexts/ContextProvider'

const ThemeSettings = () => {

  const { setColor, setMode, currentMode, currentColor, setThemeSettings } = useStateContext()

  return (
    <div className='bg-half-transparent w-screen fixed nav-item top-0 right-0'>
      <div className='float-right h-screen dark:text-gray-200 bg-white w-400 dark:bg-[#42464D]'>
        <div className='flex justify-between items-center p-4 ml-4'>
          <p className='font-semibold text-xl'>Settings</p>
          <button
            type="button"
            onClick={() => setThemeSettings(false)}
            style={{ color: 'rgb(153, 171, 180)', borderRadius: '50%' }}
            className='text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray'
          >
            <MdOutlineCancel />
          </button>
        </div>

        <div className='flex-col border-t-1 border-color p-4 ml-4'>
          <p className='font-semibold text-lg'>Theme Options</p>
          <div className='mt-4'>
            <input
              type="radio"
              id="light"
              name="theme"
              value="Light"
              className='cursor-pointer'
              onChange={setMode}
              checked={currentMode == 'Light'}
            />
            <label htmlFor="light" className='ml-2 text-md cursor-pointer'>
              Light
            </label>
          </div>

          <div className='mt-4'>
            <input
              type="radio"
              id="dark"
              name="theme"
              value="Dark"
              className='cursor-pointer'
              onChange={setMode}
              checked={currentMode === 'Dark'}
            />
            <label htmlFor="dark" className='ml-2 text-md cursor-pointer'>
              Dark
            </label>
          </div>
        </div>

        {/* removed theme options, instead added colorpicker component */}
        {/* display is currently hidden */}
        {/* <div className='flex-col border-t-1 border-color p-4 ml-4 hidden'>
          <p className='font-semibold text-lg'>Theme Colors</p>
          <div className='flex gap-3'>
            {themeColors.map((item, index) => (
              <TooltipComponent
                key={index}
                content={item.name}
                position="TopCenter"
              >
                <div className='relative mt-2 cursor-pointer flex gap-5 items-center'>
                  <button
                    type="button"
                    className='h-10 w-10 rounded-full cursor-pointer'
                    style={{ backgroundColor: item.color }}
                    onClick={() => setColor(item.color)}
                  >
                    <BsCheck className={`ml-2 text-2xl text-white ${item.color === currentColor ? 'block' : 'hidden'}`} />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div> */}
        <div className='flex-col border-t-1 border-color p-4 ml-4'>
          <p className='font-semibold text-lg'>Theme Color Picker</p>
          <div className='m-5'>
            <ColorPickerComponent
              id="inline-palette"
              mode="Picker"
              modeSwitcher={false}
              inline
              value={currentColor}
              change={(e) => setColor(e.value)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThemeSettings