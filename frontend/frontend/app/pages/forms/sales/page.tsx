"use client"

import { final_ax } from "@/components/axios";
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
        <form>
            <label>Cash</label>
            <input onChange={change} type="number" min={0} value={form.cash} name="cash" placeholder="enter cash" required/>

            <label>Mpesa</label>
            <input onChange={change} type="number" min={0} value={form.mpesa} name="mpesa" placeholder="enter mpesa" required/>

            <button type="button" onClick={submit}>Submit</button>

        </form>
        </>
    )
}