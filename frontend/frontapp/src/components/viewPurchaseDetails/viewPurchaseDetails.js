import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import ViewItemCart from '../viewItemCart/viewItemCart'
import {setTotalPurchase} from '../../redux/actions'
import PopupModel from '../popupModel/popupModel'
import { Link , withRouter} from 'react-router-dom'

function ViewPurchaseDetails(props){
// let [iscart, setIsCard] = useEffect(false)
  let cartContent = props.purchaseDetails
  console.log(cartContent)
  let sum = 0

  const setTotalPurchase = (sum) =>{
    props.setTotalPurchase(sum)
  }
  // if (cartList!=null){
  //   setIsCard(true)
  // }


  const [check, setCheck]=useState(false)
  
// useEffect(() => {
//   let result=window.confirm("Do U want to make a payment?")
//   if(result)
//   props.history.push('/payment')
//  else 
//  props.history.push('/shoppingCart')
// }, [check]);



  let cartList = cartContent.map((item, index) =>{
    console.log(item)
    sum = sum + (item.price*item.quantity)
    setTotalPurchase(sum)
    return(<ViewItemCart item={item} key={index}></ViewItemCart> )
  })
 
  return(
    <>
    <div className='container'>
        <div className="row">
            <div className="col-6">
                <div className="card" style={{"width": '20rem'}}>
                      <div className="card-header">Shopping Cart:</div>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">{cartList}</li>
                      </ul>
                    <div className="card-footer">Total payment :{sum} NIS</div>
              </div>
            </div>
            <div className='col-6'>
                <p className="fs-1 fw-light"> Total payment :{sum} NIS</p>
                <div className="d-grid">
                  {/* onClick={()=>setCheck(true)} */}
                <Link  to='/payment'><button   className="btn btn-outline-primary"  type="button" onClick={()=>setCheck(true)}> Checkout</button></Link>
   
                </div>
          {/* {isOpen && <PopupModel handleClose={submitOrder} content={<><button className="btn">Test button</button></>}></PopupModel>} */} 
          </div>
        </div>
    </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return{
    purchaseDetails: state.purchaseDetails.productsList
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    setTotalPurchase: (sum)=>dispatch(setTotalPurchase(sum))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ViewPurchaseDetails)