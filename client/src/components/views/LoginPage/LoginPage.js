import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../redux/action/user_action';
import './login.css';

function LoginPage(props) {

  const dispatch = useDispatch();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  }
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  }
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log('email', Email);
    console.log('password', Password);

    let body = {
      email : Email,
      password: Password
    }

    dispatch(loginUser(body))
      .then(response=>{
        if(response.payload.loginSuccess){
          props.history.push('/');
        }else{
          alert("Error");
        }
      })
    
    
  }

  return (
    <div style={{display:"flex", justifyContent:"center",alignItems:"center",
    width:"100%", height:"100vh"}}>
      <form style={{display:"flex", flexDirection:"column"}}
      onSubmit={onSubmitHandler}>
        <label>Email</label>
        <input type="email" value={Email} onChange={onEmailHandler}
        className="login_input"/>

        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHandler}
        className="login_input"/>
        <br/>

        <button className="login_btn">
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginPage
