import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import {addUser, setUserName} from '../../redux/actions'
import {Link} from "react-router-dom"
import { withRouter} from "react-router"
import { useState } from 'react';
import axios from 'axios'

const mapDispatchToProps=(dispatch)=>{
    return{
        addUser:(user)=>dispatch(addUser(user)),
        setUserName:(userName)=>dispatch(setUserName(userName)) 
    }
}
const mapStateToProps=(state)=>{
 return{
    users: state.users.users,
    userName:state.users.userName
  }
}
export default withRouter( connect( mapStateToProps, mapDispatchToProps) (function SignUp(props){

    let refToName=useRef('')
    let refToPassword1=useRef('')
    let refToPassword2=useRef('')

    const addUserAxios=()=>{
      let userName1=refToName.current.value
      let password=refToPassword1.current.value
      let body={userName:userName1, password:password}
      let url='http://localhost:9005/signUp'
      axios.post(url, body).then((result)=>console.log(result))
              .catch((err)=>console.log(err))
  }


    const signUp=()=>{
      

        if(refToPassword1.current.value==refToPassword2.current.value)
        {
            let userName1=refToName.current.value
            let password=refToPassword1.current.value
            props.addUser({userName:userName1, password:password})
            props.setUserName(userName1)
            addUserAxios()
            alert("welcome")
           props.history.push('/')
        }
        else{
            alert("passwords doesn't match")
        }       
        
    }
    return(
        <>
     <div>

<div className="container">
    <div className="row">
        <div className="col-md-4 offset-md-4">
            <div className="login-form bg-light mt-4 p-4">
                <form action="" method="" className="row g-3">
                    <h4>Welcome Back</h4>
                    <div className="col-12">
                        <label>Username</label>
                        <input type="text" ref={refToName} name="username" className="form-control" placeholder="Username"/>
                    </div>
                    <div className="col-12">
                        <label>Password</label>
                        <input type="password" ref={refToPassword1} name="password" className="form-control" placeholder="Password"/>
                    </div>
                    <div className="col-12">
                        <label>Password Again</label>
                        <input type="password" ref={refToPassword2} name="password" className="form-control" placeholder="Password"/>
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="rememberMe"/>
                            <label className="form-check-label" for="rememberMe"> Remember me</label>
                        </div>
                    </div>
                    <div className="col-12">
                    <button type="submit"  className="btn btn-dark float-end" onClick={signUp}  >SIGN UP</button>  
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</div>
        </>
    )
}))