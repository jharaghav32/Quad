import React from 'react'
import defaultimg from './default.jpg'
import {AiFillStar} from 'react-icons/ai'
import {Link} from 'react-router-dom'
const Card = ({ele,id}) => {
    console.log(id);
  return (
   
    <div className="card w-25 ">
  <img src={ele?.show?.image?.medium || defaultimg} style={{"height":'255px'}} className=" card-img-top " alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{ele?.show?.name} <span className="mx-2">{ele?.show?.rating?.average || 5.2}<AiFillStar className='' style={{"color":"yellow"}}/></span></h5>
    <p className="card-text">
      <span>
        
         {ele?.show?.runtime || 50}min
        </span>/
        <span>
            {ele?.show?.genres.map((ele)=>{
                return ele+"/";
            })}
        </span>
        <span>
            {ele?.show?.language}
        </span>
    </p>
    <Link to={`/detail/${id}`} className="btn btn-primary">See More</Link>
  </div>
</div>

  )
}

export default Card