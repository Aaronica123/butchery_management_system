"use client"
import { LayoutDashboard, LogOut, MoveLeftIcon, Sidebar,SquareExclamationPoint, SidebarClose, SidebarOpen,Inspect,FilePlus,BadgeDollarSign, FileLineChart,LoaderIcon, Bell } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { LayoutDashboardIcon } from "lucide-react";
import { final_ax } from "./axios";
import { val } from "./supabase";
import Head_text from "./text";
import { Spinner, Text } from "@radix-ui/themes";
import { toast } from "sonner";
import { Child_text1 } from "./text";
export default function Navbar({children}:{children: React.ReactNode;}){
    const[act,setact]=useState(false)
    const route=useRouter()
    const [btn,setbtn]=useState({b1:true,b2:false,b3:false,b4:false,b5:false,b6:false,b7:false,b8:false,b9:false,b10:false})
    const [load,setload]=useState(false);
    function click(m:string){
        const f=Object.keys(btn);
        console.log(f)
        f.forEach((val)=>{
            if(val==m){
                setbtn((da)=>({
                    ...da,
                    [val]:true
                }))
            }
            else{
                setbtn((da)=>({
                    ...da,
                    [val]:false
                }))
                
            }
        }
        
        )
        console.log(btn)
        return;
    }
    const logout=async()=>{
        setload(true);
        const id=toast(
  <div style={{display:"flex",flexDirection:"row",alignItems:"center", gap:"10px",}}>
  <LoaderIcon color="#742C38"></LoaderIcon>       
  <div style={{width:"fit-content",display:"flex",flexDirection:"column"}}>
  Logging Out
  <Child_text1>Please wait while we log you out</Child_text1>
  </div>
  </div>,{position:"top-right",action:{label:"Close",onClick:()=>{}},actionButtonStyle:{background:"#D6C9C0",color:"#742C38",},style:{background:"#FAF9F6",border:"1px solid #DEDAD4"}});
 
        const{error}=await val.auth.signOut({scope:"local"});
        if(error){
            // alert("error encountered logout failed")
            setload(false)
            toast.dismiss(id)

            toast(
  <div style={{display:"flex",flexDirection:"row",alignItems:"center", gap:"10px",}}>
  <SquareExclamationPoint color="#742C38"></SquareExclamationPoint>       
  <div style={{width:"fit-content",display:"flex",flexDirection:"column"}}>
  Logout Failed
  <Child_text1>Could not logout try again later</Child_text1>
  </div>
  </div>,{position:"top-right",action:{label:"Close",onClick:()=>{}},actionButtonStyle:{background:"#D6C9C0",color:"#742C38",},style:{background:"#FAF9F6",border:"1px solid #DEDAD4"}});
 

            throw new Error("Could not log out")
            
        }
        else{
            setload(false)
            toast(
  <div style={{display:"flex",flexDirection:"row",alignItems:"center", gap:"10px",}}>
    
  <Bell color="#742C38"></Bell>       
  <div style={{width:"fit-content",display:"flex",flexDirection:"column"}}>
  Logout Success 
  <Child_text1>You have been logged out successfully</Child_text1>
  </div>
  </div>,{position:"top-right",action:{label:"Close",onClick:()=>{}},actionButtonStyle:{background:"#D6C9C0",color:"#742C38",},style:{background:"#FAF9F6",border:"1px solid #DEDAD4"}});
 
            // alert("logout successfull");
            route.push("/");
        }

    }
    return(
        <>
        {/* <button type="button" onClick={()=>click('b3')}></button> */}
        <div style={{width:"100%",height:"100%",display:"flex",flexDirection:"column",overflow:"hidden"}}>
            <div style={{position:"absolute",inset:0, zIndex:2,backdropFilter:"blur(10px)",
                height:"100%",width:"100%",
                background:"rgba(0,0,0,0.15)",opacity:act?1:0,pointerEvents:act?"auto":"none"}} onClick={()=>setact(false)}>
            </div>
            <div style={{position:"absolute",width:"288px",inset:0,height:"100%",
                zIndex:5,transform:act?"translateX(0)":"translateX(-100%)",
                transition:"ease-in-out transform 300ms",flexGrow:"0",display:"flex",flexDirection:"column",
                background:"#FAF9F6",visibility: act ? "visible" : "hidden",

            }}>
            <div style={{display:"flex",flexDirection:"row",width:"100%",
                height:"fit-content",alignItems:"center"
                ,gap:"10px",borderBottom:"#6B5E56 solid 1px"
                }}>
            
            <div style={{width:"100%",justifyContent:"right",padding:"15px",borderRadius:"10px",display:"flex"}}>        
            <Head_text>Butchery Management System</Head_text>
            </div>
            <div style={{cursor:"pointer",width:"fit-content",justifyContent:"right",padding:"8px",display:"flex"}}>
            <div style={{width:"fit-content",display:"flex",padding:"5px",background:"#f0efed",borderRadius:"10px"}}>   
            <SidebarClose
            color="#742C38" size={"30"} onClick={()=>setact(false)}
            ></SidebarClose>
            </div> 
            </div>
            {/* <MoveLeftIcon color="blue" size={"30"} ></MoveLeftIcon> */}
            </div>
            <div style={{width:"100%",height:"100%",display:"flex",flexDirection:"column",overflowY:"scroll",
  overflowX:"hidden",}}>
            <div style={{width:"100%",height:"fit-content",display:"flex",padding:"10px"}}>
                <button onClick={()=>{route.push('/pages/dashboard');setact(false);click('b1')}} style={{
                    cursor:"pointer",padding:"6px",borderRadius:"5px",gap:"5px",border:btn.b1?"none":"solid 1px #DEDAD4",
                    justifyContent:"left",display:"flex",flexDirection:"row",alignItems:"center",
                    backgroundColor:btn.b1?"#742C38":"#FFF9F0",width:"240px",height:"fit-content",
                    }}>
                    
                    <LayoutDashboard color={btn.b1?"#FFF9F0":"#6B5E56" }style={{marginRight:"10px"}}></LayoutDashboard>
                    
                    <Text size={"4"} weight={"medium"} style={{fontFamily:"Inter",color:btn.b1?"#FFFFFF":"#6B5E56" }}>
                        Dashboard
                    </Text>
                </button>
            </div>
            <div style={{width:"100%",height:"100%",display:"flex",padding:"10px"}}>
                <button onClick={()=>{route.push('/pages/forms/analysis');setact(false);click('b10')}} style={{
                    cursor:"pointer",padding:"6px",borderRadius:"5px",gap:"5px",border:btn.b10?"none":"solid 1px #DEDAD4",
                    justifyContent:"left",display:"flex",flexDirection:"row",alignItems:"center",
                    backgroundColor:btn.b10?"#742C38":"#FFF9F0",width:"240px",height:"fit-content"}}>
                    
                    <Inspect color={btn.b10?"#FFFFFF":"#6B5E56"} style={{marginRight:"10px"}}></Inspect>
                    
                    <Text size={"4"} weight={"medium"} style={{fontFamily:"Inter",color:btn.b10?"#FFFFFF":"#6B5E56"}}>
                      View Analytics
                    </Text></button>
            </div>
            <div style={{width:"100%",height:"fit-content",display:"flex",padding:"10px"}}>
                <button onClick={()=>{route.push('/pages/forms');setact(false);click('b2')}}
                  style={{
                    cursor:"pointer",padding:"6px",borderRadius:"5px",gap:"5px",border:btn.b2?"none":"solid 1px #DEDAD4",
                    justifyContent:"left",display:"flex",flexDirection:"row",alignItems:"center",
                    backgroundColor:btn.b2?"#742C38":"#FFF9F0",width:"240px",height:"fit-content"}}
                    >

                    <FilePlus color={btn.b2?"#FFFFFF":"#6B5E56" } style={{marginRight:"10px"}}></FilePlus>
                    
                    <Text size={"4"} weight={"medium"} style={{fontFamily:"Inter",color:btn.b2?"#FFFFFF":"#6B5E56"}}>
                        Create Purchase
                    </Text>    
                        
                        </button>
            </div>

            <div style={{width:"100%",height:"fit-content",display:"flex",padding:"10px"}}>
                <button onClick={()=>{route.push('/pages/forms/purchase_fetch');setact(false);click('b9')}}
                  style={{
                    cursor:"pointer",padding:"6px",borderRadius:"5px",gap:"5px",border:btn.b9?"none":"solid 1px #DEDAD4",
                    justifyContent:"left",display:"flex",flexDirection:"row",alignItems:"center",
                    backgroundColor:btn.b9?"#742C38":"#FFF9F0",width:"240px",height:"fit-content"}}
                    >

                    <FileLineChart color={btn.b9?"#FFFFFF":"#6B5E56" } style={{marginRight:"10px"}}></FileLineChart>
                    
                    <Text size={"4"} weight={"medium"} style={{fontFamily:"Inter",color:btn.b9?"#FFFFFF":"#6B5E56"}}>
                        Fetch Purchase
                    </Text>    
                        
                        </button>
            </div>        

            <div style={{width:"100%",height:"fit-content",display:"flex",padding:"10px"}}>
                <button onClick={()=>{route.push('/pages/forms/stock');setact(false);click('b3')}} 
                style={{
                    cursor:"pointer",padding:"6px",borderRadius:"5px",gap:"5px",border:btn.b3?"none":"solid 1px #DEDAD4",
                    justifyContent:"left",display:"flex",flexDirection:"row",alignItems:"center",
                    backgroundColor:btn.b3?"#742C38":"#FFF9F0",width:"240px",height:"fit-content"}}
                
                >
                    
                    <FilePlus color={btn.b3?"#FFFFFF":"#6B5E56" }style={{marginRight:"10px"}}></FilePlus>
                    
                    <Text size={"4"} weight={"medium"} style={{fontFamily:"Inter",color:btn.b3?"#FFFFFF":"#6B5E56"}}>
                        Create Stock
                    </Text>  
                
                </button>
            </div>
            <div style={{width:"100%",height:"fit-content",display:"flex",padding:"10px"}}>
                <button onClick={()=>{route.push('/pages/forms/stock/fetch');setact(false);click('b4')}} style={{
                    cursor:"pointer",padding:"6px",borderRadius:"5px",gap:"5px",border:btn.b4?"none":"solid 1px #DEDAD4",
                    justifyContent:"left",display:"flex",flexDirection:"row",alignItems:"center",
                    backgroundColor:btn.b4?"#742C38":"#FFF9F0",width:"240px",height:"fit-content"}}>
                        
                        <FileLineChart color={btn.b4?"#FFFFFF":"#6B5E56"} style={{marginRight:"10px"}}></FileLineChart>
                    
                    <Text size={"4"} weight={"medium"} style={{fontFamily:"Inter",color:btn.b4?"#FFFFFF":"#6B5E56"}}>
                        Fetch Stock
                    </Text>  
                        </button>
            </div>
             <div style={{width:"100%",height:"fit-content",display:"flex",padding:"10px"}}>
                <button onClick={()=>{route.push('/pages/forms/expenses');setact(false);click('b5')}} style={{
                    cursor:"pointer",padding:"6px",borderRadius:"5px",gap:"5px",border:btn.b5?"none":"solid 1px #DEDAD4",
                    justifyContent:"left",display:"flex",flexDirection:"row",alignItems:"center",
                    backgroundColor:btn.b5?"#742C38":"#FFF9F0",width:"240px",height:"fit-content"}}>
                            <FilePlus color={btn.b5?"#FFFFFF":"#6B5E56"} style={{marginRight:"10px"}}></FilePlus>
                    
                    <Text size={"4"} weight={"medium"} style={{fontFamily:"Inter",color:btn.b5?"#FFFFFF":"#6B5E56"}}>
                        Create Expense
                    </Text>  
                        
                       </button>
            </div>
            <div style={{width:"100%",height:"fit-content",display:"flex",padding:"10px"}}>
                <button onClick={()=>{route.push('/pages/forms/expenses/fetch');setact(false);click('b6')}} style={{
                    cursor:"pointer",padding:"6px",borderRadius:"5px",gap:"5px",border:btn.b6?"none":"solid 1px #DEDAD4",
                    justifyContent:"left",display:"flex",flexDirection:"row",alignItems:"center",
                    backgroundColor:btn.b6?"#742C38":"#FFF9F0",width:"240px",height:"fit-content"}}>
                            <FileLineChart color={btn.b6?"#FFFFFF":"#6B5E56"} style={{marginRight:"10px"}}></FileLineChart>
                    
                    <Text size={"4"} weight={"medium"} style={{fontFamily:"Inter",color:btn.b6?"#FFFFFF":"#6B5E56"}}>
                       Fetch Expense
                    </Text>  
                        </button>
            </div>
             <div style={{width:"100%",height:"fit-content",display:"flex",padding:"10px"}}>
                <button onClick={()=>{route.push('/pages/forms/sales');setact(false);click('b7')}} style={{
                    cursor:"pointer",padding:"6px",borderRadius:"5px",gap:"5px",border:btn.b7?"none":"solid 1px #DEDAD4",
                    justifyContent:"left",display:"flex",flexDirection:"row",alignItems:"center",
                    backgroundColor:btn.b7?"#742C38":"#FFF9F0",width:"240px",height:"fit-content"}}>
                        
                        <FilePlus color={btn.b7?"#FFFFFF":"#6B5E56"} style={{marginRight:"10px"}}></FilePlus>
                    
                    <Text size={"4"} weight={"medium"} style={{fontFamily:"Inter",color:btn.b7?"#FFFFFF":"#6B5E56"}}>
                       Create Sales
                    </Text>
                       </button>
            </div>
             <div style={{width:"100%",height:"100%",display:"flex",padding:"10px"}}>
                <button onClick={()=>{route.push('/pages/forms/sales/fetch');setact(false);click('b8')}} style={{
                    cursor:"pointer",padding:"6px",borderRadius:"5px",gap:"5px",border:btn.b8?"none":"solid 1px #DEDAD4",
                    justifyContent:"left",display:"flex",flexDirection:"row",alignItems:"center",
                    backgroundColor:btn.b8?"#742C38":"#FFF9F0",width:"240px",height:"fit-content"}}>
                    
                    <FileLineChart color={btn.b8?"#FFFFFF":"#6B5E56"} style={{marginRight:"10px"}}></FileLineChart>
                    
                    <Text size={"4"} weight={"medium"} style={{fontFamily:"Inter",color:btn.b8?"#FFFFFF":"#6B5E56"}}>
                       Fetch Sales
                    </Text></button>
            </div>
            
            
            </div>
            
            <div style={{width:"100%",height:"fit-content",display:"flex",padding:"10px"}}>
                <button onClick={logout} type="button" style={{
                    border:load?"1px black solid":"1px solid #D6C9C0",
                    cursor:"pointer",width:"240px",borderRadius:"5px",backgroundColor:load?"whitesmoke":"#FFF9F0",padding:"3px",display:"flex",flexDirection:"row",justifyContent:"left",alignItems:"center"}}>
                    {load?<div style={{display:'flex',flexDirection:"row",justifyContent:"center",alignItems:"center", gap:"5px"}}>
        <Spinner></Spinner>
      <Text size={"3"} weight={"medium"} style={{fontFamily:"Inter",color:"black"}}>
Logging Out

      </Text>
      </div>:<div style={{display:'flex',flexDirection:"row", gap:"5px"}}>
                    <LogOut color="#742C38"  style={{marginRight:"10px"}}></LogOut>
                    <Text size={"4"} weight={"medium"} style={{fontFamily:"Inter",color:"#742C38"}}>
                       Logout
                    </Text>
                    </div>
}
                </button>
                
            </div>
            </div>
            <div style={{display:"flex",alignItems:"center",width:"100%",height:"80px",gap:"5px"}}>
                <div style={{marginLeft:"15px",width:"fit-content",padding:"5px",borderRadius:"10px",backgroundColor:"#dbdbdb",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"}}>
                <SidebarOpen  color="#742C38" size={"30"} onClick={()=>setact(true)}></SidebarOpen>
                
                </div>
                <div style={{display:"flex",width:"100%",justifyContent:"right",marginRight:"10px",alignItems:"center"}}>
                <Head_text>Butchery Management System</Head_text>
                </div>
            </div>  
            <div style={{padding:"5px",borderTop:"1px solid black"}}>
                <div style={{marginLeft:"15px",}}>
                {children}
                </div>
            </div>  
        </div>
        </>
    )
};