import { useEffect, useState } from "react"

const userFetch = (url) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url).then((res) => {
            res.json().then((result) => {
                setData(result);
                // console.log(data);
            })
        })
    }, [])

    return data;
}

export default userFetch