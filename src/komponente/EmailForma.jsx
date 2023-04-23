import React from 'react'
import { useState } from 'react'

function EmailForma({tekst,prijavise}) {
    const [email, setEmail] = useState('');
   

    function handleEmail(e) {
        setEmail(e.target.value);
    }

    
    return (
        <div>
            <form className="form">
                <h3> {tekst}</h3>
                <div className="element">
                    <label><h2>Unesite email:</h2> </label>
                    <input type="email" className="form-control" value={email} onChange={handleEmail}></input>
                </div>
                <button className="btn btn-success btn-sm" type="submit" onClick={() => prijavise(email)} value={email} onChange={handleEmail}><b>Prijavi se!</b></button>
            </form>
        </div>
    );
}

export default EmailForma
