import { useContext, useState } from "react";
import ItemCalculator from "../components/ItemCalculator";
import NewItemList from "../components/NewItemList";
import { BillContext } from "../context";

const Invoice=()=>{
    const {itemsList,setItemsList}=useContext(BillContext);
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

    const [date,setDate]=useState('2024-12-12');
    const{invoices,setInvoices}=useContext(BillContext);
    const {popover,setPopover}=useContext(BillContext);


   const modernList=itemsList.map((item)=>item);
   


    const handleSaveAsDraft=()=>{
      setInvoices([...invoices,{
        "id": "RT8888",
        "createdAt": date,
        "paymentDue": "2021-8-19",
        "description": "Re-branding",
        "paymentTerms": 1,
        "clientName": clientName,
        "clientEmail": clientEmail,
        "status": "draft",
        "senderAddress": {
          "street": senderStreet,
          "city": senderCity,
          "postCode": senderPostCode,
          "country": senderCountry,
        },
        "clientAddress": {
          "street": clientStreet,
          "city": clientCity,
          "postCode": clientPostCode,
          "country": clientCountry,
        },
        "items": itemsList,
        "total": 1800.90
      }

      ])
    }

   const handleDiscard=()=>{
         
       
   }






    return <div className="invoicePopup">
    <div className={popover?"popUpForm":"popUpFormHidden"}>
 
    <div className="popsenderAddress">
   <div className="billTo">Bill From</div>
   
    <div className="streetAddress">
   <label>Street Address</label>
   <input type="text" value={senderStreet} onChange={(e)=>setSenderStreet(e.target.value)}></input>
   </div>

   <div className="postalAddress">
    <div className="city">   
   <label>City</label>
   <input type="text" value={senderCity} onChange={(e)=>setSenderCity(e.target.value)}></input>
   </div>
   <div className="postCode">
   <label>Post Code</label>
   <input type="text" value={senderPostCode} onChange={(e)=>setSenderPostCode(e.target.value)}></input>
   </div>
   <div className="country">
   <label>Country</label>
   <input type="text" value={senderCountry} onChange={(e)=>setSenderCountry(e.target.value)}></input>
   </div>
   </div>

   </div>


   <div className="clientAddress">   
   <div className="billTo">Bill To</div>
   <div className="receiverName" >
   <label>Client's Name</label>
   <input type="text" value={clientName} onChange={(e)=>setClientName(e.target.value)} ></input>
   </div>
   <div className="clientEmail">
   <label>Client's Email</label>
   <input type="text" value={clientEmail} onChange={(e)=>setClientEmail(e.target.value)}></input>
   </div>
   
    <div className="streetAddress">
   <label>Street Address</label>
   <input type="text" value={clientStreet} onChange={(e)=>setClientStreet(e.target.value)}></input>

   </div>

   <div className="postalAddress">
    <div className="city">
   <label>City</label>
   <input type="text" value={clientCity} onChange={(e)=>setClientCity(e.target.value)}></input>
   </div>
   <div className="postCode">
   <label>Post Code</label>
   <input type="text" value={clientPostCode} onChange={(e)=>setClientPostCode(e.target.value)}></input>
   </div>

   <div className="country">
   <label>Country</label>
   <input type="text" value={clientCountry} onChange={(e)=>setClientCountry(e.target.value)}></input>
   </div>

   </div>
   </div>

   <div className="cpp">
   <div className="calendar">
    <label>Invoice Date</label>
    <input type="date" value={date} onChange={()=>setDate()} />
   </div>
   <div className="payement">
    <div className="payementTerms">payement terms</div>
    <select>
        <option>Net 1 days</option>
        <option>Net 7 days</option>
        <option>Net 14 days</option>
        <option>Net 30 days</option>
    </select>
   </div>
   <div className="projectDescription">
    <label>Project Description</label>
    <input type="text" placeholder="graphic design service" />
   </div>
   </div>



   <div className="atom"><h3>Items List</h3></div>

   <div className="itemssss">
   <div className="ItemCategories">
  <div className="itemName">Item Name</div>
  <div className="quantity">Qty</div>
  <div className="price">Price</div>
  <div className="total">Total</div>
   </div>
</div>


<div className="wrap"> {modernList.map((item,index)=><NewItemList id={index+1} name={item.name} qty={item.quantity} price={item.price} total={item.total} />)}</div>
<button onClick={()=>setItemsList([...itemsList,{
        "id":"1",
        "name": "New Item",
        "quantity": 1,
        "price": 0,
        "total": 0,
}])} className="AddNewButton">+AddNewItem</button>


<div className="popUpButtons">
<button className="discard" onClick={()=>setPopover(!popover)}>Discard</button>
<button className="saveAsDraft" onClick={()=>handleSaveAsDraft()}>Save as Draft</button>
<button className="saveAndSend">Save and Send</button>

    
</div>

    </div>
    
    <div className={popover?"shadow":"shadowHidden"}></div>
    
    </div>
}
export default Invoice;