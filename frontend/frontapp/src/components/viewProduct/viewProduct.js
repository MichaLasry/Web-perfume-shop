import React ,{useState} from 'react'
import firebase from '../../firebase/config'
import {connect} from 'react-redux'
import {Button, ButtonToolBar} from 'react-bootstrap'
import PopupModel from '../popupModel/popupModel'
import {addProduct} from '../../redux/actions'
import {Link} from 'react-router-dom'
import '../../../images/cart.svg' 

function ViewProduct(props){
  // console.log(props)
  const [imageUrl, setImageUrl] = useState('')
  // const [modalShow, setModalShow] = useState(false)
  const storage = firebase.storage();
  const storageRef = storage.ref();
  const disImage = async() => {
    try{
      let imageRef = await storageRef.child(props.product.imageFile)
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
  // const [isOpen, setIsOpen] = useState(false);
  // function toggleModal() {
  //   setIsOpen(!isOpen);
  // }
  // let modalClose = () => setModalShow(false)
  // const popupModel = () => {
  //   console.log('Click happened')
  //   return (
  //   <PopupModel product={props.product}></PopupModel>
  //   )
  // }
  let [display, setDisplay] = useState({'display': 'none'})
  const addProduct = () => 
  {
    props.addProductToCart(props.product)
    console.log(props.productsList)
    setDisplay({'display': 'block'})
    setTimeout(()=>{ setDisplay({'display': 'none'}); }, 3000);
  }

  return(
    <>
    {/* <div className="container"  key={props.productName}></div> */}
        <div className="col col-4" >
          <div className="card h-100" style={{width: "18rem"}}>
            <img src={imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{props.product.productName}</h5>
            <h3 className="card-text">ש"ח {props.product.price}</h3>
          <button onClick={addProduct} type="button"  data-bs-toggle="modal" data-bs-target="#staticBackdrop"className="btn btn-primary">Add to Cart</button>
        </div>
        </div>
    </div>
    <div className="alert alert-info" role="alert" style={display}>Product added to cart successfully!</div>
      
    </>
  )
}
const mapStateToProps = (state) => {
  return{
    productsList: state.purchaseDetails.productsList
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    addProductToCart: (newProduct)=>dispatch(addProduct(newProduct))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ViewProduct)