import React from 'react'
import { Link } from 'react-router-dom'

function NavigacioniMeni() {
  return (
    <div>
      <nav className="navbar navbar-expand-xl navbar-light bg-light ">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"> <b>Pocetna</b></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarBasic"
                            aria-controls="navbarBasic" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link className="navbar-brand" to="/info"> <b>Informacije</b> </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarBasic"
                            aria-controls="navbarBasic" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
    </div>
  )
}

export default NavigacioniMeni
