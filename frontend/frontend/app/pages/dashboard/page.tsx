"use client"

import { Badge, Card } from "@radix-ui/themes"
import { Theme } from "@radix-ui/themes/dist/cjs/index.js";
import { Button } from "@radix-ui/themes";
export default function Dashboard(){
    return(
        <>
       
        <div style={{width:"100%",height:"100%",display:"flex",flexDirection:"column"}}>
            <div style={{width:"100%",height:"fit-content"}}>
                <h2>Welcome User</h2>
            </div>
            <div style={{width:"100%",height:"fit-content",display:"flex",flexDirection:"column",gap:"5px"}}>
            <div style={{width:"100%",height:"fit-content",gap:"5px",display:"flex"}}>
                <Card size={"1"} variant="classic" style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"flex-end"}}>
                   
                 <h1 style={{marginBottom:"-10px",marginTop:"-3px"}}>Sales</h1>
                <h2 style={{color:"red"}}>100</h2>
                <Badge color="red" variant="soft" size={"2"}>300%</Badge>
                
                </Card>
                <Card size={"1"} variant="classic" style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"flex-end"}}>
                   
                 <h1 style={{marginBottom:"-10px",marginTop:"-3px"}}>Expenses</h1>
                <h2 style={{color:"green"}}>100</h2>
                <Badge color="green" variant="soft" size={"2"}>300%</Badge>
                
                </Card>
                
            </div>
            
            </div>
            

        </div>
        
        </>
    )
}