import React ,{useState,useEffect} from 'react'
import { useParams } from 'react-router'
import { Fetch } from './Fetch';
import { AiFillStar } from 'react-icons/ai';
import Modal from './Modal';
import Loader from './Loader';
import defaultimg from './default.jpg'
const Detail = () => {
    const {id}=useParams();
    const[response,setresponse]=useState();
    useEffect(()=>{
    Fetch().then((res)=>setresponse(res));
    },[])
    if(response==null){
        return 'Loading....';
    }
    function removeTags(str) {
      if ((str===null) || (str===''))
          return false;
      else
          str = str.toString();
      return str.replace( /(<([^>]+)>)/ig, '');
  }
  let  s;
  if(id){
    s=removeTags(response[id]?.show?.summary);
  }
  if(response==null){
    return <Loader/>
  }
  return (
    <div className='d-flex flex-row '>
        <div className='d-flex flex-column justify-content-center align-items-center bg-black bg-gradient text-white fst-italic'>
        <h1 className='my-4' style={{"font-size":"100px"}} >{response[id]?.show?.name}</h1>
        <p className='fs-5 '>
           <span className="mx-4">{response[id]?.show?.rating?.average || 5.2}<AiFillStar className='' style={{"color":"yellow"}}/></span>
           <span className='mx-4'>{response[id]?.show?.premiered}</span>
           <span className='mx-4'>
            {response[id]?.show?.genres.map((ele)=>{
                return ele+"|";
            })}
        </span>
        <span>
        
         {response[id]?.show?.runtime || 50}min
        </span>
        </p>
        <p className='mx-2 py-2 fs-3 text-warning'>
          {s}
        </p>
       <Modal title={response[id]?.show?.name}/>
        </div>
        <div className='d-flex justify-content-end h-50 w-50'>
        <img src={response[id]?.show?.image?.original || defaultimg} className="rounded   " alt="..." style={{"max-height":"100vh","max-width":"100vw"}} />
            </div>
    </div>
  )
}

export default Detail