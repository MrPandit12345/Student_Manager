import React,{useEffect,useState} from 'react';
import { Link , useNavigate} from 'react-router-dom';
import './Styles.css';

function StudentTable() {
    const[student,setStudent] = useState('');

    useEffect(()=>{
        fetch('http://localhost:5000/students')
        .then((res)=>res.json())
        .then((data)=>{
            setStudent(data);    
        })
        .catch((err)=>{
            console.log(err);
        })
    },[]);

    const navigate = useNavigate();
    const DisplayDetails =(sid)=>{
        navigate(`/student/view/${sid}`);
        
    }

    const EditDetails =(sid)=>{
         navigate(`/student/edit/${sid}`)
    }

    const RemoveDetails =(sid)=>{
        if(window.confirm("Are you sure to delete")){
            fetch(`http://localhost:5000/students/${sid}`,{
                method:'DELETE',
            })
            .then((res)=>{
                alert('Student data deleted successfully.....!');
                window.location.reload();
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    }

    return (
    <>
    <h1 className='fs-1 text-center mt-3 fst-italic text-cyan'>STUDENT MANAGER</h1>
    <div className='container border border-dark-subtle mt-5'>
      <h2 className='p-2 text-center main'>Student Records</h2>
      <div className="table-container"> 
        <Link to='/student/create' className='btn btn-add mb-5 mx-3 px-3'>Add new Student</Link>
        <table className='table '>
            <thead className='table-secondary'>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Place</th>
                    <th>Phone</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {
                student && student.map((item,index)=>(
                    <tr key={item.id}>
                    <td>{index+1}</td>
                    <td>{item.name}</td>
                    <td>{item.place}</td>
                    <td>{item.phone}</td>
                    <td>
                        <button onClick={()=>DisplayDetails(item.id)} className='btn btn-info '>View</button>
                        <button onClick={()=>EditDetails(item.id)} className='btn btn-warning ms-2 me-2'>Edit</button>
                        <button onClick={()=>RemoveDetails(item.id)} className='btn btn-danger '>Delete</button>
                    </td>
                </tr>

                ))
                
            }
            </tbody>
        </table>
      </div>
    </div>
    </>
  )
}

export default StudentTable
