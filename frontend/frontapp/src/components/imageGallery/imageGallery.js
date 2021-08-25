import React , {useState} from 'react'
import {connect} from 'react-redux'
import Image from './image'

function ImageGallery(props){
  let images = props.images
  let imageList = images.map((image)=>{
    return(
     <Image image={image}></Image>
    )  
  }
  )
  return(
<>
<div className="container">
  <div className="row">
<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    {imageList}
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

</div>
</div>


    </>
  )
  }

const mapStateToProps = (state) => {
  return{
    images: state.products.imageGallery
  }
}
export default connect(mapStateToProps)(ImageGallery)
