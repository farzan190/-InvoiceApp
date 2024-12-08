import { useContext, useState } from "react";
import ItemCalculator from "../components/ItemCalculator";
import NewItemList from "../components/NewItemList";
import { BillContext } from "../context";

const Invoice=()=>{
    const {itemsList,setItemsList}=useContext(BillContext);
   
   const modernList=itemsList.map((item)=>item);
   

    return <div className="Kontre">
   <div className="billTo">Bill From</div>

   <div className="gedihaal">
    <div className="streetAddress">
   <label>Street Address</label>
   <input type="text" className="streetAddress"></input>
   </div>
   </div>

   <div className="CPC">
    <div className="cityLabelInput">   
   <label>City</label>
   <input type="text"></input>
   </div>
   <div className="postCodeLabelInput">
   <label>Post Code</label>
   <input type="text"></input>
   </div>
   <div className="countryLabelInput">
   <label>Country</label>
   <input type="text"></input>
   </div>
   </div>

   <div className="billTo">Bill To</div>
   <div className="EclientName" >
   <label>Client's Name</label>
   <input type="text" className="pharjan"></input>
   </div>
   <div className="clientEmail">
   <label>Client's Email</label>
   <input type="text"></input>
   </div>
   <div>
    <div className="streetAddress">
   <label>Street Address</label>
   <input type="text"></input>
   </div>
   </div>

   <div className="CPC">
    <div className="cityLabelInput">
   <label>City</label>
   <input type="text"></input>
   </div>
   <div className="postCodeLabelInput">
   <label>Post Code</label>
   <input type="text"></input>
   </div>

   <div className="countryLabelInput">
   <label>Country</label>
   <input type="text"></input>
   </div>

   </div>


   <div>
    <label>
        Invoice Date
        <input/>
    </label>
   </div>
 
 <div>payement terms
    <select>
        <option>Net 1 days</option>
        <option>Net 7 days</option>
        <option>Net 14 days</option>
        <option>Net 30 days</option>
    </select>
 </div>


<div>
    <label>Project Description</label>
    <input type="text" placeholder="graphic design service" />
</div>
<div className="calculator"></div>

<div> {modernList.map((item,index)=><NewItemList id={index+1} name={item.name} qty={item.quantity} price={item.price} total={item.total} />)}</div>
<button onClick={()=>setItemsList([...itemsList,{
          "id":"1",
        "name": "New Item",
        "quantity": 1,
        "price": 0,
        "total": 0,
}])}>AddNewItem</button>
<div className="popUpButtons">
<button>Discard</button>
<button>Save as Draft</button>
<button>Save and Send</button>

    
</div>
    </div>
}
export default Invoice;