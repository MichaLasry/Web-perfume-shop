import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
export default function Navbar(){
  return(
    <>
    <ul className="nav justify-content-center border">
      <li className="nav-item">
        <Link className="nav-link fs-1" style={{"fontFamily": 'Brush Script MT, cursive','color':'#ffa07a' }} aria-current="page" to="/about">About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link  fs-1"style={{"fontFamily": 'Brush Script MT, cursive', 'color':'#ffa07a' }} to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link  fs-1"style={{"fontFamily": 'Brush Script MT, cursive', 'color':'#ffa07a' }} to="/products">Products</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link  fs-1" to="/shoppingCart"><i className="bi bi-cart2" style={{'color':'black' }} ></i></Link>
      </li>
    </ul>
   
    </>
  )
}
// const mapStateToProps = (state) => {
//   return{

//   }
// }
