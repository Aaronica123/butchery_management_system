
import { Suspense } from "react";
import { Fetch } from "@/components/anaylsis";
import { val } from "@/components/supabase";
import { connection } from "next/server";

export default function Render(){
    return (
        <Suspense fallback={<p>Fetching please wait</p>}>
            <Fetc/>
        </Suspense>
    )
}

async function Fetc(){
    await connection();
    const da=await val.schema("butchery_schema").from("sales").select("created,total").order("created",{ascending:true});
        console.log("da is ")
        console.log(da)
    const dp=await val.schema("butchery_schema").from("expenses").select("created,total").order("created",{ascending:true});
        console.log("d1 is ")
        console.log(dp)    
    return(
        <>
        
            <Fetch d1={dp?.data} row={da?.data}></Fetch>
        
        </>
    )
}
