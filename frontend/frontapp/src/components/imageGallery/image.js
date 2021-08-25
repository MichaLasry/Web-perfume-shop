import React , {useState} from 'react'
import {connect} from 'react-redux'
import firebase from '../../firebase/config'

function Image(props){
  const [imageUrl, setImageUrl] = useState('')
  const storage = firebase.storage();
  const storageRef = storage.ref();
  let imageDis = async() =>{
    try{
      let imageRef = await storageRef.child(props.image.imageFile)
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
  imageDis()
    
  return(
    <>
    <div className="col">
    <div className="carousel-item active">
      <img src={imageUrl} className="d-block w-100" alt="..."/>
    </div></div>
    </>
  )
  }

// const mapStateToProps = (state) => {
//   return{
//     image: state
//   }
// }
export default Image
