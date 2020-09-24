import React from 'react';
/** =============================================================
  * FUNCION: COMPONENTE HEADER
=============================================================== */
export default function Header(){
  /** ==================================================
    * RENDER VISTA
  ==================================================== */
  return(
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <h5 className="my-0 mr-md-auto font-weight-normal">Empresa X</h5>
      <nav className="my-2 my-md-0 mr-md-3">
        <a className="p-2 text-dark" href="/feature">Features</a>
        <a className="p-2 text-dark" href="/enterprise">Enterprise</a>
        <a className="p-2 text-dark" href="/support">Support</a>
        <a className="p-2 text-dark" href="/pricing">Pricing</a>
      </nav>
      <a className="btn btn-outline-primary" href="/login">Sign up</a>
    </div>
  );

}
/** ==================================================
  * FUNCION: COMPONENTE HEADER
==================================================== */