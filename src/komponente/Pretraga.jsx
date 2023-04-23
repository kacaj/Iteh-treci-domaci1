import React from 'react'

function Pretraga({pretrazi}) {
  return (
   
      <div className="pretraga">
        <h3>Pretraži kriptovalute</h3>
      <form className="d-flex">
        <input className="form-control me-10" type="search" placeholder="Pretrazi" onInput={pretrazi} />
      </form>
    </div>
      

  )
}

export default Pretraga
