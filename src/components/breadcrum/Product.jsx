import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import BreadcrumComponent from './BreadcrumComponent';

const Product = () => {
     const {id}=useParams()
     const {data,error,loding,fetchingfn}=useFetch(`https://dummyjson.com/products/${id}`)
    useEffect(() => {
    fetchingfn()
    }, [])
    
  return (
    <div>
        <BreadcrumComponent/>
        <img src={data?.images[0]} alt="" />

    </div>
  )
}

export default Product