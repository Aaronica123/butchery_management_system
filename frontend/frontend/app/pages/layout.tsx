import Navbar from "@/components/navbar";


export default function Child({children}:{children:React.ReactNode}){
return(
    <>
    
    <Navbar>
        {children}
    </Navbar>
    
    </>
)
}