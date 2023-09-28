import { useEffect, useState } from "react";
import { ImageCard } from "../component/ImageCard";


export const HomePage = () => {
const [data,setData] = useState([]);
const getData = async () => {
    const resp = await fetch("https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20");
    const {photos} = await resp.json();
    setData(photos)
    console.log(photos);
}
useEffect(()=>{
    getData()
},[])
    return(
      <div id="photos">
        {
            data?.map((e,i) => {
                return <ImageCard id={e.id} imageurl={e.url} key={i} />
            })
        }
      </div>
    )
}
