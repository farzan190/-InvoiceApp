import Tabs from "./components/Tabs";
import invoiceData from './utils/data.json';
function App() {
  return <div>
    <div>{ invoiceData.map((invoice)=> <Tabs id={invoice.id} createdAt={invoice.createdAt} clientName={invoice.clientName} status={invoice.status}/>)}</div>
     </div>
}

export default App;
