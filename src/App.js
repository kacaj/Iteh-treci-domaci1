import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import DetaljiValute from './komponente/DetaljiValute';
import Valute from './komponente/Valute';
import NavigacioniMeni from './komponente/NavigacioniMeni';
import Info from './komponente/Info';


function App() {
  const [valute, setValute] = useState([]);
   
    useEffect(() => {
        axios.get('https://api.coincap.io/v2/assets').then(res => {
            console.log(JSON.stringify(res));
            setValute(res.data.data)
        });
    }, []);

    const [valuta, setValuta]=useState(valute[0]);
    const [valuteZaPrikaz, setValuteZaPrikaz]=useState(valute);

    function pretrazi(e){
      let pretraga=[];
      valute.forEach((v)=>{
          if(v.name.toLowerCase().indexOf(e.target.value.toLowerCase())>-1){
              pretraga.push(v)
          }
      })
      setValuteZaPrikaz(pretraga);
  }
  
  return(
    <div>
      <Router>
        <NavigacioniMeni/>
        <Routes>
          <Route exact path="/" element={<Valute  valute={valuteZaPrikaz}   setValuta={setValuta}  pretrazi={pretrazi}/>} />
          <Route path="/detalji" element={<DetaljiValute valuta={valuta}/>}/>
          <Route path="/info" element={<Info/>}/>
        </Routes>
      </Router >
    </div>
  );
}

export default App;
