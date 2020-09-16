import React from 'react';
import './App.css';
import Nav from './components/layout/NavBar';
import Home from './pages/Home';
import itemDetailContainer from './components/itemDetailContainer';
import Cart from './components/cart';
import ItemCounter from './components/tps/Counter/itemCount';


//navegación
import {Switch, Route, BrowserRouter } from 'react-router-dom';
import CartContextProvider from './context/cartContext';

function App() {
  return (
    <div>
      <CartContextProvider>

      <BrowserRouter>
      <Nav/>
      <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/counter' component={ItemCounter}/>
      <Route path='/itemdetail/:id' component={itemDetailContainer}/>
      <Route path='/cart' component={Cart}/>
      </Switch>
      </BrowserRouter>

      </CartContextProvider>
    </div>
  );
}

export default App;
