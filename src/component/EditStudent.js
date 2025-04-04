import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import './Styles.css';

function EditStudent() {
    const{sid}=useParams()
    const[id,setId]=useState('');
    const[name,setName]=useState('');
    const[place,setPlace]=useState('');
    const[phone,setPhone]=useState('');
    
    const navigate = useNavigate();

    useEffect(()=>{
        fetch(`https://studb-dphn.onrender.com/students/${sid}`)
        .then((res)=>res.json())
        .then((data)=>{
            setId(data.id)
            setName(data.name)
            setPlace(data.place)
            setPhone(data.phone)
        })
        .catch((err)=>{console.log(err)})
    },[]);

    const handleSubmit =(e)=>{
        e.preventDefault();
        const studentData={id,name,place,phone};
        fetch(`https://studb-dphn.onrender.com/students/${sid}`,{
            method:'PUT',
            headers:{"content-type":"application/json"},
            body : JSON.stringify(studentData)
        })
        .then((res)=>{
            alert('Student data update successfully.....!');
            navigate("/")
        })
        .catch((err)=>{
            console.log(err)
        })
        
    }
  return (
    <>
    <h1 className='fs-1 text-center mt-3 fst-italic text-cyan'>STUDENT MANAGER</h1>
     <div className='container'>
      <h3 className='main ps-5 py-3'>Edit Student Details</h3>
      <form onSubmit={handleSubmit} className='ps-5'>
        <label htmlFor="id">ID:</label><br />
        <input type="text" id='id' name='id' required value={id} onChange={e=>setId(e.target.value)}/>
        <br /> <br />
        <label htmlFor="name">Name:</label><br />
        <input type="text" id='name' name='name' required value={name} onChange={e=>setName(e.target.value)}/>
        <br /> <br />
        <label htmlFor="place">Place:</label> <br />
        <input type="text" id='place' name='place' required value={place} onChange={e=>setPlace(e.target.value)}/>
        <br /> <br />
        <label htmlFor="phone">Phone:</label> <br />
        <input type="text" id='phone' name='phone' required value={phone} onChange={e=>setPhone(e.target.value)}/>
        <div className='ps-5 py-3 '>
      <button type="submit" className='btn btn-success m-3'>Update</button>
      <Link to={'/'} className='btn btn-danger m-3'>Back</Link>
      </div>
      </form>
      
    </div>
    </>
  )
}

export default EditStudent
