import { useContext, useEffect, useState } from "react"
import { BillContext } from "../context";

const NewItemList=({id,name,qty,price,total})=>{
    const [itemName,setItemName]=useState("NewItem");
    const [itemQuantity,setQuantity]=useState(0);
    const [itemPrice,setPrice]=useState(0);
    const [itemTotal,setTotal]=useState(0);
    const {itemsList,setItemsList}=useContext(BillContext);
    
    const updatedList=itemsList.map((item,index)=>{
        if(index+1==id){
        return {
              ...item,
              name:itemName,
              quantity:itemQuantity,
              price:itemPrice,
              total:itemTotal,
            }   }
        else{
                return item;
        }    
    })

    useEffect(
     ()=>{
        setItemsList(updatedList);
     }   ,[itemName,itemQuantity,itemPrice,itemTotal])

   console.log(itemsList);


return (<div>
         <div>
        <input  type="text"   value={itemName}       onChange={(e)=>setItemName(e.target.value)}/>
        <input  type="number" value={itemQuantity}   onChange={(e)=>setQuantity(e.target.value)}/>
        <input  type="number" value={itemPrice}      onChange={(e)=>setPrice(e.target.value)}/>
        <input  type="number" value={itemTotal}      onChange={(e)=>setTotal(e.target.value)}/>
        </div>

</div>)
}

export default NewItemList;

