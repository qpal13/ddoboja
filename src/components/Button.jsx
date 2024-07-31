import React from 'react'
import {Link} from "react-router-dom"
import "./Button.css"

function Button(){
    return (
        <Link to="signup">
        <button className='btn'>로그인</button>
        </Link>
    )
}

export default Button