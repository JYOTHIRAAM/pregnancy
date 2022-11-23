import React, { Component } from 'react'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Logo from './Logo'
import Login from './Login'
import Opening from './Opening';
import Diet from './Diet';
import Days from './Days';
import Mon from './Mon';
import Sun from './Sun';
import Tues from './Tues';
import Wed from './Wed';
import Sat from './Sat';
import Thr from './Thr';
import Fri from './Fri';
import Ex from './Ex';
import Keep from './Keep';
import Pile from './Pile';
import Plank from './Plank';
import Slide from './Slide';
import Curl from './Curl';
import One from './One';
import Baby from './Baby';
import Tools from './Tools';
import Cal from './Cal';
import Kick from './Kick';
import Music from './Music';
import Do from './Do';
import Easy from './Easy';
import Kickc from './Kickc';
import Baby1 from './Baby1';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div>
            <Routes>
              <Route path='/' element={<Logo/>}></Route>
              <Route path='/Login' element={<Login/>}></Route>
              <Route path='/Login/Opening' element={<Opening/>}></Route>
              <Route path='/Login/Opening/Diet' element={<Diet/>}></Route>
              <Route path='/Login/Opening/Diet/Days' element={<Days/>}></Route>
              <Route path='/Login/Opening/Diet/Days/Sun' element={<Sun/>}></Route>
              <Route path='/Login/Opening/Diet/Days/Mon' element={<Mon/>}></Route>
              <Route path='/Login/Opening/Diet/Days/Tues' element={<Tues/>}></Route>
              <Route path='/Login/Opening/Diet/Days/Wed' element={<Wed/>}></Route>
              <Route path='/Login/Opening/Diet/Days/Thr' element={<Thr/>}></Route>
              <Route path='/Login/Opening/Diet/Days/Fri' element={<Fri/>}></Route>
              <Route path='/Login/Opening/Diet/Days/Sat' element={<Sat/>}></Route>
              <Route path='/Login/Opening/Ex' element={<Ex/>}></Route>
              <Route path='/Login/Opening/Ex/Keep' element={<Keep/>}></Route>
              <Route path='/Login/Opening/Ex/Pile' element={<Pile/>}></Route>
              <Route path='/Login/Opening/Ex/Plank' element={<Plank/>}></Route>
              <Route path='/Login/Opening/Ex/Slide' element={<Slide/>}></Route>
              <Route path='/Login/Opening/Ex/Curl' element={<Curl/>}></Route>
              <Route path='/Login/Opening/Ex/One' element={<One/>}></Route>
              <Route path='/Login/Opening/Baby1' element={<Baby1/>}></Route>
              <Route path='/Login/Opening/Baby1/Baby' element={<Baby/>}></Route>
              <Route path='/Login/Opening/Tools' element={<Tools/>}></Route>
              <Route path='/Login/Opening/Tools/Cal' element={<Cal/>}></Route>
              <Route path='/Login/Opening/Tools/Kick' element={<Kick/>}></Route>
              <Route path='/Login/Opening/Tools/Kick/kickc' element={<Kickc/>}></Route>
              <Route path='/Login/Opening/Tools/Music' element={<Music/>}></Route>
              <Route path='/Login/opening/Diet/Do' element={<Do/>}></Route>
              <Route path='/Login/Opening/Diet/Easy' element={<Easy/>}></Route>
              
            </Routes>
          </div>
        </BrowserRouter>
    )
  }
}
export default App