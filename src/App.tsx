import  { FC, lazy, Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { LS_AUTH_TOKEN } from './api/base';
import AppContainerPageLazy from './pages/AppContainer/AppContain.lazy';
import AuthLazy from './pages/Auth/Auth.lazy';
import NotFoundPage from './pages/NotFound.Page';


interface Props{}

const App: FC<Props> = () => {
  const token = localStorage.getItem(LS_AUTH_TOKEN);
  return (
  <div>
    <Suspense fallback={<div className = "text-red-500"> Loading the app co]</div>}>
    <BrowserRouter>
      <Switch>

        <Route path="/" exact>
          {token ? <Redirect to="/dashboard"></Redirect> : <Redirect to="/login"></Redirect>}
        </Route>
        
        <Route path={["/login" , "/signup"]} exact>
        {token ? <Redirect to="/dashboard"></Redirect> : <AuthLazy></AuthLazy> }
        </Route>

        <Route path={["/dashboard" , "/recordings" , "/batch/:batchNumber/lecture/:lectureNumber"]} exact>

        
        <AppContainerPageLazy></AppContainerPageLazy>
        </Route>

        <Route >
           <NotFoundPage></NotFoundPage>
        </Route>

      </Switch>
    </BrowserRouter>
    </Suspense>
  </div>);
  
}

export default App;
