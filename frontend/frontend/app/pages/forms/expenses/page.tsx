"use client"

import { final_ax } from "@/components/axios";
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
            gas:Number(form.gas),
            electricity:Number(form.electricty)
        })
        if(data.status==200||data.status==201){
            alert("Expenses recorded")
        }
        else{
            throw new Error(data.data);
        }
    }
    return(<>
    <form>
        <label>Rent</label>
        <input type="number" name="rent" onChange={change} value={form.rent}></input>
        <label>Packaging</label>
        <input type="number" name="packaging" onChange={change} value={form.packaging}></input>
        <label>Transport</label>
        <input type="number" name="transport" onChange={change} value={form.transport}></input>
        <label>Wages</label>
        <input type="number" name="wages" onChange={change} value={form.wages}></input>
        <label>Gas</label>
        <input type="number" name="gas" onChange={change} value={form.gas}></input>
        <label>Electricity</label>
        <input type="number" name="electricty" onChange={change} value={form.electricty}></input>
        <button onClick={submit} type="button">Create</button>
    </form>
    </>)
}