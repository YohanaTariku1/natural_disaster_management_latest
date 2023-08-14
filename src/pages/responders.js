import React from "react";
import CommunityAdmin from "../components/sidebar";
import FirstRespondersPage from "./FirstRespondersPage";

const FastResponders = ()=>{
    return(
        <div>
             
            
             <CommunityAdmin name="Fast responders"/>
           
             <div class="block rounded-lg  z-1 bg-gray-50 ml-64 mb-96 p-36 m-11 dark:bg-grey-100">
                
                   <FirstRespondersPage />
               </div>
             
             </div>
         
        
        
    )
}

export default FastResponders