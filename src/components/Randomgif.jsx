import React from 'react'
import Spinner from './Spinner';
import useGif from '../Customhook/useGif';


const Randomgif = () => {


    const { gif, loader, fetchData } = useGif();

    function clkhandler() {

        fetchData();
    }
    return (
        <div className='w-2/3 lg:w-1/2 md:w-1/2 sm:w-1/2  rounded-lg h-[280px] bg-green-500' >
            <h1 className='text-center text-lg font-bold underline'>A RANDOM GIF</h1>{
                loader ? <Spinner /> : <img src={gif} className=' mt-2 mx-auto w-[380px] h-48' />

            }
            <div className='flex flex-row justify-center'>

                <button onClick={clkhandler} className='mt-2 rounded-lg hover:bg-blue-800 px-4 py-1 bg-blue-600 text-white'>Generate</button>
            </div>
        </div>
    )
}

export default Randomgif