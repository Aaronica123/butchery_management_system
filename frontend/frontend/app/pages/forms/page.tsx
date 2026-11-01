"use client"
import { final_ax } from "@/components/axios"
import { ReactElement, useState } from "react"
export default function Submit(){
    const [form,setform]=useState({first_name:"",last_name:"",quantity:0,meat:""})
    const change=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const{name,value}=e.target;
        setform((data)=>({
            ...data,
            [name]:value
        }))
    }
    const submit=async()=>{
        console.log(form)
        const data=await final_ax.post("/purchase/create",{
            first_name:form.first_name,
            last_name:form.last_name,
            meat:form.meat,
            quantity:102
        })
        if(data.status==200||data.status==201){
            alert("Purchase created successfully");
            return;
        }
        else{
            throw new Error(data.data);
        }
    }
    return(<>
    <form>
        <label>First Name</label>
        <input type="text" onChange={change} placeholder="enter first name" value={form.first_name} name="first_name" required></input>
        <label>Last Name</label>
        <input type="text" onChange={change} placeholder="enter last name" value={form.last_name} name="last_name" required></input>
        <label>Meat</label>
        <input type="text" onChange={change} placeholder="enter meat" value={form.meat} name="meat" required></input>
        <label>Quantity</label>
        <input type="number" onChange={change} placeholder="enter quantity" value={form.quantity} name="quantity" required></input>
        <button onClick={submit} type="button">Submit</button>
    </form>
    </>)
}