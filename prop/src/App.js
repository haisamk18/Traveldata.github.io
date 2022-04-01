import logo from './logo.svg';
import './App.css';
import Card from './components/card';
import Navbar from './components/navbr';
import data from "./data";



function App() {

  const datmap =data.map(item =>{
    return (
         <Card
             img={item.imgUrl}
             heading={item.title}
             start={item.startDate}
             end={item.endDate}
             maplink={item.gglMpsUrl}
             location={item.location}
             desc={item.desc}
         
         />
            
    );
    
  })
  
  
  return (
    <div className="App">
      <Navbar />
      {datmap}
         
      
      
      
    </div>
  );
}

export default App;
