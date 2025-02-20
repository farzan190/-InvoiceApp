import { useContext, useState } from "react";
import NewItemList from "../components/NewItemList";
import { BillContext } from "../context";
import { v4 as uuidv4 } from 'uuid';
const Invoice=()=>{
    
    const {selectedTab,itemsList,setItemsList,senderCity,setSenderCity,senderPostCode,setSenderPostCode,senderCountry,setSenderCountry,clientStreet,setClientStreet,clientCity,setClientCity,clientPostCode,setClientPostCode,clientCountry,setClientCountry,clientName,setClientName,clientEmail,setClientEmail}=useContext(BillContext);
    
    const [date,setDate]=useState('2024-12-12');
    const{invoices,setInvoices}=useContext(BillContext);
    const {popover,setPopover,senderStreet,setSenderStreet,exp,setExp,displayInvoices,setDisplayInvoices}=useContext(BillContext);
     
       

    const handleSaveAsDraft=()=>{
      const newInvoice=[{
        "id": uuidv4().toString(36).substring(2, 8).toUpperCase(),
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
      },
      ...invoices,
      ]
      setInvoices(newInvoice);
      setDisplayInvoices(newInvoice);
      console.log(displayInvoices);
    }

    const Save=()=>{
      const updatedInvoice= invoices.map((invoice)=>{ 
        if(invoice.id===selectedTab){
          
        return {...invoice,
          senderAddress:{...invoice.senderAddress,
            street:senderStreet,
            postCode:senderPostCode,
            city:senderCity,
            country:senderCountry,
          },
          clientName:clientName,
          clientEmail:clientEmail,
          clientAddress:{...invoice.clientAddress,
            street:clientStreet,
            postCode:clientPostCode,
            city:clientCity,
            country:clientCountry,
          },
          //items:exp,
        }}
        else {
          return invoice;
        }
      
      });
      setInvoices(updatedInvoice);
      setDisplayInvoices(updatedInvoice);
      setPopover(!popover);
    }

    const addlistitem=()=>{
       setItemsList([...itemsList,{ name:"",quantity:"",price:"",total:""}])

      const updatedInvoice= invoices.map((invoice)=>{ 
        if(invoice.id===selectedTab){
          
        return {...invoice,
          items:[...invoice.items,{
            "name": "new Item",
            "quantity": 0,
            "price": 0,
            "total": 0
          }],
        }}



        else {
          return invoice;
        }
      
      });
      setInvoices(updatedInvoice);
      
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



<div className="wrap">{ selectedTab==-1 && itemsList.map((obj,ind)=>{return <NewItemList id={ind+1}
  name={obj.name} 
  qty={obj.quantity}
  price={obj.price}
  total={obj.total}
  />} ) }  </div>

<div className="wrap"> {
  
  invoices.map((item,index)=>{

    if(selectedTab==item.id){
      return  item.items.map((obj,ind)=>{
                                
                            return <NewItemList id={ind+1}
                                  name={obj.name} 
                                  qty={obj.quantity}
                                  price={obj.price}
                                  total={obj.total}
                                  />                                  
                                })  
            }      
     
   else{
    return  ;
     ;
   }
  
  
  })
   }
   
 </div>



<button onClick={()=>addlistitem()} className="AddNewButton">+AddNewItem</button>


{selectedTab==-1 ?<div className="popUpButtons">
<button className="discard" onClick={()=>setPopover(!popover)}>Discard</button>
<button className="saveAsDraft" onClick={()=>handleSaveAsDraft()}>Save as Draft</button>
<button className="saveAndSend" onClick={()=>Save()}>Save and Send</button>
</div>:<div>
  <button className="discard" onClick={()=>setPopover(!popover)} >Cancel</button>
  <button className="saveAndSend" onClick={()=>Save()}>Save changes</button>

</div>
}
    </div>
    
    <div className={popover?"shadow":"shadowHidden"}></div>
    
    </div>
}
export default Invoice;