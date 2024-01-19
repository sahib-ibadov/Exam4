import React, { useContext } from 'react'
import Maincontext from '../Context/Context'
import { Link } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';

import "./Card.scss"
function Card({item}) {
const {AddtoWishlist,AddtoBasket}=useContext(Maincontext)
  return (
    <div className='col-lg-3 col-md-6 mb-5 mr-1'>
        <div class="card" style={{width: "18rem;"}}>
  <img class="card-img-top" src={item.image} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">{item.name}</h5>
    <p class="card-text">{item.desc}</p>
    <p>{item.price} AZN</p>
    <button className='btn btn-success' onClick={()=>{
        AddtoWishlist(item)
    }}><i class="fa-solid fa-heart"></i></button>
    <button className='btn btn-warning' onClick={()=>{
AddtoBasket(item)
    }}><i class="fa-solid fa-basket-shopping"></i></button>
    <Link  to={`/${item._id}`}><button className='btn btn-danger'>#</button></Link>
  </div>
</div>
      <Toaster/>
    </div>
  )
}

export default Card
