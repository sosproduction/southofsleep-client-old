import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Art from "./pages/Art";
import Archive from "./pages/Archive";
import Music from "./pages/Music";
import Writing from "./pages/Writing";
import Product from "./pages/Product";
import Result from "./pages/Result";
import Shop from "./pages/Shop";
import { loadStripe } from '@stripe/stripe-js';
import { CartProvider } from "use-shopping-cart";
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient();

// Stripe public API key - place in .env file later with REACT_APP_ prefix in root
const stripePromise = loadStripe('pk_test_b9L2Y01SnmWgivXBdszqmzrR');

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider
        mode="checkout-session"
        stripe={stripePromise}
        currency="USD"
      >
        <BrowserRouter>
        <Navbar />
          <Toaster position="bottom-center" />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/art" component={Art} />
            <Route exact path="/archive" component={Archive} />
            <Route exact path="/music" component={Music} />
            <Route exact path="/writing" component={Writing} />
            <Route exact path="/result" component={Result} />
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/:productId" component={Product} />
          </Switch>
        </BrowserRouter>
      </CartProvider>
    </QueryClientProvider>
  )
}

export default App;
