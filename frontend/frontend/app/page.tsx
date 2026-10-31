"use client"

import { useState } from "react";
import {val} from "@/components/supabase";
export default function Home() {
  const [value,setvalue]=useState({email:"",password:""});
  const change=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const{name,value}=e.target;
    setvalue((data)=>({
      ...data,
      [name]:value
    }))
  }
  const submit=async()=>{
    const {data,error}=await val.auth.signInWithPassword({email:String(value.email).toLowerCase(),password:value.password});
    if(data.user){
      alert("User was found");
      return data.user;
    }
    if(error){
      throw new Error(error.message);
    }
  }
  return (
  <>
  <h1>Hello, this is my home page</h1>;
  <label>Email</label>
  <input value={value.email} onChange={change} name="email" required type="email" placeholder="enter email"></input>
  <label>Password</label>
  <input value={value.password} onChange={change} name="password" required type="password" placeholder="enter password"></input>
  <button type="button" onClick={submit}>Login</button>
  </>
  )

}