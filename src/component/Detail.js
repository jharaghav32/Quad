import React ,{useState,useEffect} from 'react'
import { useParams } from 'react-router'
import { Fetch } from './Fetch';
import { AiFillStar } from 'react-icons/ai';
import Modal from './Modal';
import Loader from './Loader';
import defaultimg from './default.jpg'
import '../App.css'
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
    <div
  className="bg-image  card shadow-1-strong"
  style={{"backgroundImage": `url(${response[id]?.show?.image?.medium || defaultimg})`,"height":"100vh","backgroundRepeat":'no-repeat',"backgroundSize":"cover","backgroundPosition":'center',"overflow":"auto"}}
>
  <div className="card-body text-white fw-bold fst-italic p-4 ">
    <h2 className="card-title mx-4">{response[id]?.show?.name}</h2>
    <p className="card-text">
    <p className='fs-5 '>
            <span className="mx-2">{response[id]?.show?.rating?.average || 5.2}<AiFillStar className='' style={{"color":"yellow"}}/></span>
            <span className='mx-2'>{response[id]?.show?.premiered}</span>
            <span className='mx-2'>
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
    </p>
    <Modal title={response[id]?.show?.name}/>
  </div>
</div>
    // <div className='bg-black '>
    //     <div className='d-flex flex-column justify-content-center align-items-center bg-black bg-gradient text-white fst-italic'>
    //     <h1 className='my-4' style={{"font-size":"100px"}} >{response[id]?.show?.name}</h1>
    //     <p className='fs-5 '>
    //        <span className="mx-4">{response[id]?.show?.rating?.average || 5.2}<AiFillStar className='' style={{"color":"yellow"}}/></span>
    //        <span className='mx-4'>{response[id]?.show?.premiered}</span>
    //        <span className='mx-4'>
    //         {response[id]?.show?.genres.map((ele)=>{
    //             return ele+"|";
    //         })}
    //     </span>
    //     <span>
        
    //      {response[id]?.show?.runtime || 50}min
    //     </span>
    //     </p>
    //     <p className='mx-2 py-2 fs-3 text-warning'>
    //       {s}
    //     </p>
    //    <Modal title={response[id]?.show?.name}/>
    //     </div>
    // </div>
  )
}

export default Detail