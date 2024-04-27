import axios from 'axios'
import React from 'react'
import  {  useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../Css/RegisterForm.css'

const RegisterForm = () => {

    const [inputData , setInputData] = useState({name:'', phone:'', email:''})

    const navigat   =useNavigate();

    function handleSubmit(event){
        event.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/users',inputData)
        .then(res=>{
            alert("Data Added Successfully");
            navigat('/');
        }).catch(err => console.log(err));
    }
  return (
    <div className='add-div'>
        <form onSubmit={handleSubmit}>
        <label class="col-md-5" className="heading">Add User</label> <br/><br/>
            <div>
                <label class="col-md-2">Name:</label>
                <input class="col-md-5" type='text' name='name' onChange={e=>setInputData({...inputData, name:e.target.value})} />
            </div>

            <br/>

            <div>
                <label class="col-md-2">Email:</label>
                <input class="col-md-5" type='text' name='email' onChange={e=>setInputData({...inputData, email:e.target.value})} />
            </div>
            <br/>
            <button class='btn btn-lg btn-success'>Submit</button>

        </form>
    </div>
  )
}

export default RegisterForm


