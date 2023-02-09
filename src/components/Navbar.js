import React from 'react'
import PropTypes from 'prop-types' 
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div style={props.cssstyle}>
      <ul>
        <li> 
          <Link to = "/" >Home</Link>
        </li>
        <li> 
            <Link to = "read" >{props.aboutBar}</Link>
        </li>  
        {/* aise me pass kr skta hu.  */}
        {/* Aise object and objects me kuch bhi like links, names, string, number, etc wrap krke pass krke yaha la skta hu. */}
        <li> 
          <Link to = "text" >{props.contactBar}</Link>
        </li>
        <li>Me</li>
      </ul>
    </div>
  )
}

Navbar.propTypes = {contactBar: PropTypes.string.isRequired,
                    aboutBar: PropTypes.string.isRequired
                    }

                    /*ab is required walo ko send krna hi padega nahi to error de dega. */