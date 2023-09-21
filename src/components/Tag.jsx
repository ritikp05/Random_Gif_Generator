import React, { useState } from 'react'
import Spinner from './Spinner';
import useGif from '../Customhook/useGif';


const Tag = () => {

    const [tag, setTag] = useState();


    const { gif, loader, fetchData } = useGif(tag);
    function clkhandler() {
        fetchData(tag);
    }


    return (
        <div className='w-2/3 lg:w-1/2 md:w-1/2 sm:w-1/2 rounded-lg h-[280px] mb-4 bg-blue-500' >
            <h1 className='text-center font-bold text-lg underline'>RANDOM<span className='uppercase'>{tag}</span> GIF</h1>{
                loader ? <Spinner /> : <img src={gif} className=' mt-2 mx-auto w-[380px] h-48' />

            }<div className='flex flex-row justify-center mt-2 mb-3 gap-2'>

                <input className='md:w-40 lg:w-48 sm:w-40 w-32 h-7 text-center border-none  ' onChange={(e) => setTag(e.target.value)} value={tag}></input>
                <button onClick={clkhandler} className='  rounded-lg hover:bg-green-700 px-4 py-1 bg-green-600 text-white'>Generate</button>
            </div>
        </div>
    )
}

export default Tag;