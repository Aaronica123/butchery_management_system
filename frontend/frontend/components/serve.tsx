// import { Suspense } from "react";
// import { final_ax } from "./axios";
// import Submit from "@/app/pages/forms/page";
//  const fetch=async()=>{
//            const data= await final_ax.get("/purchase/fetch");
//            if(data.status==200||data.status==201){
//             const fetched=data.data.map((val)=>Object.values(val));
//             return fetched;
//            }
//            else{
//             return [[]];
//            }
//         }
// export default function Serve(){
//      const f=fetch();
//      return(<>
//      <Suspense fallback={<p>Fetching please wait</p>}>
//      <Submit pr={f}></Submit>
//      </Suspense>
//      </>)
   
// }