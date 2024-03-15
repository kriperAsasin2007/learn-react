import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);


    useEffect(() => {
        setTimeout(() => {
            fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error("Cannot fetch the data...")
                }
                return res.json()})
            .then(data => setData(data))
            .catch(err => {
                setErrorMessage(err.message);
            })
        }, 1000);
        }, [url])
        

    return {data, errorMessage};
}

export default useFetch;