import React, { useContext } from 'react'
import Maincontext from '../Context/Context'
import "./Wishlist.scss"
import { Toaster } from 'react-hot-toast'
function WishList() {
    const{wishList,removeFromWishList}=useContext(Maincontext)
  return (
    <div className='wishListAll'>
        {
            wishList.map((item,index)=>{
                return(
                    <div class="card" style={{width: "18rem;", width:"200px"}}>
  <img class="card-img-top" src={item.image} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">{item.name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button className='btn btn-danger' onClick={()=>{
        removeFromWishList(item)
    }}>delete</button>
  </div>
</div>
                )
            })
        }
      <Toaster/>
    </div>
  )
}

export default WishList
