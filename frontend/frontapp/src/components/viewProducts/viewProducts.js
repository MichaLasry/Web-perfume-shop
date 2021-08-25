import React , {useState} from 'react'
import { connect } from 'react-redux'
import ViewProduct from '../viewProduct/viewProduct'

function ViewProducts(props){
  let products = props.products
  let productsList = products.map((product,index) => {    
      return(
      <ViewProduct indexItem={index} product={product}></ViewProduct>
    )
  })
  return(
    <>
    <div className="container">
        <div className="row row-cols-4 row-cols-md-8 g-4" >{productsList}</div>
    </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    products : state.products.products
  }
}
export default connect(mapStateToProps) (ViewProducts)
