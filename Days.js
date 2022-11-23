import React from 'react'
import './Days.css'
import { Link } from 'react-router-dom'
function Days() {
  return (
    <div class="v23_103">
        <div class="v23_108"></div>
        <div class="v109_33"></div>
        <div class="v23_126"></div>
        <div class="v22_43"></div>
        <Link to="Sun"><span class="v22_51">SUNDAY</span></Link>
        <div class="v22_44"></div>
        <div class="v22_45"></div>
        <div class="v22_46"></div>
        <div class="v22_47"></div>
        <div class="v22_48"></div>
        <Link to="Fri"><span class="v22_56">FRIDAY</span></Link>
        <div class="v22_49"></div>
        <Link to="Sat"><span class="v22_57">SATURDAY</span></Link>
        <Link to="Mon"><span class="v22_52">MONDAY</span></Link>
        <Link to="Tues"><span class="v22_53">TUESDAY</span></Link>
        <Link to="Wed"><span class="v22_54">WEDNESDAY</span></Link>
        <Link to ="Thr"><span class="v22_55">THURSDAY</span></Link></div>
  )
}

export default Days