import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { createClient,SupabaseClient } from "@supabase/supabase-js";

@Injectable()
export class DbServiceTs {
    client:SupabaseClient;
    constructor(config: ConfigService){
        this.client=createClient(
            config.getOrThrow("URL"),
            config.getOrThrow("KEY")
        )
    }
}
