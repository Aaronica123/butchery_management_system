"use client"

import { final_ax } from "@/components/axios";
import Head_text, { Child_text1, Label } from "@/components/text";
import { Card,TextField,Text } from "@radix-ui/themes";
import { useState } from "react"

export default function Expense_form(){
    const[form,setform]=useState({rent:0,packaging:0,transport:0,wages:0,gas:0,electricty:0})

    const change=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const{name,value}=e.target;
        setform((data)=>({
            ...data,
            [name]:value
        }))
    }
    const submit=async()=>{
        const data=await final_ax.post("/expenses/create",{
            rent:Number(form.rent),
            packaging:Number(form.packaging),
            transport:Number(form.transport),
            wages:Number(form.wages),
            gas:0,
            electricity:Number(form.electricty)
        })
        if(data.status==200||data.status==201){
            alert("Expenses recorded")
            setform({rent:0,packaging:0,transport:0,wages:0,electricty:0,gas:0})
        }
        else{
            throw new Error(data.data);
        }
    }
    return(<>
    <div style={{width:"100%",gap:'3px',display:'flex',flexDirection:"column",height:"fit-content"}}>
        <div style={{width:"100%",display:'flex',flexDirection:"column",height:"fit-content"}}>
            <Head_text>Create Expenses</Head_text>
            <Child_text1>Use the form below to create expenses</Child_text1>
        </div>
        <Card size={"2"} style={{width:"560px",gap:"10px",display:"flex",flexDirection:"column"}}>
        <div style={{width:"100%",gap:'3px',display:'flex',flexDirection:"column",height:"fit-content"}}>
        <Label>Rent</Label>
        <TextField.Root size={"3"} variant="surface" color="plum" 
                               type="number" name="rent" onChange={change} value={form.rent} required
                  style={{width:"100%",fontFamily:"Inter"}}></TextField.Root>
        {/* <input type="number" name="rent" onChange={change} value={form.rent}></input> */}
</div>
        <div style={{width:"100%",gap:'3px',display:'flex',flexDirection:"column",height:"fit-content"}}>
        <Label>Packaging</Label>
        <TextField.Root size={"3"} variant="surface" color="plum" 
                       type="number" name="packaging" onChange={change} value={form.packaging} required
          style={{width:"100%",fontFamily:"Inter"}}></TextField.Root>

        {/* <input type="number" name="packaging" onChange={change} value={form.packaging}></input> */}
</div>
        <div style={{width:"100%",gap:'3px',display:'flex',flexDirection:"column",height:"fit-content"}}>
        <Label>Transport</Label>
        <TextField.Root size={"3"} variant="surface" color="plum" 
                       type="number" name="transport" onChange={change} value={form.transport} required
          style={{width:"100%",fontFamily:"Inter"}}></TextField.Root>
{/* 
        <input type="number" name="transport" onChange={change} value={form.transport}></input> */}
</div>
        <div style={{width:"100%",gap:'3px',display:'flex',flexDirection:"column",height:"fit-content"}}>
        <Label>Wages</Label>
        <TextField.Root size={"3"} variant="surface" color="plum" 
                       type="number" name="wages" onChange={change} value={form.wages} required
          style={{width:"100%",fontFamily:"Inter"}}></TextField.Root>

        {/* <input type="number" name="wages" onChange={change} value={form.wages}></input> */}
</div>
        
        <div style={{width:"100%",gap:'3px',display:'flex',flexDirection:"column",height:"fit-content"}}>
        <Label>Electricity</Label>
        <TextField.Root size={"3"} variant="surface" color="plum" 
                       type="number" name="electricty" onChange={change} value={form.electricty} required
          style={{width:"100%",fontFamily:"Inter"}}></TextField.Root>

        {/* <input type="number" name="electricty" onChange={change} value={form.electricty}></input> */}
        </div>
        <div style={{width:"100%",display:"flex"}}>
    <button
    type="button" onClick={submit}
    style={{width:"132px",padding:"5px",borderRadius:"5px",border:"1px solid black",cursor:"pointer",background:"#742C38"}}>
        <Text style={{color:"white"}}>Create</Text>
    </button>
  </div>
        </Card>
    </div>
    </>)
}