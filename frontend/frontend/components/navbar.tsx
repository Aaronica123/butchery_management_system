"use client"
import { LayoutDashboard, LogOut, MoveLeftIcon, Sidebar, SidebarClose, SidebarOpen } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { LayoutDashboardIcon } from "lucide-react";
import { final_ax } from "./axios";
import { val } from "./supabase";
import Head_text from "./text";
import { Text } from "@radix-ui/themes";

export default function Navbar({children}:{children: React.ReactNode;}){
    const[act,setact]=useState(false)
    const route=useRouter()
    const [btn,setbtn]=useState({b1:true,b2:false,b3:false,b4:false,b5:false,b6:false,b7:false,b8:false,b9:false})

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
            <div style={{width:"100%",height:"fit-content",display:"flex",padding:"10px"}}>
                <button onClick={()=>{route.push('/pages/forms');setact(false);click('b2')}}
                  style={{
                    cursor:"pointer",padding:"6px",borderRadius:"5px",gap:"5px",border:btn.b2?"none":"solid 1px #DEDAD4",
                    justifyContent:"left",display:"flex",flexDirection:"row",alignItems:"center",
                    backgroundColor:btn.b2?"#742C38":"#FFF9F0",width:"240px",height:"fit-content"}}
                    >

                    <LayoutDashboard color={btn.b2?"#FFFFFF":"#6B5E56" } style={{marginRight:"10px"}}></LayoutDashboard>
                    
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

                    <LayoutDashboard color={btn.b9?"#FFFFFF":"#6B5E56" } style={{marginRight:"10px"}}></LayoutDashboard>
                    
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
                    
                    <LayoutDashboard color={btn.b3?"#FFFFFF":"#6B5E56" }style={{marginRight:"10px"}}></LayoutDashboard>
                    
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
                        
                        <LayoutDashboard color={btn.b4?"#FFFFFF":"#6B5E56"} style={{marginRight:"10px"}}></LayoutDashboard>
                    
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
                            <LayoutDashboard color={btn.b5?"#FFFFFF":"#6B5E56"} style={{marginRight:"10px"}}></LayoutDashboard>
                    
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
                            <LayoutDashboard color={btn.b6?"#FFFFFF":"#6B5E56"} style={{marginRight:"10px"}}></LayoutDashboard>
                    
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
                        
                        <LayoutDashboard color={btn.b7?"#FFFFFF":"#6B5E56"} style={{marginRight:"10px"}}></LayoutDashboard>
                    
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
                    
                    <LayoutDashboard color={btn.b8?"#FFFFFF":"#6B5E56"} style={{marginRight:"10px"}}></LayoutDashboard>
                    
                    <Text size={"4"} weight={"medium"} style={{fontFamily:"Inter",color:btn.b8?"#FFFFFF":"#6B5E56"}}>
                       Fetch Sales
                    </Text></button>
            </div>
            
            </div>
            
            <div style={{width:"100%",height:"fit-content",display:"flex",padding:"10px"}}>
                <button onClick={logout} type="button" style={{
                    border:"1px solid #D6C9C0",
                    cursor:"pointer",width:"240px",borderRadius:"5px",backgroundColor:"#FFF9F0",padding:"3px",display:"flex",flexDirection:"row",justifyContent:"left",alignItems:"center"}}>
                    <LogOut color="#742C38"  style={{marginRight:"10px"}}></LogOut>
                    <Text size={"4"} weight={"medium"} style={{fontFamily:"Inter",color:"#742C38"}}>
                       Logout
                    </Text>
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