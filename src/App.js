import React from 'react';
import './App.css';
import Nav from './components/layout/NavBar';
import Home from './pages/Home';
import itemDetailContainer from './components/itemDetailContainer';
import cart from './components/cart';
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
        </Switch>        
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
