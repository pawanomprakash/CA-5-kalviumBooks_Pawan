import React from 'react'
import { useState } from 'react'
import {useForm} from "react-hook-form";
export default function Register() {

  const {register,handleSubmit,setError,formState:{errors}} = useForm();
  const [field,setField]=useState(false);
  const [submitted,setSubmit]=useState(false)


  const onSubmit=(data)=>{
    if(data.password!==data.repeatpassword){
      setField({repeatpassword:'Passwords do not match'});
      setError('repeatpassword',{
        type:'manual',
        message:'Passwords do not match',
      });
      return;
    }
    setField(data);
    setSubmit(true);
  }

  return (
    <div id="formBody">
      <form id="formContainer" onSubmit={handleSubmit(onSubmit)}>
        <div id="regStatus">{submitted?"Registration successfull":null}</div>
      <div><input className='forminput' type="text" placeholder="first name" {...register("firstname",{required:"firstname is required!", minLength:{value:3,message:"firstname must be more than 3 characters"},maxLength:{value:30,message:"firstname cannot be more than 30 characters"}})} /></div>
      <div><p>{errors.firstname?.message}</p></div>
      <div><input className='forminput' type="text" placeholder="Email" {...register("email",{required:"email is required",pattern:{value:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,message:"Invalid email"}})} /> </div>
      <div><p>{errors.email?.message}</p></div>
      <div><input className='forminput' type="password" placeholder="password" {...register("password",{required:"password is required!", minLength:{value:10,message:"Password must be more than 10 characters"}})} /></div>
      <div><p>{errors.password?.message}</p></div>
      <div><input className='forminput' type="password" placeholder="Repeat your password" {...register("repeatpassword",{required:"password is required!"},)} /></div>
      <div><p>{errors.repeatpassword?.message}</p></div>
<br />
        <button id="register" type='submit'>Sign-up</button>
      </form>
    </div>
  )
}
