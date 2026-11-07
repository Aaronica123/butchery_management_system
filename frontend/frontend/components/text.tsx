"use client"
import {Text, TextField} from "@radix-ui/themes"
export default function Head_text({children}:{children: React.ReactNode;}){
    return(
     <Text weight={"medium"} size={"5"} style={{fontFamily:"Lora", color:"#282420",}}>
        {children}
     </Text>   
    )
}
export function Child_text({children}:{children: React.ReactNode}){
    return(
        <Text weight={"medium"} size={"2"} style={{fontFamily:"Inter",color:"#77716B",wordSpacing:"1.7px"}}>
            {children}
        </Text>
    )
}
export function Header({children}:{children: React.ReactNode}){
    return(
    <Text weight={"regular"} size={"8"} style={{fontFamily:"Lora",wordSpacing:"-1.5px",color:"#282420"}}>
        {children}
    </Text>)
}
export function Input({placeholder}:{placeholder:string}){
    <TextField.Root placeholder={placeholder} size={"2"} style={{width:"100%"}}></TextField.Root>
}
export function Label({children}:{children: React.ReactNode}){
    return(
        <Text weight={"medium"} size={"3"} style={{fontFamily:"Inter",color:"#282420"}}>
            {children}
        </Text>
    )
}