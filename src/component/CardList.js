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
    <div className='row my-3'>
    {
        response?.map((ele,idx)=>{
            return <Card ele={ele} id = {idx}/>
        })
    }
    </div>
  )
}

export default CardList