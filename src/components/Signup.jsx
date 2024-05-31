import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const [formData, SetFormData]= useState({ });
    const [loading , setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate()
  
    function changeHandler(event){
      
      SetFormData({
        ...formData,
        [event.target.id] : event.target.value,
      });
     
    }
  
    async function submitHandler(event) {
    event.preventDefault();
    setLoading(true);
    const response = await fetch('https://mobz-mern-backend.onrender.com/api/v1/signup',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json',
  
          },
          body: JSON.stringify(formData),
  
        },
      );
  
    const data = await response.json();
    if(data.success===false){
      setError(data.message);
      setLoading(false);
    } 
    setLoading(false);
    //write navigate path
    // navigate('/getdata')
    console.log(data)
  
    }

  return (
    <div className='p-3 max-w-lg mx-auto'>
    <h1 className='text-3xl text-center font-semibold my-7'>Data Entry</h1>
    <form className='flex flex-col gap-4' onSubmit={submitHandler}>
      <input type='text' placeholder='First Name' className='p-3 border rounded-lg' id='firstName' onChange={changeHandler}/>
      <input type='text' placeholder='Last Name' className='p-3 bord/er rounded-lg' id='lastName' onChange={changeHandler}/>
      <input type="tel" id='mobileNo' name="phone" placeholder="Phone Number"   className='p-3 border rounded-lg'  onChange={changeHandler}/>
      <input type='email' placeholder='email' className='p-3 border rounded-lg' id='email' onChange={changeHandler}/>
      <input type='text' placeholder='Street' className='p-3 border rounded-lg' id='street' onChange={changeHandler}/>
      <input type='text' placeholder='City' className='p-3 border rounded-lg' id='city' onChange={changeHandler}/>
      <input type='text' placeholder='State' className='p-3 border rounded-lg' id='state' onChange={changeHandler}/>
      <input type='text' placeholder='Country' className='p-3 border rounded-lg' id='country' onChange={changeHandler}/>
      <input type='text' placeholder='Login Id' className='p-3 border rounded-lg' id='loginId' onChange={changeHandler}/>


      <input type='password' placeholder='password 6 character 1 uppercase letter 1 lowercase letter 1 special character' className='p-3 border rounded-lg' id='password' onChange={changeHandler}/>
      <button disabled={loading} className='p-3 text-white bg-slate-700 rounded-lg uppercase hover:opacity-95 disabled:bg-opacity-80'>
      {
        loading? 'Loading...' : 'Save'
      }
      {/* Save */}
      </button>
    </form>
    <div>
      {error && (<span className="text-red-600 mt-5">
        {error}
      </span>)}
    </div>
  </div>
  )
}
