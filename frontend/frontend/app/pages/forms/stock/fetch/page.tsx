import { final_ax } from "@/components/axios";
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
<table>
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

        
    </tbody>
</table>
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