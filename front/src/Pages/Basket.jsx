import React, { useContext } from 'react'
import Maincontext from '../Context/Context'
import "./Basket.scss"
import { Toaster } from 'react-hot-toast'
function Basket() {
    const {basket,increaseBtn,DecreaseBtn,removeFromBasket}=useContext(Maincontext)
  return (
    <div className='basketAll'>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">name</th>
      <th scope="col">desc</th>
      <th scope="col">price</th>
      <th scope="col">increase</th>
      <th scope="col">count</th>
       <th scope="col">decrease</th>
      <th scope="col">totalPrice</th>
      <th>delete</th>

    </tr>
  </thead>
  <tbody>
    {
        basket.map((item,index)=>{
            return(
                <tr key={index}>
      <th scope="row">{item.product.name}</th>
      <td>{item.product.desc}</td>
      <td>{item.product.price}</td>
      <td><button className='btn btn-warning' onClick={()=>{
        increaseBtn(item)
      }}>+</button></td>
      <td>{item.count}</td>
      <td><button className='btn btn-danger' onClick={()=>{
        DecreaseBtn(item)
      }}>-</button></td>
      <td>{item.totalPrice}</td>
      <td  ><button className='btn btn-success' onClick={()=>{
        removeFromBasket(item)
      }} >delete</button></td>

      
    </tr>
            )
        })
    }
   
  </tbody>
</table>
      <Toaster/>
    </div>
  )
}

export default Basket
