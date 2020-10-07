import React from 'react';
import './App.css';
import Nav from './components/layout/NavBar';
import Home from './pages/Home';
import itemDetailContainer from './components/itemDetailContainer';
import cart from './components/cart';
import CatList from './components/catList';

//navegación
import {Switch, Route, BrowserRouter } from 'react-router-dom';
//context
import CartContextProvider from './context/cartContext';

//layout
// import Footer from './components/layout/Footer';

function App() {
  return (
    <div>
      <CartContextProvider>
        <BrowserRouter>
        <Nav/>
        <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/cart' component={cart}/>
        <Route path='/itemdetail/:id' component={itemDetailContainer}/>
        <Route exact path='/category/:cat' component={CatList}/>
        </Switch>        
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
