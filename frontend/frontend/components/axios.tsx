import axios from "axios"
import { val } from "./supabase"
const ax=axios.create({
    baseURL:"/api",
    headers:{
        "Content-Type":"application/json"
    },
    withCredentials:true,
    
})
ax.interceptors.request.use(async(data)=>{
    const{data:da}=await val.auth.getSession();
    data.headers.Authorization=da.session?.access_token
    return data;
})
export const final_ax=ax