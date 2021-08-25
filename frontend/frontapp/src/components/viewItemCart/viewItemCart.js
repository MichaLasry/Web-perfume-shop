import React ,{useState}from 'react'
import {connect} from 'react-redux'
import firebase from '../../firebase/config'
import {changeTotal, changeQuantity, deleteItem} from '../../redux/actions'
function ViewItemCart(props){
  let priceInit = props.item.price
  const [price,setPrice] = useState(priceInit)
  const [imageUrl, setImageUrl] = useState('')
  const storage = firebase.storage();
  const storageRef = storage.ref();
  const disImage = async() => {
    try{
      let imageRef = await storageRef.child(props.item.imageFile)
      let url = await imageRef.getDownloadURL()
      setImageUrl(url)
    }
    catch (error){
      switch (error.code) {
        case 'storage/object-not-found':
          console.log("File doesn't exist")
          break;
        case 'storage/unauthorized':
          console.log("User doesn't have permission to access the object")
          break;
      }
    }
  } 
  disImage()
  const calculatePrice = (e) => {
    setPrice(e.target.value*priceInit)
    props.updateQuantity({quantity:e.target.value, product:props.item})
  }
  const deleteItem = () => {
    props.deleteItem(props.item)
  }
  return(
    <>
    <div className="card col-sm-12" style={{"maxWidth": '540px'}}>
      <img src={imageUrl} className="img-fluid rounded-start" alt="..."/>
      <p></p>
      <button onClick={deleteItem} className="btn btn-outline-secondary"type="button" >remove item</button>
    </div>
    <div className="col-md-12">
      <div className="card-body">
        <h5 className="card-title">{props.item.productName}</h5>
        <div className="mb-3">
        <label  className="form-label">Quantity:</label>
        <input onChange={calculatePrice} type="number" defaultValue={props.item.quantity} className="form-control" id="quantity" name="quantity" min="1" max="10" />
        <div id="total" className="form-text"> NIS {price}</div>
      </div>
      </div>
</div>
    </>
  )
}
const mapStateToProps = (state) => {
  return{
      itemQuantity: state.product.quantity
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    updatePrice: (info)=>dispatch(changeTotal(info)),
    updateQuantity: (quantity)=>dispatch(changeQuantity(quantity)),
    deleteItem: (item)=>dispatch(deleteItem(item))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ViewItemCart)