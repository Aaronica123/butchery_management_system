"use client"
import { final_ax } from "@/components/axios"
import { useEffect, useState } from "react"
import {use} from "react"
export default function Submit(){
    const [form,setform]=useState({first_name:"",last_name:"",quantity:0,meat:""})
    const [val,setvalue]=useState([]);
    const[ar,setar]=useState({first_name:"",last_name:"",full_name:"",meat:"",amount:0})
    const arr_change=(e:React.ChangeEvent<HTMLSelectElement>)=>{
        const{name,value}=e.target;
        console.log(typeof(value))
        console.log(value)
        
        if(name=="full_name"){
        setar((data)=>({
            ...data,
            [name]:String(val[Number(value)][1])+String(val[Number(value)][2])
        }))
        setar((data)=>({
            ...data,
            first_name:val[Number(value)][1],
            last_name:val[Number(value)][2]
        }))
    }
    if(name=="meat"){
        setar((data)=>({
            ...data,
            [name]:val[Number(value)][3],
            amount:val[Number(value)][4]
        }))

    }
    
        console.log(ar);
    }
    const change=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const{name,value}=e.target;
        setform((data)=>({
            ...data,
            [name]:value
        }))
    }
    const fetch1=async()=>{
        const data=await final_ax.get("/purchase/fetch");
        const fetched=data.data.map((data:{id: "",
        first_name: "",
        last_name: "",
        meat: "",
        amount: ""
    })=>Object.values(data))
        console.log(fetched)
        setvalue(fetched);
    }
    
    useEffect(()=>{
        fetch1();
    },[])
    const submit=async()=>{
        console.log(form)
        const data=await final_ax.post("/purchase/create",{
            first_name:ar.first_name,
            last_name:ar.last_name,
            meat:ar.meat,
            quantity:231
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
        <select onChange={arr_change} name="full_name">
            <option value={""}>Choose option</option>
        {val.map((data:[number,"","","",number],key:number)=>(
            <option value={key} key={key}>
                {data.map((d,k)=>(
                    k==1||k==2?<span key={k}>{d}</span>:""
                ))}
            </option>
        ))}
        </select>
        <select onChange={arr_change} name="meat">
        <option value={""}>Choose meat</option>
        {val.map((data:[number,"","","",number],key:number)=>(
            data[1]+data[2]==ar.full_name?
            
            
            <option key={key} value={key}>
                {data.map((d,k)=>(
                    k==3?d:""
                ))}
            </option>
            
            :""
        ))}
        </select>
        <select>
        {val.map((data:[number,"","","",number],key:number)=>(
            data[3]==ar.meat&&data[1]+data[2]==ar.full_name?
            <option key={key}>
                {data.map((d,k)=>(
                    k==4?d:""
                ))}
            </option>
            :""
        ))}
        </select>
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