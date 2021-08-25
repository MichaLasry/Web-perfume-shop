import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import {checkIfUserExist, setUserName} from '../../redux/actions'
import {Link} from "react-router-dom"
import { useState } from 'react';
import { withRouter} from "react-router"


const mapDispatchToProps=(dispatch)=>{
    return{
        checkIfUserExist:(user)=>dispatch(checkIfUserExist(user)),
        setUser:(userName)=>dispatch(setUserName(userName))
    }
}
const mapStateToProps=(state)=>{
 return{
    users: state.users.users,
    userName:state.users.userName
  }
}
export default withRouter (connect( mapStateToProps, mapDispatchToProps) (function Login(props){


    let refToName1=useRef('')
    let refToPassword3=useRef('')

   
    const signIn=()=>{
            let userName1=refToName1.current.value
            let password=refToPassword3.current.value
            props.checkIfUserExist({userName:userName1, password:password})  
            props.setUser(userName1)
            props.history.push('/')
    }

    return(
        <>
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <div className="login-form bg-light mt-4 p-4">
                            <form action="" method="" className="row g-3">
                                <h4>Welcome</h4>
                                <div className="col-12">
                                    <label>Username</label>
                                    <input type="text" ref={refToName1} name="username" className="form-control" placeholder="Username"/>
                                </div>
                                <div className="col-12">
                                    <label>Password</label>
                                    <input type="password" ref={refToPassword3} name="password" className="form-control" placeholder="Password"/>
                                </div>
                                <div className="col-12">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="rememberMe"/>
                                        <label className="form-check-label" for="rememberMe"> Remember me</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button type="submit"  className="btn btn-dark float-end" onClick={signIn}>Login</button>
                                </div>
                            </form>
                            <hr className="mt-4"/>
                            <div className="col-12">
                                <p className="text-center mb-0">Have not account yet? <Link to="/signUp">Signup</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
        </>
    )
}))