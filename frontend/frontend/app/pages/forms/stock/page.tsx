"use client";
import { useState } from "react"
import { final_ax } from "@/components/axios";
import { Card, Select, Theme,TextField,Text } from "@radix-ui/themes";
import Head_text, { Child_text1,Child_text, Label,Header } from "@/components/text";
export default function Stock_form(){
    const [form,setform]=useState({wasted:0,received:0,sold:0,transfered:0})
    const[meat,setmeat]=useState({meat:""})
    const change=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const{name,value}=e.target;
        setform((data)=>({
            ...data,
            [name]:value
        }))
    }
    const meat_change=(e:React.ChangeEvent<HTMLSelectElement>)=>{
        const{name,value}=e.target;
        setmeat((data)=>({
            ...data,
            [name]:value
        }))
    }
    const submit=async()=>{
        console.log(form)
        const data=await final_ax.post("/main-branch/create",{
            transfered:Number(form.transfered),
            received:Number(form.received),
            sold:Number(form.sold),
            wasted:Number(form.wasted),
            meat:meat.meat
        })
        if(data.status==200||data.status==201){
            alert("Created stock successfully")
            setform({wasted:0,received:0,sold:0,transfered:0})
            return;
        }
        else{
            throw new Error(data.data);
        }
    }
return(

<>
<div style={{width:"100%",display:'flex',flexDirection:"column",height:"fit-content",gap:"10px"}}>

<div style={{width:"100%",display:'flex',flexDirection:"column",height:"fit-content",gap:"1px"}}>
    <Header>Create Stock</Header>
    <Child_text>Create stock using the following form</Child_text>
</div>
<Card size={"2"} style={{width:"560px",display:'flex',flexDirection:"column", gap:"8px"}}>
<div style={{width:"100%",gap:'3px',display:'flex',flexDirection:"column",height:"fit-content"}}> 
<Label>Select Meat</Label>    
<select name="meat" onChange={meat_change} style={{width:"100%",padding:"5px"}}>
    <option value="">Choose Meat</option>
    <option value={"beef"}>Beef</option>
    <option value={"chicken"}>Chicken</option>
    <option value={"pork"}>Pork</option>
    <option value={"goat"}>Goat</option>
</select>
</div>
<div style={{width:"100%",gap:'3px',display:'flex',flexDirection:"column",height:"fit-content"}}>

<Label>Sold Meat</Label>
<TextField.Root size={"3"} variant="surface" color="plum" 
               name="sold" value={form.sold} placeholder="Enter meat amount" type="number" onChange={change}
  style={{width:"100%",fontFamily:"Inter"}}></TextField.Root>
{/* <input name="sold" value={form.sold} placeholder="Enter value" type="number" onChange={change}></input> */}
</div>

<div style={{width:"100%",gap:'3px',display:'flex',flexDirection:"column",height:"fit-content"}}>
<Label>Transfered Meat</Label>    
{/* <label>Transfered Meat</label> */}
<TextField.Root size={"3"} variant="surface" color="plum" 
               name="transfered" onChange={change} value={form.transfered} placeholder="Enter value" type="number"
  style={{width:"100%",fontFamily:"Inter"}}></TextField.Root>
{/* <input name="transfered" onChange={change} value={form.transfered} placeholder="Enter value" type="number"></input> */}

</div>
<div style={{width:"100%",gap:'3px',display:'flex',flexDirection:"column",height:"fit-content"}}>
<Label>Wasted Meat</Label>
<TextField.Root size={"3"} variant="surface" color="plum" 
              name="wasted" onChange={change} value={form.wasted} placeholder="Enter value" type="number"
  style={{width:"100%",fontFamily:"Inter"}}></TextField.Root>
{/* <input name="wasted" onChange={change} value={form.wasted} placeholder="Enter value" type="number"></input> */}
</div>

<div style={{width:"100%",gap:'3px',display:'flex',flexDirection:"column",height:"fit-content"}}>
<Label>Received Meat</Label>

<TextField.Root size={"3"} variant="surface" color="plum" 
               name="received" onChange={change} value={form.received} placeholder="Enter value" type="number"
  style={{width:"100%",fontFamily:"Inter"}}></TextField.Root>
{/* <input name="received" onChange={change} value={form.received} placeholder="Enter value" type="number"></input> */}
</div>
<div style={{width:"100%",display:"flex"}}>
    <button
    type="button" onClick={submit}
    style={{width:"132px",padding:"5px",borderRadius:"5px",border:"1px solid black",cursor:"pointer",background:"#742C38"}}>
        <Text style={{color:"white"}}>Submit</Text>
    </button>
  </div>
{/* <button onClick={submit} type="button">Submit</button> */}
</Card>
</div>
</>)
}