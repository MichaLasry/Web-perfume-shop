import produce from 'immer'

const initialState={
  productsList:[],
  totalPurchase: 0,
  date:"1.1.2021"
}
const reducer=produce((state, action)=>{
  console.log("reducer")
    switch(action.type){
        case 'ADD_PRODUCT':
          console.log("reducer")
            {state.productsList.push(action.payload)}
            break;
        case 'DELETE_ITEM':
          {state.productsList = state.productsList.filter(product=>product.productName!==action.payload.productName)}
          break;
        case 'SET_TOTAL_PURCHASE':
          {state.totalPurchase = action.payload}
          break;
        case 'CHANGE_QUANTITY':
          {state.productsList.find(product=>product.productName==action.payload.product.productName).quantity=action.payload.quantity}
          break;
        case 'CHANGE_TOTAL':
          {state.productsList.find(product=>product.productName==action.payload.product.productName).price=action.payload.price}
          break;
        case 'SET_DATE':
          {state.date = action.payload}
    }
}, initialState)
export default reducer