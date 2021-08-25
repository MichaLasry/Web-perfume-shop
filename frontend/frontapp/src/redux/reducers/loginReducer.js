import produce from 'immer'

const initialState={
  userName:"username",
  users:[]
}


const reducer=produce((state=initialState, action)=>{
  switch(action.type){
      case 'SET_USER_NAME':
             { state.userName = action.payload}
             break;
       case 'ADD_USER':
            { state.users.push(action.payload)}
            break;
       case 'CHECK_IF_USER_EXIST':
            {state.users.find(user=>user.id==action.payload.id)}
            break;
  }
  }, initialState)
  export default reducer