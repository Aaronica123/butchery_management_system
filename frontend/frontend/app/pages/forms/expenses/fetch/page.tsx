import { final_ax } from "@/components/axios";
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
    <table>
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
            <td key={key}>{val}</td>
            ))}
            </tr>
            )}
        </tbody>
    </table>
    </>)
}