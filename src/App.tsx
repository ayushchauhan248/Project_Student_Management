import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { LS_AUTH_TOKEN } from './api/base';
import AppContainerPage from './pages/AppContainer.Page';
import AuthPage from './pages/Auth.Page';
import NotFoundPage from './pages/NotFound.Page';

function App() {
  const token = localStorage.getItem(LS_AUTH_TOKEN);
  return (
  <div>
    <BrowserRouter>
      <Switch>

        <Route path="/" exact>
          {token ? <Redirect to="/dashboard"></Redirect> : <Redirect to="/login"></Redirect>}
        </Route>
        
        <Route path={["/login" , "/signup"]} exact>
        {token ? <Redirect to="/dashboard"></Redirect> : <AuthPage></AuthPage> }
        </Route>

        <Route path={["/dashboard" , "/recordings" , "/batch/:batchNumber/lecture/:lectureNumber"]} exact>
        {token ?<AppContainerPage></AppContainerPage> : <Redirect to="/login"></Redirect>}
        </Route>

        <Route >
           <NotFoundPage></NotFoundPage>
        </Route>

      </Switch>
    </BrowserRouter>
  </div>);
  
}

export default App;
