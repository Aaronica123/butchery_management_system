"use client"

import { Badge, Card } from "@radix-ui/themes"
import { Theme } from "@radix-ui/themes/dist/cjs/index.js";
import { Button } from "@radix-ui/themes";
import { Child_text, Child_text1, Header } from "@/components/text";
import { Text } from "@radix-ui/themes";
import { ArrowBigDownDash, ArrowDownRight, ArrowDownUp, ArrowUpAZ, ArrowUpRight } from "lucide-react";
export default function Dashboard(){
    return(
        <>
       
        <div style={{width:"100%",height:"100%",display:"flex",flexDirection:"column",gap:"20px"}}>
            <div style={{width:"100%",height:"fit-content",display:"flex",flexDirection:"column",gap:"5px"}}>
               <Header>Welcome User</Header>
               <Child_text>View Todays Butchery Data</Child_text>
            </div>
            <div style={{width:"100%",height:"fit-content",display:"flex",flexDirection:"column",gap:"5px"}}>
            <div style={{width:"100%",height:"fit-content",gap:"5px",display:"flex"}}>
                <Card size={"1"} variant="classic" style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"flex-end"}}>
                 <Child_text1>Sales</Child_text1>
                
                <Text size={"8"} weight={"regular"} style={{fontFamily:"lora"}}>100</Text>
                
                {/* <Badge color="red" style={{marginTop:"10px"}}>15%
                    <ArrowDownRight></ArrowDownRight>
                </Badge> */}
                </Card>
                <Card size={"1"} variant="classic" style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"flex-end"}}>
                 <Child_text1>Expenses</Child_text1>
                
                <Text size={"8"} weight={"regular"} style={{fontFamily:"lora"}}>100</Text>
                {/* <Badge color="green" style={{marginTop:"10px"}}>15%
                    <ArrowUpRight></ArrowUpRight>
                </Badge> */}
                
                </Card>
                
            </div>
            
            </div>
            

        </div>
        
        </>
    )
}