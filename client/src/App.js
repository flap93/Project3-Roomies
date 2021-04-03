import React, {Fragment, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import { LOGOUT } from './actions/types';



// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import './App.css';

// if(localStorage.token) {
//   setAuthToken(localStorage.token);
// }

// const App = () => {
//   useEffect(() => {
//     // check for token in LS
//     // if (localStorage.token) {
//     //   setAuthToken(localStorage.token);
//     // }
//     store.dispatch(loadUser());

//     // log user out from all tabs if they log out in one tab
//     // window.addEventListener('storage', () => {
//     //   if (!localStorage.token) store.dispatch({ type: LOGOUT });
//     // });
//   }, []);

// const App = () => {
//   useEffect(() => {
//     // check for token in LS
//     if (localStorage.token) {
//       setAuthToken(localStorage.token);
//     }
//     store.dispatch(loadUser());

//     // log user out from all tabs if they log out in one tab
//     window.addEventListener('storage', () => {
//       if (!localStorage.token) store.dispatch({ type: LOGOUT });
//     });
//   }, []);


const App = () => {
  useEffect(() => {
    // check for token in LS
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());
    // log user out from all tabs if they log out in one tab
    window.addEventListener('storage', () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);

    return(
  <Provider store={store}>
   <Router>
   <Fragment>
          <Navbar />
            <Route exact path="/" component={Landing} />
            <section className="container">
              <Alert/>
              <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
          </Switch> 
            </section>
        </Fragment>
    </Router>
     </Provider>
)
};



export default App;

