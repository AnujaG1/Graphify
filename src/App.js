import logo from './logo.svg';
import './App.css';
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum();

function App() {
  return (
    <>
    <nav className="navbar navbar-expand-lg custom-navbar">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Graphify</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Algorithms
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Prim's Algorithm</a></li>
            <li><a className="dropdown-item" href="#">Kruskal's Algorithm</a></li>
            <li><a className="dropdown-item" href="#">Dijkstra's Algorithm</a></li>
            <li><a className="dropdown-item" href="#">Floyd-Warshall's Algorithm</a></li>
            
          </ul>
        </li>

      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<div class="card">
  <div class="card-header">
    Quote
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>A well-known quote, contained in a blockquote element.</p>
      <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
    </blockquote>
  </div>
</div>
    </>
  );
}

export default App;
