const Tabs=({id,createdAt,clientName,status})=>{
    return <div className="slip"> 
         <div>{id} </div>
         <div>{createdAt}</div>
         <div>{clientName}</div>
         <div>{status}</div>
    </div>
}
export default Tabs;