import { SideNav } from "../components/SideNav";
import { BillContext } from "../context";
import { useContext,useEffect } from "react";
import Invoice from "./Invoice";



const Receipt=()=>{
    const {selectedTab,setSelectedTab}=useContext(BillContext);
    const{invoices,setInvoices}=useContext(BillContext);
    const {setDisplayInvoices,popover,setPopover,senderStreet,setSenderStreet,setSenderCity,setSenderPostCode,setSenderCountry,setClientStreet,setClientCity,setClientPostCode,setClientCountry,setClientName,setClientEmail,clientName}=useContext(BillContext);

   




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

   const handleStatus=(id)=>{ 
    const update=invoices.map((item)=>{
    if(item.id==id)
    { return {
      ...item,
      status:"paid"
    }
    }
    else{
      return item;
    }

    })
   setInvoices(update);
   setDisplayInvoices(update);
   console.log("this is updated status",invoices);
   } 
    
    return <div>
      <SideNav/>
      <Invoice/>
      <div className="kafafa">{invoices.map((item)=>{

       if(item.id==selectedTab){
          
         
        return   <div className="receipt">

         <div className="receipt-nav">
          <div className="receipt-status">
        <div className="stats" >Status</div>
        <button className={item.status=="paid"?"status-button-paid":item.status=="pending"?"status-button-pending":"status-button-draft"}><div className={item.status=="paid"?"status-indicator-paid":item.status=="pending"?"status-indicator-pending":"status-indicator-draft"}></div>{item.status}</button>

        </div>
        <div className="nav-buttons">
          <button onClick={()=>setPopover(!popover)} className="edit">Edit</button>
          <button className="delete">Delete</button>
          <button className="markAsPaid" onClick={()=>handleStatus(item.id)}>Mark As Paid</button>
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
          <div className="billDate">
        <div className="invoice-date">Invoice Date</div>
        <div className="InvoiceCreatedAt">{item.createdAt}</div>
        
        </div>
        <div className="payDate">
        <div className="payementDue">Payment Due</div>
        <div className="dueDate">{item.paymentDue}</div>
        </div>
        </div>

          <div className="senderAddress">
        <div className="clientBillTo">Bill To</div>
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

       <div className="bagga">
        
        
        
   

      <div className="itemsPope">
        
      <div className="name-itemName" >
       <div className="itemName"> Item Name </div>
      { item.items.map((i)=>{
       return <div className="recieptItemQty">{i.name}</div>
    })
      }</div>
 
   <div className="name-Qty"> 
    <div className="quantity">QTY.</div>
    { item.items.map((i)=>{
       return <div className="recieptItemQty">{i.quantity}</div>
    })
      }</div>

<div className="name-price"> 
 <div className="price"> Price </div>
 { item.items.map((i)=>{
       return <div className="recieptItemQty">£{i.price}</div>
    })
      }</div>

<div className="total">
 <div className="total"> Total</div>
{ item.items.map((i)=>{
       return <div className="recieptItemQty">£{i.total}</div>
    })
      }</div>

      </div>










<div className="AmountDue">
          <div className="amount">Amount</div>
          <div className="totalAmountDue">£{}</div>

        </div>
        </div> 
       </div>
       </div>
     }

    } )}</div></div>
}
export default Receipt;