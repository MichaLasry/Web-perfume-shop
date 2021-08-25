import React from 'react'
import {useState} from 'react'
import firebase from '../../firebase/config'
import {connect} from 'react-redux'
import  {Modal} from 'react-bootstrap-modal'
import {Button} from 'react-bootstrap-buttons'


function PopupModel(props){
  alert("hello")
  console.log(props)
  
  // const [imageUrl, setImageUrl] = useState('')
  // const storage = firebase.storage();
  // const storageRef = storage.ref();
  // const disImage = async() => {
  //   try{
  //     let imageRef = await storageRef.child(props.product.imageFile)
  //     let url = await imageRef.getDownloadURL()
  //     setImageUrl(url)
  //   }
  //   catch (error){
  //     switch (error.code) {
  //       case 'storage/object-not-found':
  //         console.log("File doesn't exist")
  //         break;
  //       case 'storage/unauthorized':
  //         console.log("User doesn't have permission to access the object")
  //         break;
  //     }
  //   }
  // } 
  // disImage()
  return(
    <>
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        hello
      </div>
    </div>
    </>
  )
}

// const mapStateToProps = (state) => {
//   return{
//     product: state.product
//   }
// }
export default PopupModel
