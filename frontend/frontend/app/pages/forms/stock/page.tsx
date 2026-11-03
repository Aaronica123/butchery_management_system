"use client";
import { useState } from "react"
import { final_ax } from "@/components/axios";
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
    const meat_change=(e)=>{
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
            return;
        }
        else{
            throw new Error(data.data);
        }
    }
return(

<>
<form>
<select name="meat" onChange={meat_change}>
    <option value={"beef"}>Beef</option>
    <option value={"chicken"}>Chicken</option>
    <option value={"pork"}>Pork</option>
    <option value={"goat"}>Goat</option>
</select>

<label>Sold Meat</label>
<input name="sold" value={form.sold} placeholder="Enter value" type="number" onChange={change}></input>

<label>Transfered Meat</label>
<input name="transfered" onChange={change} value={form.transfered} placeholder="Enter value" type="number"></input>
<label>Wasted Meat</label>
<input name="wasted" onChange={change} value={form.wasted} placeholder="Enter value" type="number"></input>
<label>Received Meat</label>
<input name="received" onChange={change} value={form.received} placeholder="Enter value" type="number"></input>
<button onClick={submit} type="button">Submit</button>
</form>
</>)
}