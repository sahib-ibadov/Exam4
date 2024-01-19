import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

function Detail() {
    const [detail,setDetail]=useState([])
    const {id}=useParams()
    useEffect(()=>{
        axios.get(`http://localhost:4141/course/${id}`).then(res=>{
            setDetail(res.data)
        })
    },[])
  return (
    <div>
        <img src={detail.image} alt="" />
      
    </div>
  )
}

export default Detail
