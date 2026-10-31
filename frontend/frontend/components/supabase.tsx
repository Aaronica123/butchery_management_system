import { createClient,SupabaseClient} from "@supabase/supabase-js";

let kim=new SupabaseClient("https://123","123");
if(process.env.NEXT_PUBLIC_URL&&process.env.NEXT_PUBLIC_API){
kim=createClient(process.env.NEXT_PUBLIC_URL,process.env.NEXT_PUBLIC_API)
}
export const val=kim;
