import React from 'react'
import { productData } from '../../Data'
import { Link } from 'react-router-dom';

function ProductByCategory(props) {
    let cat=productData.filter((a)=>a.category==props.aa)
  return (
    <>
      <section>
        <div className="container">
            <h2 className='py-2 fw-bold'>Product of {props.aa}</h2>
            <div className="row py-4">
               {cat.slice(0,4).map((a)=>(
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
      </section>
    </>
  )
}

export default ProductByCategory
