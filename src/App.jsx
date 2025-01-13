import Tabs from "./components/Tabs";
import invoiceData from './utils/data.json';
import { useContext, useEffect, useState } from "react";
import plus from "./utils/icon-plus.svg";
import { SideNav } from "./components/SideNav";
import { BillContext } from "./context";
import Invoice from "./pages/Invoice";
import { data } from "react-router-dom";
function App() {
  const{invoices,setInvoices}=useContext(BillContext);
  const {setItemsList,setClientCity,setClientEmail,setClientCountry,setClientPostCode,setClientStreet,setSenderCountry,setSenderPostCode,setSenderCity,setSenderStreet,setClientName,selectedTab,setSelectedTab,popover,setPopover,displayInvoices,setDisplayInvoices}=useContext(BillContext);
  
  const handleFilter=(e)=>{
      const selectedFilter=e.target.value;
      if(selectedFilter!=="All"){
      const filtered=invoices.filter((item)=>item.status==selectedFilter.toLowerCase());
      setDisplayInvoices(filtered);
     
}
      else {
        setDisplayInvoices(invoices)};
        
      }

      useEffect(() => {
          setSenderStreet("");
          setSenderCity("");
          setSenderPostCode("");
          setSenderCountry("");
      
          setClientStreet("");
          setClientCity("");
          setClientPostCode("");
          setClientCountry("");
          setClientName("");
          setClientEmail("");
          setSelectedTab(-1); 
          setItemsList([]);
      }, []);
    
  return <div>   <SideNav/>
<div>     <Invoice/> </div>
   
  <div className="homepage">
    <nav>
      <div className="right-nav">
      <div className="Invoices-heading">Invoices</div>
      <div className="Invoices-length">There are total {displayInvoices.length} Invoices</div>
      </div>
      <div className="left-nav">
      <div className="filterByStatus">Filter by status <select className="selectingFilter" onChange={(e)=>handleFilter(e)}>
      <option value="All">All</option>
      <option value="Draft">Draft</option>
      <option value="Pending">Pending</option>
      <option value="Paid">Paid</option>
    </select></div>
    <button onClick={()=>{setPopover(!popover);}}  className="AddInvoice"><img src={plus} className="plus"/>New Invoice</button>
    </div>
    </nav>
    <div className="Invoices">{ displayInvoices.map((invoice,index)=> <Tabs key={invoice.id} id={invoice.id} createdAt={invoice.createdAt} clientName={invoice.clientName} itemTotal={invoice.total} status={invoice.status}/>)}</div>
     </div>

     </div>

}

export default App;
