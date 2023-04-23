import React from 'react'
import { Link } from 'react-router-dom'

function DetaljiValute({valuta}) {
    return (
        <div class="card text">
        
            <img src="https://png.pngtree.com/png-clipart/20221206/ourmid/pngtree-golden-bitcoin-crypto-currency-coin-scattered-3d-rendering-png-image_6424017.png"  height='400px' width='400px'className='detailspic' alt="pic"></img>
            
            <div class="card-body">
                <h1 class="card-title"> <b>Detalji o kriptovaluti</b></h1>
                <h3 class="card-text"><b>Ime:</b> {valuta.name}</h3>
                <p class="card-text"><b>Simbol:</b> {valuta.symbol}</p>
                <p class="card-text"><b>Kolicina:</b> {valuta.supply}</p>
                <p class="card-text"><b>Vrednost:</b> {valuta.priceUsd}</p>
                <p class="card-text"><b>Procentnualna promena u proslednjih 24h:</b> {valuta.changePercent24Hr}</p>
                <Link to="/">
                 <button class="btn btn-primary">Nazad</button>
                </Link>
            </div>
            <div class="card-footer text-muted">
                <a href="Informacije su samo informativnog karaktera" />
            </div>
        </div>
      )
}

export default DetaljiValute
