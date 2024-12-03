import { BillContext } from "../context";
import { useContext } from "react";

const Receipt=()=>{
    const {selectedTab,setSelectedTab}=useContext(BillContext);
  const{invoices,setInvoices}=useContext(BillContext);
    
    return <div>{invoices.map((item)=>{
     if(item.id==selectedTab){
        return <div>
         i am selectedTab {selectedTab}
        </div> 
     }






    } )}</div>
}
export default Receipt;