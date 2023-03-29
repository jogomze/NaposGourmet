//Problema en los nombres de clases con el css resolver proxima vez



import React from 'react';
import './App.css';
import Menu from './Menu';
import NaposLogo from './img/NaposLogoOG.jpg';



function App() {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
     <img src={NaposLogo} alt="My Food Truck" />
      </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Menu</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container-fluid landing-page">
        <div className="row">
          <div className="col-lg-6">
            <h1>Welcome to My Food Truck</h1>
            <p>We serve the best food in town. Check out our menu and visit us today!</p>
            <a className="btn btn-primary btn-lg" href="#" role="button">View Menu</a>
          </div>
        </div>

        {/* Menu */}
        <div className="row">
          <div className="col-lg-12">
            <Menu />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-light py-4">
        <div className="container text-center">
          <p className="text-muted">&copy; 2023 Napo's Gourmet Food Truck. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
