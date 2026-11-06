import { final_ax } from "@/components/axios";
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
    <table>
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
       
    </table>
    </>)
}