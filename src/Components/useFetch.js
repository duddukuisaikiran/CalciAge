import {useState,useEffect} from "react";

const useFetch =(url) => {
        const [data,setData] = useState(null);

        const[name,setName] = useState("Sai");

        const[isPending,setisPending] = useState(true);

        const [Error,setError] = useState(null);
    useEffect(() => {
        fetch(url)
        .then(res => {
            if(!res.ok) {
                throw Error("could not fetch data from that resource");
            }
           return  res.json();
    })
    .then(data => {
        setData(data);
        setisPending(false);
        setError(null)
    })
    .catch(err => {
        setisPending(false);
        setError(err.message);
        ;
    })
    },[url]);

    return {data,isPending,Error}

}
export default useFetch;