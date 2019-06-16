import React from 'react';
import logo from '../logo.svg';
import './App.css';
import Carousel from '../Components/Album/Carousel';
import Nav from '../Components/Nav/Nav'
import Album from '../Components/Album/Album';
import {bathrooms} from '../Components/Album/Photos/Bathrooms'
import { singlerooms } from '../Components/Album/Photos/SingleRooms';
import { doublerooms } from '../Components/Album/Photos/DoubleRooms';
import { twinbedrooms } from '../Components/Album/Photos/TwinBedrooms';
import { triplerooms } from '../Components/Album/Photos/TripleRooms';
import { common } from '../Components/Album/Photos/Common';

function App() {

  return (

    <div className="App">
      <Nav />

      {/* <Album photos={bathrooms}/>
      <Album photos={singlerooms}/>
      <Album photos={doublerooms}/>
      <Album photos={twinbedrooms}/>
      <Album photos={triplerooms}/> 
      <Album photos={common}/> */}
      <Carousel/>

    </div>
  )
}

export default App;
