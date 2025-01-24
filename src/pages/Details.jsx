import React from 'react'
import { productData } from '../../Data'
import { useParams } from 'react-router-dom'

function Details() {
  let{id}=useParams()
  let abc=productData.find((a)=>a.id==id)

  return (
    <div className='container'>
      <h1>Details</h1>
      <div className="row">
        <div className="col-lg-3">
        <img className='w-100' src={abc.images} alt="" />
        </div>
        <div className="col-lg-9">
        <h2>{abc.title}</h2>
        <p>{abc.description}</p> 
        <p>Price:{abc.price}</p>
        </div>
        
      </div>
      
      
    </div>
  )
}

export default Details
