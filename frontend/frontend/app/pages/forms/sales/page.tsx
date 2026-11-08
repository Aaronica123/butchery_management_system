"use client"

import { final_ax } from "@/components/axios";
import { Child_text, Header, Label } from "@/components/text";
import { Card, Text, TextField } from "@radix-ui/themes";
import { useState } from "react"

export default function Submit(){
    const [form,setform]=useState({cash:0,mpesa:0});
    const change=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const{name,value}=e.target
        setform((data)=>({
            ...data,
            [name]:value
        }))
    }
    const submit=async()=>{
        const data=await final_ax.post("/sales/create",{
            cash:Number(form.cash),
            mpesa:Number(form.mpesa)
        });
        if(data.status==200||data.status==201){
            alert("Created sales successfully")
            return;
        }
        else{
            throw new Error(data.data);
        }
    }
    return(
        <>
        <div style={{width:"100%",display:"flex",flexDirection:"column",gap:"10px"}}>
        <div style={{width:"100%",display:"flex",flexDirection:"column"}}>
            <Header>Create Sales</Header>
            <Child_text>Create Your Sales Today</Child_text>
        </div>
            <Card size={"2"} style={{width:"560px",display:"flex",flexDirection:"column",gap:"15px"}}>
                <div style={{width:'100%',display:"flex",flexDirection:'column',gap:"5px"}}>
                <Label>Cash</Label>
               <TextField.Root size={"3"} variant="surface" color="plum" 
               onChange={change} type="number" min={0} value={form.cash} name="cash" placeholder="enter cash"
  style={{width:"100%",fontFamily:"Inter"}}></TextField.Root>
  </div>

<div style={{width:'100%',display:"flex",flexDirection:'column',gap:"5px"}}>
                <Label>Mpesa</Label>
               <TextField.Root size={"3"} variant="surface" color="plum" 
               onChange={change} type="number" min={0} value={form.mpesa} name="mpesa" placeholder="enter mpesa" required
  style={{width:"100%",fontFamily:"Inter"}}></TextField.Root>
  </div>
  <div style={{width:"100%",display:"flex"}}>
    <button
    type="button" onClick={submit}
    style={{width:"132px",padding:"5px",borderRadius:"5px",border:"1px solid black",cursor:"pointer",background:"#742C38"}}>
        <Text style={{color:"white"}}>Submit</Text>
    </button>
  </div>
            </Card>
            </div>
            {/* <label>Cash</label>
            <input onChange={change} type="number" min={0} value={form.cash} name="cash" placeholder="enter cash" required/>

            <label>Mpesa</label>
            <input onChange={change} type="number" min={0} value={form.mpesa} name="mpesa" placeholder="enter mpesa" required/>

            <button type="button" onClick={submit}>Submit</button> */}

        </>
    )
}