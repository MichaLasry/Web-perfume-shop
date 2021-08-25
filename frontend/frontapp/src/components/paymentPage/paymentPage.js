import React, {useState} from 'react'
import ItemInPayment from '../itemInPayment/itemInPayment'
import {connect} from 'react-redux'
import {setDate, saveChanges} from '../../redux/actions'
import axios from 'axios'

// import date from ''

function PaymentPage(props){
  let [display, setDisplay] = useState({'display': 'none'})

  let items = props.purchaseDetails
  let itemsList = items.map((item, index)=>{
    return <ItemInPayment item={item} index={index}></ItemInPayment>
  })
  const saveChangesAxios=()=>{
      let body={productsAmount:itemsList.length, sum:props.totalPurchase,date:props.date, userName:props.userName}
      let url='http://localhost:9005/createPruchaseDetails'
      axios.post(url, body).then((result)=>console.log(result))
              .catch((err)=>console.log(err))
  }

  const saveChanges = () =>{
    setDisplay({'display': 'block'})
    let date = Date.now()
    let today = new Date(date)
    props.setDate(today)
    props.saveChanges({productsList:props.purchaseDetails, totalPurchase:props.totalPurchase,date:today, userName:props.userName})
    saveChangesAxios()
  }
  return(
    <>
      <div className="row">
  <div className="col-sm-6">
    <div className="col">
      <h1 className="fs-1 fw-light">Total Payment: {props.totalPrice}</h1>

    </div>
    <div className="col">
      
    <input className="btn btn-primary  launch" type="submit" onClick={saveChanges} data-toggle="modal" data-target="#staticBackdrop"value="Payment"/>
    <div className="alert alert-info" role="alert" style={display}>Payment completed successfully!</div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      {itemsList}
    </div>
  </div>
</div>
    </>
  )
}
const mapStateToProps = (state) => {
  return{
    purchaseDetails: state.purchaseDetails.productsList,
    totalPurchase: state.purchaseDetails.totalPurchase,
    date: state.purchaseDetails.date,
    userName: state.users.userName

  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    setDate: (date)=>dispatch(setDate(date)),
    saveChanges: (data)=>dispatch(saveChanges(data))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PaymentPage)