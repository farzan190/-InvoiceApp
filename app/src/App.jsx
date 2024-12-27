import Tabs from "./components/Tabs";
import invoiceData from './utils/data.json';
import { useContext, useState } from "react";
import plus from "./utils/icon-plus.svg";
import { SideNav } from "./components/SideNav";
import { BillContext } from "./context";
import Invoice from "./pages/Invoice";
import { data } from "react-router-dom";
function App() {
  const{invoices,setInvoices}=useContext(BillContext);
  const {popover,setPopover}=useContext(BillContext);
  const [displayInvoices,setDisplayInvoices]=useState(invoices);
  const handleFilter=(e)=>{
      const selectedFilter=e.target.value;
      if(selectedFilter!=="All"){
      const filtered=invoices.filter((item)=>item.status==selectedFilter.toLowerCase());
      setDisplayInvoices(filtered);
}
      else {setDisplayInvoices(invoices)};
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
      <option value="All">All</option>
      <option value="Draft">Draft</option>
      <option value="Pending">Pending</option>
      <option value="Paid">Paid</option>
    </select></div>
    <button onClick={()=>setPopover(!popover)}  className="AddInvoice"><img src={plus} className="plus"/>New Invoice</button>
    </div>
    </nav>
    <div className="Invoices">{ displayInvoices.map((invoice,index)=> <Tabs key={invoice.id} id={invoice.id} createdAt={invoice.createdAt} clientName={invoice.clientName} itemTotal={invoice.total} status={invoice.status}/>)}</div>
     </div>

     </div>

}

export default App;
