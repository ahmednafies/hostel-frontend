import React from 'react';
import logo from '../logo.svg';
import './App.css';
import Carousel from '../Components/Album/Carousel';
import Nav from '../Components/Nav/Nav'
import Grid from '@material-ui/core/Grid';
import Album from '../Components/Album/Album';
import {bathrooms} from '../Components/Album/Photos/Bathrooms'
import { singlerooms } from '../Components/Album/Photos/SingleRooms';
import { doublerooms } from '../Components/Album/Photos/DoubleRooms';
import { twinbedrooms } from '../Components/Album/Photos/TwinBedrooms';
import { triplerooms } from '../Components/Album/Photos/TripleRooms';
import { common } from '../Components/Album/Photos/Common';
import Router from '../Components/Album/Router';

function App() {

  return (

    <div className="App">
      <Nav />
      <Carousel/>
      <Router/>
      //Todo: hello
    </div>
  )
}

export default App;
