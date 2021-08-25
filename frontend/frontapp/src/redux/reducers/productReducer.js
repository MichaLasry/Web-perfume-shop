import produce from 'immer'

const initialState = {
  imageGallery:[{
    imageFile:'menPerfume.jpg',
    imageName:'Men Perfume'
  },
  {
    imageFile:'womenPerfume.jpg',
    imagName:'Women Perfume'
  }],
  storeName: 'Perfume',
  products:[
    {productName : 'Chanel Madmosel',
      imageFile: 'chanelMadmosel.jpg',
      imageUrl: 'gs://react-project-d5721.appspot.com/chanelMadmosel.jpg',
      price: 600 ,
      quantity:1},
    {
      productName:'Boos-Femal',
      imageFile: 'boos.jpg',
      imageUrl: 'gs://react-project-d5721.appspot.com/boos.jpg',
      price:250,quantity:1
    },
    {
      productName:'Alien',
      imageFile: 'alien.jpg',
      imageUrl: 'gs://react-project-d5721.appspot.com/alien.jpg',
      price:300 ,
      quantity:1
    },
    {
      productName:'Chlo`e for Women',
      imageFile: 'chloe.jpg',
      imageUrl: 'gs://react-project-d5721.appspot.com/chloe.jpg',
      price: 270 ,
      quantity:1
    },
    {
      productName:'Dior - Jador`e',
      imageFile: 'dior.jpg',
      imageUrl: 'gs://react-project-d5721.appspot.com/dior.jpg',
      price: 180 ,
      quantity:1
    },
    {
      productName:'Dolc`e & Gabbana',
      imageFile: 'dolce&gebbana.jpg',
      imageUrl: 'gs://react-project-d5721.appspot.com/dolce&gebbana.jpg',
      price:320 ,
      quantity:1
    },
    {
      productName:'DSQARED 2 -WOOD',
      imageFile: 'dsquared2wood.jpg',
      imageUrl: 'gs://react-project-d5721.appspot.com/dsquared2wood.jpg',
      price:360 ,
      quantity:1
    },
    {
      productName:'Gucci',
      imageFile: 'gucci.jpg',
      imageUrl: 'gs://react-project-d5721.appspot.com/gucci.jpg',
      price:190 ,
      quantity:1
    },
    {
      productName:'GUESS Lady',
      imageFile: 'guess.jpg',
      imageUrl: 'gs://react-project-d5721.appspot.com/guess.jpg',
      price:200 ,
      quantity:1
    },
    {
      productName:'Eiv San Loren',
      imageFile: 'ivsanloren.jpg',
      imageUrl: 'gs://react-project-d5721.appspot.com/ivsanloren.jpg',
      price:400 ,
      quantity:1
    },
    {
      productName:'Lavi -aBel',
      imageFile: 'laviabel.jpg',
      imageUrl: 'gs://react-project-d5721.appspot.com/laviabel.jpg',
      price:350 ,
      quantity:1
    },
    {
      productName:'Roberto Cavalli',
      imageFile: 'roberto cavalli.jpg',
      imageUrl: 'gs://react-project-d5721.appspot.com/roberto cavalli.jpg',
      price:420 ,
      quantity:1
    },
    {
      productName:'SIGNORINA',
      imageFile: 'signorina.jpg',
      imageUrl: 'gs://react-project-d5721.appspot.com/signorina.jpg',
      price:500 ,
      quantity:1
    },
    {
      productName:'VERSACE',
      imageFile: 'versace.jpg',
      imageUrl: 'gs://react-project-d5721.appspot.com/versace.jpg',
      price:260 ,
      quantity:1
    },
  ]
}

const reducer = produce((state,action) => {
  switch(action.type)
  {
    
  }
}, initialState)

export default reducer