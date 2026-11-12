

import { Badge, Card } from "@radix-ui/themes"
import { Theme } from "@radix-ui/themes/dist/cjs/index.js";
import { Button } from "@radix-ui/themes";
import { Child_text, Child_text1, Header } from "@/components/text";
import { Text } from "@radix-ui/themes";
import { ArrowBigDownDash, ArrowDownRight, ArrowDownUp, ArrowUpAZ, ArrowUpRight } from "lucide-react";
import { val } from "@/components/supabase";
import { Suspense } from "react";
export default function Render(){
    return(
        <Suspense fallback={<p>Fetching</p>}>
            <Dashboard/>
        </Suspense>
    )
}
async function Dashboard(){
    const data=await val.schema("butchery_schema").from("total").select("*")
    console.log(data.data?.[0])
   if(data.data){

   }
    const fetched=data?.data?.map((va)=>Object.values(va))
    console.log(fetched)
    return(
        <>
       
        <div style={{width:"100%",height:"100%",display:"flex",flexDirection:"column",gap:"20px"}}>
            <div style={{width:"100%",height:"fit-content",display:"flex",flexDirection:"column",gap:"5px"}}>
               <Header>Welcome User</Header>
               <Child_text>View Todays Butchery Data</Child_text>
            </div>
            <div style={{width:"100%",height:"fit-content",display:"flex",flexDirection:"column",gap:"8px"}}>
            <div style={{width:"100%",height:"fit-content",gap:"5px",display:"flex"}}>
                <Card size={"1"} variant="classic" style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"flex-end"}}>
                 <Child_text1>Sales</Child_text1>
                
                <Text size={"8"} weight={"regular"} style={{fontFamily:"lora"}}>{data.data?.[0].sales_sum}</Text>
                
                {/* <Badge color="red" style={{marginTop:"10px"}}>15%
                    <ArrowDownRight></ArrowDownRight>
                </Badge> */}
                </Card>
                <Card size={"1"} variant="classic" style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"flex-end"}}>
                 <Child_text1>Expenses</Child_text1>
                
                <Text size={"8"} weight={"regular"} style={{fontFamily:"lora"}}>{data.data?.[0].expenses_sum}</Text>
                {/* <Badge color="green" style={{marginTop:"10px"}}>15%
                    <ArrowUpRight></ArrowUpRight>
                </Badge> */}
                
                </Card>
                
            </div>
            <div style={{width:"100%",height:"fit-content",gap:"5px",display:"flex"}}>
                <Card size={"1"} variant="classic" style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"flex-end"}}>
                 <Child_text1>Profit</Child_text1>
                
                <Text size={"8"} weight={"regular"} style={{fontFamily:"lora"}}>{data.data?.[0].profit}</Text>
                
                {/* <Badge color="red" style={{marginTop:"10px"}}>15%
                    <ArrowDownRight></ArrowDownRight>
                </Badge> */}
                </Card>
                <Card size={"1"} variant="classic" style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"flex-end"}}>
                 <Child_text1>Pending balances</Child_text1>
                
                <Text size={"8"} weight={"regular"} style={{fontFamily:"lora"}}>{data.data?.[0].balance_sum}</Text>
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