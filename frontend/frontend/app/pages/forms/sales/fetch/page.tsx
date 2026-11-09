import { final_ax } from "@/components/axios";
import { Child_text1,Child_text,Header } from "@/components/text";
import Head_text from "@/components/text";
import { Table, Text } from "@radix-ui/themes";
import { connection } from "next/server";
import { Suspense } from "react";


export default function Render(){
    return(<>
    <Suspense fallback={<p>Fetching Sales</p>}>
    <Fetch/>
    </Suspense>
    </>)
}
async function Fetch(){
    await connection();
    const data=await final_ax.get("/sales/fetch");
    const fetched=data.data.map((val:{id:number,cash:number,mpesa:number,total:number,created:""})=>Object.values(val))

    return(<>
     <div style={{width:"100%",height:"100%",display:"flex",flexDirection:"column",gap:"8px"}}>
        <div style={{width:"100%",height:"fit-content",display:"flex",flexDirection:"column",gap:"3px"}}>
        <Header>Fetch Sales</Header>
        <Child_text>View butchery Sales below</Child_text>
        </div>
    <div style={{width:"100%",height:"430px",display:"flex",flexDirection:"column"}}>
    <Table.Root variant="surface" size={"2"} style={{borderRadius:"5px",display:"flex",height:"100%"}}>
        <Table.Header>
            <Table.Row style={{background:"#F5ECEE",borderBottom:"#DEDAD4"}}>
                <Table.Cell>
                    <Text size={"4"} weight={"medium"} style={{fontFamily:"Inter"}}>ID</Text></Table.Cell>
                              <Table.Cell>
                    <Text size={"4"} weight={"medium"} style={{fontFamily:"Inter"}}>Cash</Text></Table.Cell>
               <Table.Cell>
                    <Text size={"4"} weight={"medium"} style={{fontFamily:"Inter"}}>Mpesa</Text></Table.Cell>
                <Table.Cell>
                    <Text size={"4"} weight={"medium"} style={{fontFamily:"Inter"}}>Total</Text></Table.Cell>
               <Table.Cell>
                    <Text size={"4"} weight={"medium"} style={{fontFamily:"Inter"}}>Created</Text></Table.Cell>
             </Table.Row>
        </Table.Header>
        <Table.Body>
            {fetched.map((data:[],key:number)=>(
                    <Table.Row key={key}>
                    {data.map((val:number|string,key:number)=>(
                        <Table.Cell key={key}>
                            <Child_text1>
                            {val}
                            </Child_text1></Table.Cell>
                    ))}
                    </Table.Row>
                ))}
                <Table.Row style={{position:"absolute",bottom:"1px",display:"flex",width:"100%",borderTop:"2px solid #DEDAD4"}}>
            <Table.Cell style={{width:"100%"}}><Child_text1>1 record</Child_text1></Table.Cell>
            <Table.Cell style={{width:"100%",display:"flex",justifyContent:"right"}}><Child_text1>Amount in Ksh</Child_text1></Table.Cell>
        </Table.Row>
        </Table.Body>
    </Table.Root>
    </div>
     </div>
    {/* <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Cash</th>
                <th>Mpesa</th>
                <th>Total</th>
                <th>Created</th>
            </tr>
         </thead>
            <tbody>
                {fetched.map((data:[],key:number)=>(
                    <tr key={key}>
                    {data.map((val:number|string,key:number)=>(
                        <td key={key}>{val}</td>
                    ))}
                    </tr>
                ))}
                
            </tbody>
       
    </table> */}
    </>)
}