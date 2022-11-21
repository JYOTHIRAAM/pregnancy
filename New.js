import React, { useState } from 'react'
function New(){
    const [college,setCollege]=useState({Name:"nottu" ,year:2025})
    var obj = () =>{
    return(
        setCollege({Name:"nottu PRAKASH",year:2003})
        )
    }
    return(
        <><center>
        <h1>
            {college.Name}
        </h1>
        <h1>


            {college.year}
        </h1>
        <h1>

            <button onClick={obj}>nottu</button>
        </h1>
        </center>
        </>
    )
}

export default New 