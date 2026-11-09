import { final_ax } from "@/components/axios";
import Head_text, { Child_text, Child_text1,Header } from "@/components/text";
import { Table, Text } from "@radix-ui/themes";
import { connection } from "next/server";
import { Suspense } from "react";

export default  function Render(){
    return(<>
    <Suspense fallback={<p>Fetching expenses</p>}>
        <Expenses_Form/>
    </Suspense>
    </>)
} 

async function Expenses_Form() {
    await connection();
    const data=await final_ax.get("/expenses/fetch");
    const fetched=data.data.map((val:{id: 0,rent: 0, wages: 0,
        electricity: 0,
        transport: 0,
        gas: 0,
        packaging: 0,
        water: 0,
        total: 0,
        created: "",
        updated: ""
    })=>Object.values(val)) 

    return(<>
    <div style={{width:"100%",height:"100%",display:"flex",flexDirection:"column",gap:"8px"}}>
    <div style={{width:"100%",height:"fit-content",display:"flex",flexDirection:"column",gap:"3px"}}>
    <Header>Fetch Expenses</Header>
    <Child_text>View butchery expenses below</Child_text>
    </div>
    <div style={{width:"100%",height:"430px",display:"flex",flexDirection:"column"}}>
    <Table.Root variant="surface" size={"2"} style={{borderRadius:"5px",display:"flex",height:"100%"}}>
        <Table.Header>
            <Table.Row style={{background:"#F5ECEE",borderBottom:"#DEDAD4"}}>
                
            <Table.Cell>
                <Text size={"4"} weight={"medium"} style={{fontFamily:"Inter"}}>
                ID
                </Text></Table.Cell>
            <Table.Cell>rent</Table.Cell>
            <Table.Cell>wages</Table.Cell>
            <Table.Cell>electricity</Table.Cell>
            <Table.Cell>transport</Table.Cell>
            <Table.Cell>gas</Table.Cell>
            <Table.Cell>packaging</Table.Cell>
            <Table.Cell>water</Table.Cell>
            <Table.Cell>total</Table.Cell>
            <Table.Cell>created</Table.Cell>
            <Table.Cell>updated</Table.Cell>
            </Table.Row>
        </Table.Header>
        <Table.Body>
            {fetched.map((data:[],key:number)=>
            <Table.Row key={key}>
            {data.map((val:""|number,key:number)=>(
            <Table.Cell key={key}>
                <Child_text1>
                {val}
                </Child_text1>
                </Table.Cell>
            ))}
            </Table.Row>
            )}
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
            <th>id</th>
            <th>rent</th>
            <th>wages</th>
            <th>electricity</th>
            <th>transport</th>
            <th>gas</th>
            <th>packaging</th>
            <th>water</th>
            <th>total</th>
            <th>created</th>
            <th>updated</th>
            </tr>
        </thead>
        <tbody>
            {fetched.map((data:[],key:number)=>
            <tr key={key}>
            {data.map((val:""|number,key:number)=>(
            <Table.Cell key={key}>{val}</td>
            ))}
            </tr>
            )}
        </tbody>
    </table> */}
    </>)
}