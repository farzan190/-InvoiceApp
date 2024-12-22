import { useContext, useEffect, useState } from "react"
import { BillContext } from "../context";

const NewItemList=({id,name,qty,price,total})=>{
    const [itemName,setItemName]=useState(name);
    const [itemQuantity,setQuantity]=useState(qty);
    const [itemPrice,setPrice]=useState(price);
    const [itemTotal,setTotal]=useState(total);
    const {exp,setExp,itemsList,setItemsList,setInvoices,invoices,selectedTab}=useContext(BillContext);

     // if the id of the item in the itemlist matches with the id of the passed items 
    const shave=()=>{
      const updatedInvoice= invoices.map((invoice)=>{ 
        if(invoice.id===selectedTab){
          
        return {...invoice,
          items:invoice.items.map((i,index)=>{
             if(index+1==id){
            return {
              ...i,
              name:itemName,
              quantity:itemQuantity,
              price:itemPrice,
              total:itemTotal,
            }}
            else {
              return i;
            }


          }),
        }}
        else {
          return invoice;
        }
      
      });
      setInvoices(updatedInvoice);
      
    }



    const updatedList=itemsList.map((item,index)=>{           
      if(index+1==id){  
        
      return {
              ...item,
              name:itemName,
              quantity:itemQuantity,
              price:itemPrice,
              total:itemTotal,
            }        
        }
        else{
          return item;
        }

    })


    useEffect(
     ()=>{
     // setItemsList(updatedList);
      //  setExp(updatedList);
     shave();

        
     }   ,[itemName,itemQuantity,itemPrice,itemTotal])



return (
         <div className="itemInputFields">
        <input   type="text"   value={itemName}      onChange={(e)=>setItemName(e.target.value)}/>
        <input  type="number" value={itemQuantity}   onChange={(e)=>setQuantity(e.target.value)}/>
        <input  type="number" value={itemPrice}      onChange={(e)=>setPrice(e.target.value)}/>
        <input  type="number" value={itemTotal}      onChange={(e)=>setTotal(e.target.value)}/>
        
        </div>

)
}

export default NewItemList;

