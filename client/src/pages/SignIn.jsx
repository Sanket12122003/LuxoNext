import { useState } from 'react'
import {Link,useNavigate}from 'react-router-dom'


export default function SignIn() {
  const [formdata, setFormdata] = useState({})
  const[error,setError] = useState(null)
  const[loading,setLoading] = useState(false)
 const navigate= useNavigate();


  const handleChange =(e)=>{
    setFormdata({
      ...formdata,
      [e.target.id]:e.target.value,
    
    })

  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
      setLoading(true);
    const res = await fetch('/api/auth/signin',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(formdata),
    });
    const data = await res.json();
    console.log(data);
    if(data.success===false){
      setError(data.message);
      setLoading(false);
      return;
    }

       setLoading(false);
       setError(null)
       navigate('/')


    } catch (error) {
      setLoading(false);
      setError(error .message);
    }
    
  };
  return (
    <div className='p-2 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7' >SignIn</h1>
     <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
   
      <input type="email" placeholder='email' 
      className='border p-3 rounded-lg' id='email'onChange={handleChange}/>
      <input type="password" placeholder='password'  
      className='border p-3 rounded-lg' id='password'onChange={handleChange}/>
      <button disabled={loading} className='bg-slate-700 text-white p-3
      rounded-lg uppercase hover:opacity-95
      disabled:opacity-80'>{loading ? 'Loading...' :'Sign In'}</button>
     </form>
     <div className=' flex gap-2 mt-5'>
      <p> Dont Have an Account?</p>
      <Link to={"/sign-up"}>
        <span className='text-blue-700'>Sign up</span>
      
      </Link>
     </div>
     {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  )
}
