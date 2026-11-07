"use client"

import { useState } from "react";
import {val} from "@/components/supabase";
import Link from "next/link";
import { Button, Card, TextField } from "@radix-ui/themes";
import Head_text, { Input, Label } from "@/components/text";
import { Child_text } from "@/components/text";
import { Header } from "@/components/text";
import { ArrowLeft, ArrowRight, Eye } from "lucide-react";
import { Text } from "@radix-ui/themes";
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
  <div style={{width:"100vw",height:"100vh",display:"flex",background:"#FAF9F6",flexDirection:"row"}}>

  <div style={{width:"100%",height:"100%",justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"column"}}>
  <div style={{width:"500px",height:"fit-content",display:"flex",flexDirection:"column"}}>
  <Head_text>Butchery Management System</Head_text>
  <Child_text>Located along kiambu Road</Child_text>
  </div>  
  <div style={{width:"500px",height:"500px",justifyContent:"center",display:"flex",flexDirection:"column",gap:"25px"}}>
  <div style={{width:"100%",height:"fit-content",display:"flex",flexDirection:"column",gap:"5px"}}>
  <Header>Welcome Back</Header>
  <Child_text>Sign In Today</Child_text>
  </div>
  <div style={{width:"100%",height:"fit-content",display:"flex",flexDirection:"column",gap:"15px"}}>

  <div style={{width:"100%",height:"fit-content",display:"flex",flexDirection:"column",gap:"5px"}}>
  <Label>Email</Label>
  <TextField.Root size={"3"} variant="classic" color="plum" 
   value={value.email} onChange={change} name="email" required type="email" placeholder="enter email"
  style={{width:"100%",fontFamily:"Inter"}}></TextField.Root>
</div>
 <div style={{width:"100%",height:"fit-content",display:"flex",flexDirection:"column",gap:"5px"}}>
  {/* <input value={value.email} onChange={change} name="email" required type="email" placeholder="enter email"></input> */}
  <Label>Password</Label>
  <TextField.Root size={"3"} variant="classic" color="plum" 
   onChange={change} name="password" required type="password" placeholder="enter password"
  style={{width:"100%",fontFamily:"Inter"}}>
    
  </TextField.Root>
  </div>
  </div>
  {/* <input value={value.password} onChange={change} name="password" required type="password" placeholder="enter password"></input> */}
  <div style={{width:"100%",height:"fit-content",display:"flex"}}>
    <button type="button" onClick={submit}  style={{padding:"5px",borderRadius:"8px",justifyContent:"center",alignItems:"center",cursor:"pointer",background:"#742C38",width:"100%"}}>
      
      <Text size={"3"} weight={"medium"} style={{fontFamily:"Inter",color:"white"}}>
Sign In

      </Text>
      
      
    </button>
  </div>
  {/* <button type="button" onClick={submit}>Login</button> */}
  <Link href={"/pages/dashboard"}>Nav</Link>
  </div>
  </div>
  <div
  style={{width:"100%",height:"100%",position: "relative"}}>
  <div style={{width:"100%",borderTopLeftRadius:"20px",borderBottomLeftRadius:"20px",height:"100%",backgroundImage:"url('meat1.png')",opacity:"90%",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}>

  </div>
   <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      pointerEvents: "none",
      borderTopLeftRadius:"20px",borderBottomLeftRadius:"20px",
      background:
        "radial-gradient(ellipse at center, rgba(0,0,0,0) 50%, rgba(101, 67, 33, 0.9) 100%)",
    }}
  ></div>
  </div>
  </div>
  </>
  )

}