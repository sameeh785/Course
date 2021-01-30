
import React, { useState, useEffect } from 'react';

import { Provider } from 'react-redux'
import mStore from './store/store';

import Product from './components/product/product';

export default function () {

    return <div>
        <Provider store={mStore}>


            <Product />

        </Provider>

        </div>

}





// import React, { useState } from "react";
// import { BrowserRouter, Route } from "react-router-dom";
// import Header from "./components/header/header";
// import Home from "./components/home/home";
// import Signup from "./components/signup/signup";
// import { Provider, connect } from "react-redux";
// import store from "./components/store/store"

// export default function App() {


//   return (
//     <Provider store={store}>
//       <BrowserRouter>
//         <Header />
//         <Route exact path="/" component={Home} />
//         <Route path="/signup" component={Signup} />
//       </BrowserRouter>
//     </Provider>
//   );
// }














