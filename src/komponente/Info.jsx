import React from 'react'
import EmailForma from './EmailForma'

function Info() {

  function prijavise( email) {
    alert('Uspešna prijava na newsletter Vašom mejl adresom '+ email+ '.')
  }

  return (
    <div className='info'>
      <h3>Sva prava zadžana. Na ovoj stranici možete ostaviti svoju email adresu kako biste se pretplatili na novosti koje ćemo slati.</h3>
      <EmailForma tekst='Prijavi se na newsletter' prijavise={prijavise} />
    </div>
  )
}

export default Info
