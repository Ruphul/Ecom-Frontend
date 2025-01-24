import React from 'react'
import { useParams,Link } from 'react-router-dom'
import { productData } from '../../Data'

function Category() {
    let {cid}=useParams()
        let cat=productData.filter((a)=>a.category==cid)
    
  return (
    <div>
      <div className="container">
                  <h2 className='py-2 fw-bold'>Product of {cid}</h2>
                  <div className="row py-4">
                     {cat.map((a)=>(
                     <div className='col-lg-3' key={a}>
                     <Link to={`/details/${a.id}`}>
                      <img className='w-100' src={a.images} alt="" />
                      </Link>
                      <p className='py-2 fw-bold'>{a.title}</p>
                      <button className='btn btn-primary btn-sm'>Add to cart</button>
                     </div>
      
                     ))}
                  </div>
              </div>
    </div>
  )
}

export default Category
