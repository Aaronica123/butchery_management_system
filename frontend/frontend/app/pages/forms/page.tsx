
import { final_ax } from "@/components/axios"
import { Suspense } from "react";
import Submit from "@/components/submit";
import { connection } from "next/server";
export default function Render(){
    return(
        <>
        <Suspense fallback={<p>Fetching</p>}>
        <Fetch_Cat/>
        </Suspense>
        </>
    )
}
async function Fetch_Cat(){
await connection();
const data=await final_ax.get("/purchase/fetch");
const fetched=data.data.map((data:{id: "",
        first_name: "",
        last_name: "",
        meat: "",
        amount: ""
    })=>Object.values(data))
return <Submit row={fetched}></Submit>
}