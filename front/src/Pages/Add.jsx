import React, { useContext } from 'react'
import { useFormik } from 'formik';
import axios from 'axios';
import Maincontext from '../Context/Context';
import "./Add.scss"
import { Toaster } from 'react-hot-toast';
function Add() {
    const {setData,data,RemoveData}=useContext(Maincontext)
    const formik = useFormik({
        initialValues: {
          name: '',
          desc: '',
          price: '',
          image: '',
        },
        onSubmit: values => {
         axios.post("http://localhost:4141/course",values).then(res=>{
            setData([...data,res.data])
         })
         formik.resetForm()
        },
      });
  return (
    <div className='add'>
        <div className='add_formik'>
        <form onSubmit={formik.handleSubmit}>
       <label htmlFor="name">name</label>
       <input
         id="name"
         name="name"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.name}
       />
 
       <label htmlFor="desc">desc</label>
       <input
         id="desc"
         name="desc"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.desc}
       />
 
       <label htmlFor="email">price</label>
       <input
         id="price"
         name="price"
         type="Number"
         onChange={formik.handleChange}
         value={formik.values.price}
       />
         <label htmlFor="image">image</label>
       <input
         id="image"
         name="image"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.image}
       />
 
       <button type="submit" >Submit</button>
     </form>
        </div>
        <div className='add__table'>
        <table class="table w-100">
  <thead>
    <tr>
      <th scope="col">name</th>
      <th scope="col">desc</th>
      <th scope="col">price</th>
      <th scope="col" >delete</th>
    </tr>
  </thead>
  <tbody>
    {
        data.map((item,index)=>{
            return(
                <tr key={index}>
                  <th scope="row">{item.name}</th>
                  <td>{item.desc}</td>
                  <td>{item.price}</td>
                  <td><button className='btn btn-warning' onClick={()=>{
                    RemoveData(item._id)
                  }}>delete</button></td>
                </tr>

            )
        })
    }
  </tbody>
            
        </table>
        </div>
        <Toaster/>
    </div>
  )
}

export default Add
