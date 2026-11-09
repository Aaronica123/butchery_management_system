"use client"

import { useState } from "react";
import {val} from "@/components/supabase";
import Link from "next/link";
import { Button, Card, Spinner, TextField } from "@radix-ui/themes";
import Head_text, { Child_text1, Input, Label } from "@/components/text";
import { Child_text } from "@/components/text";
import { Header } from "@/components/text";
import { ArrowLeft, ArrowRight, Bell, Eye, SquareExclamationPoint } from "lucide-react";
import { Text } from "@radix-ui/themes";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
export default function Home() {
  const [load,setload]=useState(false);
  const [value,setvalue]=useState({email:"",password:""});
  const change=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const{name,value}=e.target;
    setvalue((data)=>({
      ...data,
      [name]:value
    }))
  }
  const route=useRouter()
  const submit=async()=>{
    setload(true)
    const {data,error}=await val.auth.signInWithPassword({email:String(value.email).toLowerCase(),password:value.password});
    if(data.user){
      setload(false)
      // alert("User was found");
       toast(
  <div style={{display:"flex",flexDirection:"row",alignItems:"center", gap:"10px",}}>
  <Bell color="#742C38"></Bell>       
  <div style={{width:"fit-content",display:"flex",flexDirection:"column"}}>
  Success Login
  <Child_text1>User Authenticated</Child_text1>
  </div>
  </div>,{position:"top-right",action:{label:"Close",onClick:()=>{}},actionButtonStyle:{background:"#D6C9C0",color:"#742C38",},style:{background:"#FAF9F6",border:"1px solid #DEDAD4"}});
 
       route.push("/pages/dashboard");
      return data.user;
    }
    if(error){
      setload(false)
      console.log("error is"+error.code)
     if(error.code=="invalid_credentials"){
      toast(
        <div style={{display:"flex",flexDirection:"row",alignItems:"center",gap:"10px"}}>
  <SquareExclamationPoint color="#742C38"></SquareExclamationPoint>        
  <div style={{width:"fit-content",display:"flex",flexDirection:"column"}}>
    Invalid Credentials
    <Child_text>Please Check Email and Password</Child_text>
  </div>
  </div>,{position:"top-right",action:{label:"Close",onClick:()=>{}},actionButtonStyle:{background:"#D6C9C0",color:"#742C38",},style:{background:"#FAF9F6",border:"1px solid #DEDAD4"}});

 }
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
    <button type="button" onClick={submit}  style={{padding:"5px",border:load?"1px black solid":"none",borderRadius:"8px",justifyContent:"center",alignItems:"center",cursor:"pointer",background:load?"":"#742C38",width:"100%"}}>
      {load?
      <div style={{display:'flex',flexDirection:"row",justifyContent:"center",alignItems:"center", gap:"5px"}}>
        <Spinner></Spinner>
      <Text size={"3"} weight={"medium"} style={{fontFamily:"Inter",color:"black"}}>
Signing In 

      </Text>
      </div>
      :
      <Text size={"3"} weight={"medium"} style={{fontFamily:"Inter",color:"white"}}>
Sign In

      </Text>
      }
      
      
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