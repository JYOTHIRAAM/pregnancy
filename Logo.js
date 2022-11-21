import React from 'react'
import './Logo.css'
import {Link} from 'react-router-dom'
import Login from './Login'
function Logo() {
  return (
      <div className='rec'>
        <Link to="Login" >
          <img className='img' src='https://img.freepik.com/premium-vector/pregnant-logo-with-fetus-concept_11481-963.jpg?w=2000' alt='nottu'/ >
        </Link>
      </div>
  )
}
export default Logo