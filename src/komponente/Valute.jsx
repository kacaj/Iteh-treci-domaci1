import React from 'react'
import { useNavigate } from 'react-router-dom';
import Valuta from './Valuta';
import Pretraga from './Pretraga';

function Valute({valute, setValuta, pretrazi}) {
    let navigate = useNavigate();

    function prikaziDetalje(valuta){
 
     setValuta(valuta);
     navigate('/detalji');
   }
 
   return (
     <div>
       <Pretraga pretrazi={pretrazi}/>
       <div class="row row-cols-1 row-cols-sm-3 g-4">
       {
         valute.map(valuta => (
             <Valuta key={valuta.id} valuta={valuta} prikaziDetalje={prikaziDetalje} />
         ))
       }
       </div>
     </div>
   )
}

export default Valute
