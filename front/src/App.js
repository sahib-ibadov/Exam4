import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ROUTES from './inedx.root';
import Maincontext from './Context/Context';
import toast from 'react-hot-toast';
const router=createBrowserRouter(ROUTES)
function App() {
  const [data,setData]=useState([])
  const [search,setSearch]=useState([])
  const [wishList,setWishList]=useState(localStorage.getItem("wishlist")?JSON.parse(localStorage.getItem("wishlist")):[])
   const [basket,SetBasket]=useState(localStorage.getItem("BasketItem")?JSON.parse(localStorage.getItem("BasketItem")):[])
  const AddtoWishlist=(product)=>{
    const target=wishList.find(item=>item._id==product._id)
    if(target){
     toast.error("movcuddur")
    }
    else{
      setWishList([...wishList,product])
      localStorage.setItem("wishlist",JSON.stringify([...wishList,product]))
      toast.success("added to wishlist")
    }
  }
const RemoveData=(id)=>{
axios.delete(`http://localhost:4141/course/${id}`).then(res=>{
  const target=data.find(prod=>prod._id===id)
  data.splice(data.indexOf(target),1)
  setData([...data])
  toast.success("deleted data")
})
}

  const removeFromWishList=(item)=>{
    const target=wishList.find(prod=>prod._id==item._id)
    wishList.splice(wishList.indexOf(target),1)
    setWishList([...wishList])
    localStorage.setItem("wishlist",JSON.stringify([...wishList]))
    toast.success("deleted data")
  }
  const AddtoBasket=(product)=>{
   const target=basket.find(item=>item.product._id==product._id)
    if(target){
      target.count +=1
      target.totalPrice=target.product.price*target.count
      SetBasket([...basket])
      localStorage.setItem("BasketItem",JSON.stringify([...basket]))
      toast.success("added basket")
    }
    else{
      const BasketProduct={
        id:product._id,
        product:product,
        count:1,
        totalPrice:product.price*product.count
      }
      SetBasket([...basket,BasketProduct])
      localStorage.setItem("BasketItem",JSON.stringify([...basket,BasketProduct]))
    }
  }
  const DecreaseBtn=(product)=>{
   const target=basket.find(item=>item.id==product.id)
    if(target.count>1){
      target.count -=1
      target.totalPrice=target.product.price*target.count
      SetBasket([...basket])
      localStorage.setItem("BasketItem",JSON.stringify([...basket]))
    }
  }
  const increaseBtn=(product)=>{
   const target=basket.find(item=>item.id==product.id)
  
   target.count +=1
   target.totalPrice=target.product.price*target.count
   SetBasket([...basket])
   localStorage.setItem("BasketItem",JSON.stringify([...basket]))
    
  }
  const removeFromBasket=(item)=>{
    const target=basket.find(prod=>prod._id==item._id)
    basket.splice(basket.indexOf(target),1)
    SetBasket([...basket])
    localStorage.setItem("BasketItem",JSON.stringify([...basket]))
    toast.success("deleted from basket")
  }
  const HandleSearch=(searchValue)=>{
    if(searchValue==""){
      setData([...search])
    }
    else{
     setData([... data.filter(item=>item.name.toLowerCase().trim().includes(searchValue))])
    }
  }
  const handAZ = () => {
    const sorting = data.sort((a, b) => a.name.localeCompare(b.name))
    setData([...sorting])
    toast.success("A-Z filtered")
  }
  const handleFilter = () => {
    setData([...data.sort((a, b) => b.price - a.price)])
    toast.success("Filtered by Price")
  }



useEffect(()=>{
  axios.get("http://localhost:4141/course").then(res=>{
    console.log(res.data)
    setData(res.data)
    setSearch(res.data)
  })
},[])
const values={
  data,
  AddtoWishlist,
  wishList,
  removeFromWishList,
  AddtoBasket,
  basket,
  DecreaseBtn,
  increaseBtn,
  removeFromBasket,
  setData,
  data,
  HandleSearch,
  handleFilter,
  handAZ,
  RemoveData
}



  return (
    <Maincontext.Provider value={values}>
      <RouterProvider router={router}/>
    </Maincontext.Provider>
   
  )
}

export default App

