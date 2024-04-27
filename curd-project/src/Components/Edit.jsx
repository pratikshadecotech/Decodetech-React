import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import '../Css/Edit.css'

const Edit = () => {
    const {id} = useParams();
    const [data,setData]= useState([])
    const navigat   =useNavigate();

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users/'+id)
        .then(res=> setData(res.data))
        .catch(err => console.log(err))
    }, [])

    function handleSubmit(event){
        event.preventDefault()
        axios.put('https://jsonplaceholder.typicode.com/users/'+id,data)
        .then(res=>{
            alert("Data Updated Successfully");
            navigat('/');
        }).catch(err => console.log(err));
    }

  return (
    <div className='edit-div'>
        <form onSubmit={handleSubmit}>
        <label class="col-md-5" className="heading">Update User</label> <br/><br/>

        <div>
            <label class="col-md-2">Name:</label> 
            <input class="col-md-5" type='text' name='name' value={data.name} onChange={e=>setData({...data, name:e.target.value})} />
        </div>

        <br/>


        <div>
            <label class="col-md-2">Email:</label>
            <input class="col-md-5" type='text' name='email' value={data.email} onChange={e=>setData({...data, email:e.target.value})} />
        </div>

        <br/>
        <button class='btn btn-lg btn-success'>Submit</button>

    </form>
</div>
  )
}

export default Edit