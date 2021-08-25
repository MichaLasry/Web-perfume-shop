import logo from './logo.svg';
import {Provider} from 'react-redux'
import store from './redux/store'
import {
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom'
// import ViewProduct from './components/viewProduct/viewProduct'
import ViewProducts from './components/viewProducts/viewProducts'
import ViewTitle from './components/viewTitle/viewTitle'
import Navbar from './components/navigator/navigator'
import OpenVSReason from './components/openVSReason/openVSReason'
import PresentContent from './components/presentContent/presentContent'
import HistorialContent from './components/historialContent/historialContent'
import ImageGallery from './components/imageGallery/imageGallery'
import ViewPurchaseDetails from './components/viewPurchaseDetails/viewPurchaseDetails'
import PaymentPage from './components/paymentPage/paymentPage'
import LogIn from './components/login/login'
import SignUp from './components/signUp/signUp'
import './App.css';

function App() {
  return (
  <Provider store={store}>
    <div className="App">
      
     <Router>
     <ViewTitle/>
          <Navbar/>
       <Switch>
       <Route path='/about'>
          <HistorialContent/>
          <OpenVSReason/>
          <PresentContent/>
       </Route>
       <Route path='/shoppingCart'>
      <ViewPurchaseDetails/>
       </Route>
       <Route path='/login'>
        <LogIn/>
       </Route>
       <Route path='/signUp'>
        <SignUp/>
       </Route>
       <Route path='/payment'>
          <PaymentPage></PaymentPage>
       </Route>
       <Route path='/products'>
          <ViewProducts/>
       </Route>
       <Route path='/'>
          <ImageGallery/>
       </Route>
       </Switch>
     </Router>
    </div> 
    </Provider>
  );
}

export default App;
