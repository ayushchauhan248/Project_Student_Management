import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import AppContainerPage from './pages/AppContainer.Page';
import AuthPage from './pages/Auth.Page';
import NotFoundPage from './pages/NotFound.Page';

function App() {
  return (
  <div>
    <BrowserRouter>
      <Switch>

        <Route path="/" exact>
          <Redirect to="/login"></Redirect>
        </Route>
        
        <Route path={["/login" , "/signup"]} exact>
          <AuthPage></AuthPage>
        </Route>

        <Route path={["/dashboard" , "/recordings" , "/batch/:batchNumber/lecture/:lectureNumber"]} exact>
          <AppContainerPage></AppContainerPage>
        </Route>

        <Route >
           <NotFoundPage></NotFoundPage>
        </Route>

      </Switch>
    </BrowserRouter>
  </div>);
  
}

export default App;
