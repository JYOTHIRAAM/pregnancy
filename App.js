import React, { Component } from 'react'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Logo from './Logo'
import Login from './Login'
import Opening from './Opening';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div>
            <Routes>
              <Route path='/' element={<Logo/>}></Route>
              <Route path='/Login' element={<Login/>}></Route>
              <Route path='/Login/Opening' element={<Opening/>}></Route>
            </Routes>
          </div>
        </BrowserRouter>
    )
  }
}
export default App