import React from 'react'

function Valuta({valuta, prikaziDetalje}) {
  return (
    <div>
      <div class="card">
        
        <img src="https://png.pngtree.com/png-clipart/20221206/ourmid/pngtree-golden-bitcoin-crypto-currency-coin-scattered-3d-rendering-png-image_6424017.png"  height='150px' width='150px' alt="pic"></img>
        
        <div class="card-body">
            <p class="card-title"><b>{valuta.name}</b></p>
            <p class="card-text"><b> Rang: {valuta.rank}</b></p>
            <p class="card-text"><b>Simbol: {valuta.symbol}</b></p>
            <p class="card-text"><b>Vrednost ${valuta.priceUsd}</b></p>
            <button className="btn btn-primary btn-sm" onClick={()=>prikaziDetalje(valuta)}>Detaljnije</button>
        </div>
    </div>
    </div>
  )
}

export default Valuta
