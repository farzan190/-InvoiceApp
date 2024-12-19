import { SideNav } from "../components/SideNav";
import { BillContext } from "../context";
import { useContext,useEffect } from "react";
import Invoice from "./Invoice";



const Receipt=()=>{
    const {selectedTab,setSelectedTab}=useContext(BillContext);
    const{invoices,setInvoices}=useContext(BillContext);
    const {popover,setPopover,senderStreet,setSenderStreet,setSenderCity,setSenderPostCode,setSenderCountry,setClientStreet,setClientCity,setClientPostCode,setClientCountry,setClientName,setClientEmail,clientName}=useContext(BillContext);

   




    useEffect(() => {
    const selectedInvoice = invoices.find((item) => item.id === selectedTab);

    if (selectedInvoice) {
      setSenderStreet(selectedInvoice.senderAddress.street);
      setSenderCity(selectedInvoice.senderAddress.city);
      setSenderPostCode(selectedInvoice.senderAddress.postCode);
      setSenderCountry(selectedInvoice.senderAddress.country);
  
      setClientStreet(selectedInvoice.clientAddress.street);
      setClientCity(selectedInvoice.clientAddress.city);
      setClientPostCode(selectedInvoice.clientAddress.postCode);
      setClientCountry(selectedInvoice.clientAddress.country);
      setClientName(selectedInvoice.clientName);
      setClientEmail(selectedInvoice.clientEmail); 

    }
  }, [selectedTab, invoices, setSenderStreet]);
    
    return <div>
      <SideNav/>
      <Invoice/>
      <div className="kafafa">{invoices.map((item)=>{

       if(item.id==selectedTab){
          
        
        return   <div className="receipt">

         <div className="receipt-nav">
          <div className="receipt-status">
        <div className="stats" >Status</div>
        <div className="status"><span className="status-indicator"></span>Paid</div>
        </div>
        <div className="nav-buttons">
          <button onClick={()=>setPopover(!popover)} className="edit">Edit</button>
          <button className="delete">Delete</button>
          <button className="markAsPaid">Mark As Paid</button>
        </div>
         </div>

         <div className="aashna">
        <section>
          <div className="id-description">
          <div className="item-id">{item.id}</div>
          <div className="item-desc">{item.description}</div>
          </div>
          <div className="clientAddress">
           <div className="street"> {item.clientAddress.street}</div>
           <div className="city"> {item.clientAddress.city}</div>
           <div className="postcode"> {item.clientAddress.postCode}</div>
            <div className="country">{item.clientAddress.country}</div>
          </div>
        </section>

       <div className="billing-address">

        <div className="dates">
          <div>
        <div className="invoice-date">Invoice Date</div>
        <div className="InvoiceCreatedAt">{item.createdAt}</div>
        <div>{console.log(item.createdAt)}</div>
        </div>
        <div>
        <div>Payment Due</div>
        <div>{item.paymentDue}</div>
        </div>
        </div>

          <div className="senderAddress">
        <div className="billTo">Bill To</div>
        <div className="BillClientName">{item.clientName}</div>
        <div className="street">{item.senderAddress.street},</div>
        <div className="city">{item.senderAddress.city},</div>
        <div className="postcode">{item.senderAddress.postCode},</div>
        <div className="country">{item.senderAddress.country}</div>
       </div>
         

       <div className="clientEmail">
       <div className="sentTo">Sent to</div>
       <div className="clientMail">{item.clientEmail}</div>
       </div>



       </div>
       </div>

       <div className="bagga">
        <div className="item-table">
          <div className="itemNameDetails">
        <div className="name-itemName" >Item Name</div>
        </div>

        <div className="itemQuantyDetails">
       <div className="name-Qty"> QTY.</div>
       </div>

       <div className="itemPriceDetails">
       <div className="name-price"> Price</div>
       </div>

       <div className="itemSumDetails">
       <div className="total">Total</div>
       </div>
     

        </div>
        
        
   {  item.items.map((i)=> {return <div >
             <div className="item-table">
        <div className="itemName">{i.name}</div>
       <div className="itemQuantity">{i.quantity}</div>
       <div className="itemPrice">{i.price}</div>
       <div className="itemTotal">{i.total}</div>
      </div>
      </div>


       
   })
}

<div className="AmountDue">
          <div className="amount">Amount</div>
          <div className="totalAmountDue">£{}</div>

        </div>
        </div> 
        </div>
     }

    } )}</div></div>
}
export default Receipt;