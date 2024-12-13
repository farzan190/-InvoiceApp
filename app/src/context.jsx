import { createContext, useContext, useState } from "react"
import invoiceData from './utils/data.json';

export  const BillContext=createContext(null);
export  const ContextProvider=({children})=>{
     const [selectedTab,setSelectedTab]=useState();
     const[invoices,setInvoices]=useState(invoiceData);
     const [itemName,setItemName]=useState("ABC");
     const [quantity,setQuantity]=useState(1);
     const [price,setPrice]=useState(786);
     const [total,setTotal]=useState(1199);
     const [itemsList,setItemsList]=useState([
      {
        "name": "New Item",
        "quantity": 1,
        "price": 0,
        "total": 0,
      }
    ]);
    const [popover,setPopover]=useState(true);
    
     
    return <BillContext.Provider value={{popover,setPopover,itemsList,setItemsList,total,setTotal,price,setPrice,quantity,setQuantity,itemName,setItemName,selectedTab,setSelectedTab,invoices,setInvoices}}>
       {children}
    </BillContext.Provider>


 }

