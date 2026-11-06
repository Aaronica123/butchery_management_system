"use client"
import { LayoutDashboard, MoveLeftIcon } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { final_ax } from "./axios";
import { val } from "./supabase";

export default function Navbar({children}:{children: React.ReactNode;}){
    const[act,setact]=useState(false)
    const route=useRouter()
    const logout=async()=>{
        const{error}=await val.auth.signOut({scope:"local"});
        if(error){
            alert("error encountered logout failed")
            throw new Error("Could not log out")
        }
        else{
            alert("logout successfull");
            route.push("/");
        }

    }
    return(
        <>
        <div style={{width:"100%",height:"100%",display:"flex",flexDirection:"column"}}>
            <div style={{position:"absolute",inset:0, zIndex:2,backdropFilter:"blur(10px)",
                background:"rgba(0,0,0,0.15)",opacity:act?1:0,pointerEvents:act?"auto":"none"}} onClick={()=>setact(false)}>
            </div>
            <div style={{position:"absolute",width:"fit-content",inset:0,height:"100%",
                zIndex:5,transform:act?"translateX(0)":"translateX(-100%)",
                transition:"ease-in-out transform 300ms",flexGrow:"0",display:"flex",flexDirection:"column",
                backgroundColor:"whitesmoke"
            }}>
            <div style={{display:"flex",flexDirection:"row",width:"100%",
                justifyContent:"right",height:"fit-content",alignItems:"center"}}>
            
            <MoveLeftIcon color="blue" size={"30"} onClick={()=>setact(false)}></MoveLeftIcon>
            </div>
            <div style={{width:"100%",height:"fit-content",display:"flex",padding:"5px"}}>
                <button onClick={()=>route.push('/pages/forms')} style={{height:"fit-content"}}>Create Purchase</button>
            </div>
            <div style={{width:"100%",height:"fit-content",display:"flex",padding:"5px"}}>
                <button onClick={()=>route.push('/pages/forms/stock')} style={{height:"fit-content"}}>Create Stock</button>
            </div>
            <div style={{width:"100%",height:"fit-content",display:"flex",padding:"5px"}}>
                <button onClick={()=>route.push('/pages/forms/stock/fetch')} style={{height:"fit-content"}}>Fetch Stock</button>
            </div>
             <div style={{width:"100%",height:"fit-content",display:"flex",padding:"5px"}}>
                <button onClick={()=>route.push('/pages/forms/expenses')} style={{height:"fit-content"}}>Create Expense</button>
            </div>
            <div style={{width:"100%",height:"fit-content",display:"flex",padding:"5px"}}>
                <button onClick={()=>route.push('/pages/forms/expenses/fetch')} style={{height:"fit-content"}}>Fetch Expense</button>
            </div>
             <div style={{width:"100%",height:"fit-content",display:"flex",padding:"5px"}}>
                <button onClick={()=>route.push('/pages/forms/sales')} style={{height:"fit-content"}}>Create Sales</button>
            </div>
             <div style={{width:"100%",height:"100%",display:"flex",padding:"5px"}}>
                <button onClick={()=>route.push('/pages/forms/sales/fetch')} style={{height:"fit-content"}}>Fetch Sales</button>
            </div>
            <div style={{width:"100%",height:"fit-content",display:"flex",padding:"5px"}}>
                <button onClick={logout} type="button">Logout</button>
            </div>
            </div>
            <div style={{display:"flex",width:"100%",height:"fit-content"}}>
                
                <LayoutDashboard color="blue" size={"40"} onClick={()=>setact(true)}></LayoutDashboard>
                This is the header
            </div>  
            <div>
                {children}
                </div>  
        </div>
        </>
    )
};