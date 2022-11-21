import React from 'react'
import { Form, Link } from 'react-router-dom'
import './Login.css'
import Opening from './Opening'
function Login() {
  return (
    <center>
      <form>
        <div class="v1_2"><div class="v1_3"></div>
        <div class="v1_4"></div><div class="v1_5">
          </div><div class="v1_8"></div><div class="name"></div>
          <span class="v1_10">
            <input type="text" placeholder="ENTER USERNAME" autoFocus required></input></span>
          <span class="v1_11"><input type="password" placeholder="ENTER PASSWORD" autoFocus required></input></span>
          <div class="v1_13"></div><div class="v1_15"></div>
          <span class="v1_16">FORGET PASSWORD??</span>
          <div class="v1_21"></div><div class="v1_20"></div>
          <div class="v1_23"></div><div class="v1_27"></div>
          <span class="v4_2">OR</span><span class="v4_3">Sign In With Google</span>
          <span class="v4_4">Sign In With Facebook</span><div class="v11_12"></div>
          <button class="v92_2" type='Submit'>
          </button>
            <Link to="Opening"><span class="v109_89">LOGIN</span></Link>
            </div>
      </form>
    </center>
  )
}

export default Login