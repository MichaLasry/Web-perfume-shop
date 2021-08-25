const router = require('express').Router()

const productFunctions = require('./controllers/products')
const pruchaseFunctions = require('./controllers/purchaseDetails')
const userFunctions = require('./controllers/users')
// products functions
router.post('/createProduct',productFunctions.createProduct)
router.get('/getAllProducts',productFunctions.getProducts)
router.get('/getProduct/:productId',productFunctions.getProduct)
router.patch('/updateProduct/:productId',productFunctions.updateProduct)
router.delete('/deleteProduct/:productId',productFunctions.deleteProduct)
router.post('/deleteProductFromPruchase/:productId',productFunctions.deleteProductFromPruchase)
// purchase functions
router.post('/createPruchaseDetails', pruchaseFunctions.createPurchaseDetails)
router.get('/getAllPurchaseDetails',pruchaseFunctions.getAllPurchaseDetails)
router.get('/getPurchase/:id',pruchaseFunctions.getPurchaseDetails)
router.patch('/updatePurchase/:id',pruchaseFunctions.updatePurchaseDetails)
router.delete('/deletePurchase/:id',pruchaseFunctions.deletePurchaseDetails)
// users functions


router.post('/signUp',userFunctions.signUp)
router.post('/signIn',userFunctions.signIn)


router.post('/createUser',userFunctions.createUser)
router.get('/getAllUsers',userFunctions.getAllUsers)
router.get('/getUser/:userId',userFunctions.getUser)
router.patch('/updateUser/:userId',userFunctions.updateUser)
router.delete('/deleteUser/:userId',userFunctions.deleteUser)

module.exports = router