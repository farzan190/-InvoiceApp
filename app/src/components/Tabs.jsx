import { useState } from 'react';
import { Link } from 'react-router-dom';
import Arrowimg from '../utils/icon-arrow-right.svg' ;
import { useContext } from 'react';
import { BillContext } from '../context';


const Tabs=({key,id,createdAt,clientName,itemTotal,status})=>{
    const {selectedTab,setSelectedTab}=useContext(BillContext);

        const handleOnClick=(tabId)=>{
            setSelectedTab(tabId);
            return ;
        }

    return <Link to={"/receipt"} className='link'><div className="Tab" id={id} onClick={(e)=>setSelectedTab(e.target.id)}> 
         <div className="left-details">
         <div className="bill-Id">{id} </div>
         <div className="createdAt">{createdAt}</div>
         <div className="clientName">{clientName}</div>
         <div>{console.log(selectedTab)}</div>
         </div>
         <div className="right-details">
         <div className="itemTotal">£{itemTotal}</div>
         <button className="status-button"><div className="status-indicator"></div>{status}</button>
         <img src={Arrowimg} alt='arrow-image'/>
         </div>
    </div></Link>
}
export default Tabs;