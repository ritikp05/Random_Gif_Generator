import React from 'react'
import Randomgif from './components/Randomgif'
import Tag from './components/Tag'

function App() {
  return (
    <>
    <div className='w-full h-screen flex flex-col items-center mt-2'>

      <h1 className=' w-full mb-2  mt-0 py-1 text-center bg-gray-500 text-white'>RANDOM GIFS</h1>
    <div className='flex flex-col gap-2 w-full items-center'>
      <Randomgif/>
      <Tag/>
    </div>
    </div>
    </>
  )
}

export default App
