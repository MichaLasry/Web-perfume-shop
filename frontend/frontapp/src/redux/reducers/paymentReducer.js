import produce from 'immer'

const initialState = {
  purchaseDetailList : []
}

const reducer = produce((state, action)=>{
  switch(action.type){
    case 'SAVE_CHANGES':
          {state.purchaseDetailList.push(action.payload)
          console.log(state.purchaseDetailList[0])}
          break;
  }
}, initialState)

export default reducer