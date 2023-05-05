import React, { useEffect, useState } from 'react'
import { Fetch } from './Fetch'
import Card from './Card';
import Loader from './Loader';
const CardList = () => {
    const[response,setresponse]=useState();
    useEffect(()=>{
    Fetch().then((res)=>setresponse(res));
    },[])
    if(response==null){
        return <Loader/>;
    }
  return (
    <div className='d-flex flex-row flex-wrap gap-2 justify-content-center align-items-center'>
    {
        response?.map((ele,idx)=>{
            return <Card ele={ele} id = {idx}/>
        })
    }
    </div>
  )
}

export default CardList