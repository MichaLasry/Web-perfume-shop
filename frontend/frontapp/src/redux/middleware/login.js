import axios from 'axios'

export  const userMiddleware=(state)=>(next)=>(action)=>{
 
    if(action.type==='ADD_USER'){
        let body=action.payload
        let url='http://localhost:9005/signUp'
        axios.post(url, body).then((result)=>
        console.log(result))
        .catch((err)=>
            console.log(err)
        )
        return next(action);
    }
    if(action.type==='SET_USER_NAME'){
        return next(action);
    }
    if(action.type==='CHECK_IF_USER_EXIST'){
        let body=action.payload
        let url='http://localhost:9005/signIn'
        axios.post(url, body).then((result)=>
        console.log(result))
        .catch((err)=>
            console.log(err)
        )
        return next(action);
    }

    if(action.type==="UPDATE_USER"){
        let id=action.payload.id
        let body=action.payload
        let url='http://localhost:9005/updateUser/:id'
        axios.post(url, id,body).then((result)=>
        console.log(result))
        .catch((err)=>
            console.log(err)
        )
        return next(action);
    }
    if(action.type==="DELETE_USER"){
        
        let url='http://localhost:9005/deleteUser/:id'
        let id=action.payload
        axios.delete(url, id).then((result)=>
        console.log(result))
        .catch((err)=>
            console.log(err)
        )
        return next(action);
    }
}