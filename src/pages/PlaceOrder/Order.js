import axios from 'apiService/axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Order = () => {
    const user = useSelector(state=>state.reducer.user)
    const [order,setOrder] = useState([])
      const getProduct = JSON.parse(localStorage.getItem("checkCart"));
      const {id} = useParams();
      useEffect(()=>{
        if(id){
            axios.get(`/product/${id}`)
            .then(res=>{
                console.log(res.data.result);
                 setOrder([{...res?.data?.result,quantity:1}])
            })
        }
        else if(!id){
            setOrder(getProduct)
        }
      },[])
     
     
     console.log(order);
      return (
        <div className='mt-44 container-sk'>
            <div>
                <div>
                 <CustomerInfo/>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Order;

export const CustomerInfo = ()=>{
    return(
        <>

        </>
    )
}