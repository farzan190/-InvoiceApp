import Tabs from "./components/Tabs";
import invoiceData from './utils/data.json';
import { useState } from "react";
import plus from "./utils/icon-plus.svg"
function App() {
  const[invoices,setInvoices]=useState(invoiceData);

  const handleFilter=(e)=>{
    console.log(e.target.id);
    const Draft=invoices.filter((item)=>item.status=="pending");
    setInvoices(Draft);
  }

  const addInvoice=()=>{
    setInvoices([...invoices,{
      "id": "RT3080",
      "createdAt": "2021-8-18",
      "paymentDue": "2021-8-19",
      "description": "Re-branding",
      "paymentTerms": 1,
      "clientName": "PHAJJU",
      "clientEmail": "jensenh@mail.com",
      "status": "paid",
      "senderAddress": {
        "street": "19 Union Terrace",
        "city": "London",
        "postCode": "E1 3EZ",
        "country": "United Kingdom"
      },
      "clientAddress": {
        "street": "106 Kendell Street",
        "city": "Sharrington",
        "postCode": "NR24 5WQ",
        "country": "United Kingdom"
      },
      "items": [
        {
          "name": "Brand Guidelines",
          "quantity": 1,
          "price": 1800.90,
          "total": 1800.90
        }
      ],
      "total": 1800.90
    }])
  }


  return <div className="homepage">
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
    <button onClick={addInvoice} className="AddInvoice"><img src={plus} className="plus"/>New Invoice</button>
    </div>
    </nav>
    <div className="Invoices">{ invoices.map((invoice)=> <Tabs id={invoice.id} createdAt={invoice.createdAt} clientName={invoice.clientName} itemTotal={invoice.total} status={invoice.status}/>)}</div>
     </div>
}

export default App;
