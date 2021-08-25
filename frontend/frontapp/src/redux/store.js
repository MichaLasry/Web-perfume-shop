import { combineReducers, createStore ,applyMiddleware} from "redux";
import products from './reducers/productReducer'
import users from './reducers/loginReducer'
import purchaseDetails from './reducers/purchaseReducer'
import product from './reducers/productReduce'
import {userMiddleware} from './middleware/login'
import {saveChangesMiddleware} from './middleware/saveChanges'
import purchaseDetailsList from './reducers/paymentReducer'

const reducer =combineReducers({products, product, users, purchaseDetails,purchaseDetailsList})
// applyMiddleware(userMiddleware, saveChangesMiddleware)
// when we submitt the middlewaare the app is crash so we make the server requests from the components
const store=createStore(reducer)
window.store = store

export default store