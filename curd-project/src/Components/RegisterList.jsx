import React, { useEffect, useState } from 'react'
import axios from "axios"
import '../Css/Register.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const RegisterList = () => {

    const[userdata,setuserdata]=useState([])
    const navigat   =useNavigate();

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            console.log(response);
            setuserdata(response.data)
        })
    },[])


  return (

    <>
    
        <div>

          <div className='add-user'>
            <Link to="/create" ><input type="button" className="button" value="Add User" /> </Link>
          </div>

        <div className='list-label'>
          <label>Users List</label>
        </div>
        
          <table>
            <thead>
                <tr>
                    <th style={{border:'1px solid black'}}> Id </th>
                    <th> Name </th>
                    <th> Phone </th>
                    <th> Email </th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                {userdata.map((data)=>(
           
                  <tr>
                    <td style={{border:'1px solid black'}}>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.phone}</td>
                    <td>{data.email}</td>
                    <td>
                      <Link to={`/update/${data.id}`} className='btn  btn-success'>Update</Link> &nbsp; &nbsp; 
                      <button onClick={e=> handleSubmit(data.id)} className='btn  btn-success'>Delete</button>

                    </td>
                  </tr>
                 
              )
              )}
            </tbody>
          


            
          </table>

        </div>


       


    </>
  )

  function handleSubmit(id){
      const conf = window.confirm("Do yow want to delete");
      if(conf){
        axios.delete('https://jsonplaceholder.typicode.com/users/'+id)
        .then(res=>{
            alert("Data Deleted Successfully");
            navigat('/');
        }).catch(err => console.log(err));
      }
  }
}

export default RegisterList



