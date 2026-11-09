import { final_ax } from "@/components/axios";
import Head_text, { Child_text1,Child_text,Header } from "@/components/text";
import { Table, Text } from "@radix-ui/themes";
import { connection } from "next/server";
import { Suspense } from "react";
async function Fetch_Stock(){
await connection();
let final=[]
const data=await final_ax.get("/main-branch/fetch");
    if(data.status==200||data.status==201){
        const fetched=data.data.map((val:{id: 0, meat: "",received:0,wasted: 0,transfered: 0,sold: 0,
        closing: 0,
        opening: 0,
        created: ""
    })=>Object.values(val));
    final=fetched;
    }
    console.log(data);
    return(
<>

<div style={{width:"100%",height:"100%",display:"flex",flexDirection:"column",gap:"8px"}}>
<div style={{width:"100%",height:"fit-content",display:"flex",flexDirection:"column",gap:"3px"}}>
<Header>Fetch Stock</Header>
<Child_text>View butchery stock below</Child_text>
</div>
<div style={{width:"100%",height:"430px",display:"flex",flexDirection:"column"}}>
<Table.Root variant="surface" size={"2"} style={{borderRadius:"5px",display:"flex",height:"100%"}}>
   <Table.Header>
    <Table.Row style={{background:"#F5ECEE",borderBottom:"#DEDAD4"}}>
        <Table.Cell>
            <Text size={"4"} weight={"medium"} style={{fontFamily:"Inter"}}>ID</Text>
            </Table.Cell>
           <Table.Cell> <Text size={"4"} weight={"medium"} style={{fontFamily:"Inter"}}>Meat</Text></Table.Cell>
            <Table.Cell> <Text size={"4"} weight={"medium"} style={{fontFamily:"Inter"}}>Received</Text></Table.Cell>
            <Table.Cell> <Text size={"4"} weight={"medium"} style={{fontFamily:"Inter"}}>Wasted</Text></Table.Cell>
            <Table.Cell> <Text size={"4"} weight={"medium"} style={{fontFamily:"Inter"}}>Transfered</Text></Table.Cell>
            <Table.Cell> <Text size={"4"} weight={"medium"} style={{fontFamily:"Inter"}}>Sold</Text></Table.Cell>
            <Table.Cell> <Text size={"4"} weight={"medium"} style={{fontFamily:"Inter"}}>Closing</Text></Table.Cell>
            <Table.Cell> <Text size={"4"} weight={"medium"} style={{fontFamily:"Inter"}}>Opening</Text></Table.Cell>
            <Table.Cell> <Text size={"4"} weight={"medium"} style={{fontFamily:"Inter"}}>Closing</Text></Table.Cell>
    </Table.Row >
    </Table.Header> 
    <Table.Body style={{border:"#DEDAD4 1px solid",background:"#FFFFFF"}}>
        {final.map((data:[],key:number)=>(
    
        <Table.Row style={{borderBottom:"#DEDAD4"}} key={key}>
    {data.map((val:""|number,key:number)=>(
    //    <td key={key}>{val}</td>
       <Table.Cell key={key}>
                <Child_text1>{val}</Child_text1>
        </Table.Cell> 
    ))}
    </Table.Row>
))}
        {/* <Table.Row style={{borderBottom:"#DEDAD4"}}>
            <Table.Cell>
                <Child_text1>ID</Child_text1>
                </Table.Cell>
            <Table.Cell><Child_text1>Meat</Child_text1></Table.Cell>
            <Table.Cell>Received</Table.Cell>
            <Table.Cell>Wasted</Table.Cell>
            <Table.Cell>Transfered</Table.Cell>
            <Table.Cell>Sold</Table.Cell>
            <Table.Cell>Closing</Table.Cell>
            <Table.Cell>Opening</Table.Cell>
            <Table.Cell>Closing</Table.Cell>
        </Table.Row> */}
        <Table.Row style={{position:"absolute",bottom:"1px",display:"flex",width:"100%",borderTop:"2px solid #DEDAD4"}}>
            <Table.Cell style={{width:"100%"}}><Child_text1>1 record</Child_text1></Table.Cell>
            <Table.Cell style={{width:"100%",display:"flex",justifyContent:"right"}}><Child_text1>All quantities in kilograms</Child_text1></Table.Cell>
        </Table.Row>
    </Table.Body>
</Table.Root>
</div>
</div>
{/* <table>
    <thead>
        <tr>
            <th>ID</th>
            <th>Meat</th>
            <th>Received</th>
            <th>Wasted</th>
            <th>Transfered</th>
            <th>Sold</th>
            <th>Closing</th>
            <th>Opening</th>
            <th>Closing</th>
        </tr>
    </thead>
    <tbody>
{final.map((data:[],key:number)=>(
    <tr key={key}>
    {data.map((val:""|number,key:number)=>(
       <td key={key}>{val}</td> 
    ))}
    </tr>
))}

        
         <tr>
         <td>ID</td>
            <td>Meat</td>
            <td>deceived</td>
            <td>Wasted</td>
            <td>Tdansfeded</td>
            <td>Sold</td>
            <td>Closing</td>
            <td>Opening</td>
            <td>Closing</td>
            </tr>
    </tbody>
</table> */}
</>
    )
}

export default function Page() {
  return (
    <Suspense fallback={<p>Loading stock...</p>}>
      <Fetch_Stock />
    </Suspense>
  );
}