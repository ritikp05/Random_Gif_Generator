import { useState, useEffect } from 'react'
import axios from 'axios';
const API_KEY = "ZwZAJjI8a9j7IwKbAKy2ZksgQbCrm1X4"
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {


    const [loader, setLoader] = useState(false);
    const [gif, setGif] = useState('')
    async function fetchData() {
        setLoader(true);
        const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
        const imgSource = data.data.images.downsized_large.url;

        setGif(imgSource);
        setLoader(false);
    }

    useEffect(() => {
        fetchData();
    }, []);





    return {gif,loader,fetchData};
}

export default useGif