import Arrowimg from '../utils/icon-arrow-right.svg' ;


const Tabs=({id,createdAt,clientName,itemTotal,status})=>{
    return <div className="Tab"> 
         <div className="left-details">
         <div className="bill-Id">{id} </div>
         <div className="createdAt">{createdAt}</div>
         <div className="clientName">{clientName}</div>
         </div>
         <div className="right-details">
         <div className="itemTotal">£{itemTotal}</div>
         <button className="status-button"><div className="status-indicator"></div>{status}</button>
         <img src={Arrowimg} alt='arrow-image'/>
         </div>
    </div>
}
export default Tabs;