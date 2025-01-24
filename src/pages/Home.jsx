import React from 'react'
import { carData } from '../../Data'
import ProductByCategory from '../comp/ProductByCategory'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <>
      <section>
        <div className="container">
          <div className="row py-4">
            <div className="col-lg-3">
           <ul className="list-group">
            {carData.slice(0,8).map((a)=>(
              
            <li className="list-group-item" key={a.slug}>
              <Link to={`/cat/${a.slug}`}>{a.name}</Link>
               </li>
            
            ))}
            </ul>

            </div>
            <div className="col-lg-9">
              <img className='w-100' src="https://img.lazcdn.com/us/domino/c304cc7f-3f90-4309-b8b8-3d822713fe2c_NP-1976-688.jpg_2200x2200q80.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <ProductByCategory aa='beauty'/>
      <ProductByCategory aa='fragrances'/>
      <ProductByCategory aa='furniture'/>
      <ProductByCategory aa='groceries'/>
    </>
  )
}

export default Home
