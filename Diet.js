import React from 'react'
import { Link } from 'react-router-dom'
import './Diet.css'
function Diet(){
  return (
    <center>
        <div class="v23_2"><div class="v22_19"></div><div class="v22_33"></div>
        <Link to="Days">
            <span class="v22_38">DAY WISE</span><div class="v22_32"></div>
        </Link>
        <div class="v22_36"></div><Link to="Do"><span class="v22_40">DO & DON’T</span></Link>
        <div class="v22_37"></div><Link to="Easy"><span class="v22_41">EASY CONSUMES</span></Link>
        </div>
    </center>
  )
}
export default Diet