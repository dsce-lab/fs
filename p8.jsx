import React,{useState} from 'react';
const LoginForm=()=>{
    const[form,setform]=useState({email:'',password:''});
    const[message,setmessage]=useState('');

    const validatepassword=(pwd)=>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%&?]).{8,}$/.test(pwd);


    const handlechange=(e)=>{
        setform({...form,[e.target.name]:e.target.value});
    }
    const handlesubmit=(e)=>{
        e.preventDefault();
        setmessage(
            validatepassword(form.password) ? 'login in' : 'pass must be 8 cahr strong'
        )
    }
    return(
        <div>
            <h2>Password Checker</h2>
            <form onSubmit={handlesubmit}>
                <input
                type='email'
                name='email'
                placeholder='Email'
                value={form.email}
                onChange={handlechange}
                required/><br/><br/>
                 <input
                type='password'
                name='password'
                placeholder='Password'
                value={form.password}
                onChange={handlechange}
                required/><br/><br/>
                <button type='submit'>submit</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    )
}
export default LoginForm;


import React from 'react';
import LoginForm from './login';

function App() {
  return (
    <div>
      <LoginForm />
    </div>
  );
}

export default App;
