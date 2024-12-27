import { createContext, useContext, useState } from "react"
import invoiceData from './utils/data.json';
import Invoice from "./pages/Invoice";

export  const BillContext=createContext(null);
export  const ContextProvider=({children})=>{
     const [selectedTab,setSelectedTab]=useState(-1);
     const[invoices,setInvoices]=useState(invoiceData);
     const [itemName,setItemName]=useState("ABC");
     const [quantity,setQuantity]=useState(1);
     const [price,setPrice]=useState(786);
     const [total,setTotal]=useState(1199);
     const [itemsList,setItemsList]=useState([
      {
        "name": "new item",
        "quantity": 0,
        "price": 0,
        "total": 0,
      },
    ]);
    const [popover,setPopover]=useState(false);
    const [senderStreet,setSenderStreet]=useState("");
    
    

    const [senderCity,setSenderCity]=useState("");
    const [senderPostCode,setSenderPostCode]=useState("");
    const [senderCountry,setSenderCountry]=useState("");

    const [clientStreet,setClientStreet]=useState("");
    const [clientCity,setClientCity]=useState("");
    const [clientPostCode,setClientPostCode]=useState("");
    const [clientCountry,setClientCountry]=useState("");
    const [clientName,setClientName]=useState("");
    const [clientEmail,setClientEmail]=useState("");
    const [exp,setExp]=useState("");

     
    return <BillContext.Provider value={{exp,setExp,clientEmail,setClientEmail,clientName,setClientName,clientCountry,setClientCountry,clientPostCode,setClientPostCode,clientCity,setClientCity,clientStreet,setClientStreet,senderCountry,setSenderCountry,senderPostCode,setSenderPostCode,senderCity,setSenderCity,senderStreet,setSenderStreet,popover,setPopover,itemsList,setItemsList,total,setTotal,price,setPrice,quantity,setQuantity,itemName,setItemName,selectedTab,setSelectedTab,invoices,setInvoices}}>
       {children}
    </BillContext.Provider>


 }

