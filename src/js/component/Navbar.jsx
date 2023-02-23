import React from 'react';

export const Navbar = () => {
   return  ( <nav class="navbar navbar-expand-xl navbar-dark bg-dark" aria-label="Third navbar example">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Start Bootstrap</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className='d-flex justify-content-end'>
      <div className="collapse navbar-collapse" id="navbarsExample03">
        <ul className="navbar-nav me-auto  mb-2 mb-sm-0">
          <li className="nav-item ">
            <a className="nav-link disabled">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled">Disabled</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled">Contact</a>
          </li>
          </ul>
      </div>
      </div>
    </div>
  </nav>)
};