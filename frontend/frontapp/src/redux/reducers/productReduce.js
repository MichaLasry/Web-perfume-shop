import produce from 'immer'

const initialState = {
  product:
    {productName : '',
      imageFile: '',
      imageUrl: '',
      price: 0,
      quantity:0}
}

const reducer = produce((state,action) => {
  switch(action.type)
  {
    // case 'CHANGE_QUANTITY':
    //   {state.product.quantity=action.payload}
    //   break;
      // case 'CHANGE_TOTAL':
      //     {state.product.price = action.payload}
      //     break;
  }
}, initialState)

export default reducer