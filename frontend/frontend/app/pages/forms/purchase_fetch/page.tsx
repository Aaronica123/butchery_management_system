import { final_ax } from "@/components/axios";
import { Child_text1,Header,Child_text } from "@/components/text";
import { Table, Text } from "@radix-ui/themes";
import { connection } from "next/server";
import { Suspense } from "react";

export default function Rend(){
    
    return(
        <Suspense fallback={"Loading Please Wait"}>
            <Fetch/>
        </Suspense>
    )
}
async function Fetch(){
    await connection();
    const data=await final_ax.get("/purchase/data_fetch");
    let fetched=[]
    if(data.status==200||data.status==201){
        fetched=data.data.map((val:{id: 0,first_name: "",last_name: "",
        meat: "",
        quantity: 0,
        total_cost: 0,
        total_paid: 0,
        balance: 0,
        status: "",
        created: "",
        completed: ""
    })=>Object.values(val))

    }else {
        throw new Error(data.data);
    }

    return(<>
    <div style={{width:"100%",height:"100%",display:"flex",flexDirection:"column",gap:"8px"}}>
        <div style={{width:"100%",height:"fit-content",display:"flex",flexDirection:"column",gap:"3px"}}>
        <Header>Fetch Purchase</Header>
        <Child_text>View butchery Purchase below</Child_text>
        </div>
    <div style={{width:"100%",height:"430px",display:"flex",flexDirection:"column"}}>
    <Table.Root variant="surface" size={"2"} style={{borderRadius:"5px",display:"flex",height:"100%"}}>
        <Table.Header>
            <Table.Row style={{background:"#F5ECEE",borderBottom:"#DEDAD4"}}>
                <Table.Cell>
                    <Text size={"4"} weight={"medium"} style={{fontFamily:"Inter"}}>
                        ID
                    </Text>
                </Table.Cell>
                 <Table.Cell>
                    <Text size={"4"} weight={"medium"} style={{fontFamily:"Inter"}}>
                        First Name
                    </Text>
                </Table.Cell>
                 <Table.Cell>
                    <Text size={"4"} weight={"medium"} style={{fontFamily:"Inter"}}>
                        Last Name
                    </Text>
                </Table.Cell>
                 <Table.Cell>
                    <Text size={"4"} weight={"medium"} style={{fontFamily:"Inter"}}>
                        Meat
                    </Text>
                </Table.Cell>
                 <Table.Cell>
                    <Text size={"4"} weight={"medium"} style={{fontFamily:"Inter"}}>
                        Quantity
                    </Text>
                </Table.Cell>
                 <Table.Cell>
                    <Text size={"4"} weight={"medium"} style={{fontFamily:"Inter"}}>
                        Total Cost
                    </Text>
                </Table.Cell>
                 <Table.Cell>
                    <Text size={"4"} weight={"medium"} style={{fontFamily:"Inter"}}>
                        Total Paid
                    </Text>
                </Table.Cell>
                 <Table.Cell>
                    <Text size={"4"} weight={"medium"} style={{fontFamily:"Inter"}}>
                        Balance
                    </Text>
                </Table.Cell>
                 <Table.Cell>
                    <Text size={"4"} weight={"medium"} style={{fontFamily:"Inter"}}>
                        Status
                    </Text>
                </Table.Cell>
                 <Table.Cell>
                    <Text size={"4"} weight={"medium"} style={{fontFamily:"Inter"}}>
                        Created
                    </Text>
                </Table.Cell>
                 <Table.Cell>
                    <Text size={"4"} weight={"medium"} style={{fontFamily:"Inter"}}>
                        Completed
                    </Text>
                </Table.Cell>
            </Table.Row>
        </Table.Header>
        <Table.Body>
            {fetched.map((da:[],key:number)=>(
            <Table.Row key={key}>
            {da.map((va:string|number,key:number)=>(
                <Table.Cell key={key}>
                    <Child_text1>
                    {va==null?"Incomplete":va}
                    </Child_text1>
                    </Table.Cell>
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
        {fetched.map((da:[],key:number)=>(
            <tr key={key}>
            {da.map((va:string|number,key:number)=>(
                <td key={key}>{va}</td>
            ))}
            </tr>
        ))}
    </table> */}
    </>)
}