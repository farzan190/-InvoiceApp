import Tabs from "./components/Tabs";
import invoiceData from './utils/data.json';
import { useContext, useState } from "react";
import plus from "./utils/icon-plus.svg";
import { SideNav } from "./components/SideNav";
import { BillContext } from "./context";
import Invoice from "./pages/Invoice";
function App() {
  const{invoices,setInvoices}=useContext(BillContext);
  const {popover,setPopover}=useContext(BillContext);

  const handleFilter=(e)=>{
    const Draft=invoices.filter((item)=>item.status=="pending");
    setInvoices(Draft);
  }

  


  return <div>   <SideNav/>
<div>     <Invoice/> </div>
   
  <div className="homepage">
    <nav>
      <div className="right-nav">
      <div className="Invoices-heading">Invoices</div>
      <div>There are total 7 Invoices</div>
      </div>
      <div className="left-nav">
      <div>Filter By status <select onChange={(e)=>handleFilter(e)}>
      <option value="Draft">Draft</option>
      <option value="Pending">Pending</option>
      <option value="Paid">Paid</option>
    </select></div>
    <button onClick={()=>setPopover(!popover)}  className="AddInvoice"><img src={plus} className="plus"/>New Invoice</button>
    </div>
    </nav>
    <div className="Invoices">{ invoices.map((invoice,index)=> <Tabs key={invoice.id} id={invoice.id} createdAt={invoice.createdAt} clientName={invoice.clientName} itemTotal={invoice.total} status={invoice.status}/>)}</div>
     </div>

     </div>

}

export default App;
