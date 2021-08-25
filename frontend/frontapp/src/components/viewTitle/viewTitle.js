import React from 'react'
import {connect} from 'react-redux'
import { useState } from 'react';

function ViewTitle(props){

  return(
    <>
    <div className="container">
      <div className="row">
        <div className="col-2">
          <div  align="left">
              <a href="/login">
              <img src="https://img.icons8.com/ios-glyphs/70/000000/user-male-circle.png"   /> <div >Welcome {props.userName}</div></a>  
              </div>
          </div>
          <div className="col-8">
          <h1  className="display-4" style={{"font-family": 'Brush Script MT, cursive'}}>{props.storeName}</h1>
          </div>
          </div>
    </div>
      </>
  )
}

const mapStateToProps = (state) => {
  return {
    storeName: state.products.storeName,
    userName: state.users.userName
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ViewTitle)
