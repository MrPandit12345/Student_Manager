import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Styles.css';

function ViewDetail() {    
    const{sid}=useParams();

    const[stuData,setStuData]= useState({});

    useEffect(()=>{
        fetch(`http://localhost:5000/students/${sid}`)
        .then((res)=>res.json())
        .then((data)=>{setStuData(data)})
        .catch((err)=>{console.log(err)})
    },[]);
    
  return (
    <>
    <h1 className='fs-1 text-center mt-3 fst-italic text-cyan'>STUDENT MANAGER</h1>
    <div className='container'>
      <h2 className='ps-5 py-3 main'>Student Detail</h2>
      {stuData&&
        <div className='fst-italic ps-5'>
        <p><strong>ID:  </strong>{stuData.id}</p>
        <p><strong>Name:  </strong>{stuData.name}</p>
        <p><strong>Place:  </strong>{stuData.place}</p>
        <p><strong>Phone:  </strong>{stuData.phone}</p>
      </div>}
        <Link to={'/'} className='btn btn-danger ms-5 my-3'>Back</Link>
    </div>
    </>
  )
}

export default ViewDetail
