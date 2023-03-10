import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">My Food Truck</a>
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
      <div className="jumbotron">
        <h1>Welcome to My Food Truck</h1>
        <p>We serve the best food in town. Check out our menu and visit us today!</p>
        <a className="btn btn-primary btn-lg" href="#" role="button">View Menu</a>
      </div>
    </div>
  );
}

export default App;
