export function addProduct(newProduct){
  console.log("action")
  return{type:"ADD_PRODUCT",payload:newProduct}
}
export function changeTotal(info){
  return{type:"CHANGE_TOTAL", payload:info}
}
export function changeQuantity(quantity){
  return{type:'CHANGE_QUANTITY', payload:quantity}
}
export function deleteItem(item){
  return{type:'DELETE_ITEM', payload:item}
}
export function setTotalPurchase(sum){
  return{type:'SET_TOTAL_PURCHASE',payload:sum}
}
export function setUserName(userName){
  return{type:"SET_USER_NAME", payload:userName}
}
export function addUser(newUser){
  return{type:"ADD_USER",payload:newUser}
}
export function checkIfUserExist(user){
  return{type:"CHECK_IF_USER_EXIST", payload:user}
}
export function setDate(date){
  return{type:'SET_DATE', payload:date}
}
export function saveChanges(data){
  return{type:'SAVE_CHANGES', payload:data}
}