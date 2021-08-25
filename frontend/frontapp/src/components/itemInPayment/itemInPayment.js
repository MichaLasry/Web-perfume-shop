import React, {useState} from 'react'
import firebase from '../../firebase/config'
import {connect} from 'react-redux'

function ItemInPayment(props){
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
  return(
    <>
    <div className="card mb-3" style={{"maxWidth": "540px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={imageUrl} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{props.item.productName}</h5>
        <p className="card-text">Quantity: {props.item.quantity}</p>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default connect()(ItemInPayment)