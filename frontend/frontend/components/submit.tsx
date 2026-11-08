
"use client"
import { Card,TextField,Text } from "@radix-ui/themes";
import { final_ax } from "./axios";
import { useState } from "react"
import Head_text, { Child_text, Label } from "./text";
export default function Submit({row}:{row:[]}){
    const [form,setform]=useState({quantity:0})
    const [val,setvalue]=useState(row);
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
    // const fetch1=async()=>{
    //     const data=await final_ax.get("/1");
    //     const fetched=data.data.map((data:{id: "",
    //     first_name: "",
    //     last_name: "",
    //     meat: "",
    //     amount: ""
    // })=>Object.values(data))
    //     console.log(fetched)
    //     setvalue(fetched);
    // }
    
    // useEffect(()=>{
    //     fetch1();
    // },[])
    const submit=async()=>{
        console.log(form)
        const data=await final_ax.post("/purchase/create",{
            first_name:ar.first_name,
            last_name:ar.last_name,
            meat:ar.meat,
            quantity:Number(form.quantity)
        })
        if(data.status==200||data.status==201){
            alert("Purchase created successfully");
            setform({quantity:0})
            return;
        }
        else{
            throw new Error(data.data);
        }
    }

    return(<>
    <div style={{width:"100%",display:'flex',flexDirection:"column",height:"fit-content",gap:"10px"}}>
    <div style={{width:"100%",display:'flex',flexDirection:"column",height:"fit-content"}}>
        <Head_text>Create Purchase</Head_text>
        <Child_text>Create purchases for butchery system using form below</Child_text>
    </div>
        <Card size={"2"} style={{width:"560px",gap:"5px",display:'flex',flexDirection:"column", gap:"8px"}}>
        <div style={{width:"100%",display:'flex',flexDirection:"row",height:"fit-content",gap:"5px"}}>
        <div style={{width:"100%",gap:"3px",display:'flex',flexDirection:"column",height:"fit-content"}}>
        <Label> Choose  Supplier</Label>    
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
        </div>
        <div style={{width:"100%",gap:"3px",display:'flex',flexDirection:"column",height:"fit-content"}}>
        <Label>Choose Meat</Label>    
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
        </div>
        <div style={{width:"100%",display:'flex',gap:"3px",flexDirection:"column",height:"fit-content"}}>
            <Label>Meat Cost</Label>
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
        </div>
        </div>
        {/* <label>First Name</label>
        <input type="text" onChange={change} placeholder="enter first name" value={form.first_name} name="first_name" required></input>
        <label>Last Name</label>
        <input type="text" onChange={change} placeholder="enter last name" value={form.last_name} name="last_name" required></input>
        <label>Meat</label>
        <input type="text" onChange={change} placeholder="enter meat" value={form.meat} name="meat" required></input> */}
        <Label>Quantity</Label>
        <TextField.Root size={"3"} variant="surface" color="plum" 
                       type="number" onChange={change} placeholder="enter quantity" value={form.quantity} name="quantity" required
          style={{width:"100%",fontFamily:"Inter"}}></TextField.Root>
        {/* <input type="number" onChange={change} placeholder="enter quantity" value={form.quantity} name="quantity" required></input> */}
        {/* <button onClick={submit} type="button">Submit</button> */}
        <div style={{width:"100%",display:"flex"}}>
    <button
    type="button" onClick={submit}
    style={{width:"132px",padding:"5px",borderRadius:"5px",border:"1px solid black",cursor:"pointer",background:"#742C38"}}>
        <Text style={{color:"white"}}>Submit</Text>
    </button>
  </div>
        </Card>
    </div>
    </>)
}