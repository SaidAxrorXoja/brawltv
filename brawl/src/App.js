import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import hd from './components/img/hayday-removebg-preview.png'
import React from 'react';
import bs from './components/img/image-removebg-preview.png'
import clrl from './components/img/clashroyale.png'
import clash from './components/img/clash-removebg-preview.png'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Sign from "./Signin";
import Brawl from './components/Brawl';
import Boom from './components/Boombeach';
import Royale from './components/Royale';
function App() {
  return (
   <>
    <BrowserRouter>
   <Routes>
    <Route path="/" element={<Navv/>}/>
    <Route path='/app' element={<Navv/>}/>
    <Route path="/brawl" element={<Brawl/>}/>
   <Route path="/sign" element={<Sign/>}/>
   <Route path='/boom' element={<Boom/>}/>
   <Route path='/royale' element={<Royale/>}/>
   </Routes>
    </BrowserRouter>
   </>
  );
}
 
const Navv =()=>{
  return(<> <div className='divbg '>
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
<div className="container-fluid bg-dark">
<a className="navbar-brand" href="#"><img className='bsd' src={bs} alt="" /></a>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav"  aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="main_nav">
<ul className="navbar-nav">
  <li className="nav-item active" id='tr'> <a className="nav-link" href="app">Home </a> </li>
  <li className="nav-item"><a className="nav-link" href="#"> Games </a></li>
  <li className="nav-item" id='li3'><a className="nav-link" href="https://supercell.com/en/" target={'_blank'}> My favorite site</a></li>
  <li className="nav-item"><a className="nav-link" href="#"> Discord </a></li>
  <li className="nav-item dropdown" id="myDropdown">
    <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">  Game menu  </a>
    <ul className="dropdown-menu">
      <li> <a className="dropdown-item" href="brawl"><img className='imm' src={bs} alt="" /> Brawl Stars </a></li>
      <li><a className="dropdown-item" href="boom"><img className='imm' src={clash} alt="" /> Clash of Clans </a></li>
      <li><a className="dropdown-item" href="royale"><img className='imm' src={clrl} alt="" /> Clash Royale </a></li>
    </ul>
  </li>
</ul>
</div>
<div className="container-fluid">
  <form className="d-flex formm">
    <input className="form-control mx-3" type="search" placeholder="Search" aria-label="Search"></input>
    <button className="btn btn-outline-success" type="submit">Search</button>
    <a href="sign" class="btn btn-outline-success  w-25 mx-3" role="button" aria-pressed="true">Sign In</a>
  </form>
  
</div>
</div>
</nav>

<div className='row p-3' id='divrek'>
  <div className="col-sm-3 text-dander" id='divid'><div className='divimg '><img className='bdrek' src={bs} alt="" /></div><br />
  <h5 className='h5'><b>Makers of Hay Day, Clash of Clans, Boom Beach,Clash Royale and Brawl Stars...</b></h5></div>
</div>
</div> </>
   


   );
}

export default App;
