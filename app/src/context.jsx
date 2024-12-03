import { createContext, useContext, useState } from "react"
import invoiceData from './utils/data.json';

export  const BillContext=createContext(null);
export  const ContextProvider=({children})=>{
     const [selectedTab,setSelectedTab]=useState();
     const[invoices,setInvoices]=useState(invoiceData);
     
    return <BillContext.Provider value={{selectedTab,setSelectedTab,invoices,setInvoices}}>
       {children}
    </BillContext.Provider>


 }

