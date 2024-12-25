import { useContext, useEffect, useState } from "react"
import { BillContext } from "../context";

const NewItemList=({id,name,qty,price,total})=>{
    const [itemName,setItemName]=useState(name);
    const [itemQuantity,setQuantity]=useState(qty);
    const [itemPrice,setPrice]=useState(price);
    const [itemTotal,setTotal]=useState(total);
    const {exp,setExp,itemsList,setItemsList,setInvoices,invoices,selectedTab}=useContext(BillContext);

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
          
      const updateItemsList=itemsList.map((itm,index)=>{
        if(id==index+1){
        return {
          ...itm,
          name:itemName,
          quantity:itemQuantity,
          price:itemPrice,
          total:itemTotal,
        }}
        else{
          return itm;
        }
      })
      setItemsList(updateItemsList);
      setInvoices(updatedInvoice);
      
    }
    const naive=()=>{
      const updatedItemslist= itemsList.map((item,index)=>{ 
        if(item.id===index+1){
          
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
        // update the itemslist and then it will be automcatically be there right . YOU JUST NEED TO UPDATE THE ITEMSLIST JUST UPDATE THE ITEMSLIST 

      
      });
//      setInvoices(updatedInvoice);
      
    }


   

    useEffect(
     ()=>{

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

