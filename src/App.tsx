import { useEffect, useState } from 'react';
import  { FC, lazy, Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { isPropertySignature } from 'typescript';
import { me } from './api/auth';
import { LS_AUTH_TOKEN } from './api/base';
import { User } from './modules/User';
import AppContainerPageLazy from './pages/AppContainer/AppContain.lazy';
import AuthLazy from './pages/Auth/Auth.lazy';
import NotFoundPage from './pages/NotFound.Page';


interface Props{}

const App: FC<Props> = () => {
  const [user , setUser] = useState<User>() ;
  const token = localStorage.getItem(LS_AUTH_TOKEN);

  useEffect(()=>{
    if(!token){
      return;
    }
    me().then((u) => setUser(u));
  },[]);

  if( !user && token){
    return <div>Loading....</div>;
  }

  return (
  <div>
    <Suspense fallback={<div className = "text-red-500"> Loading the app </div>}>
    <BrowserRouter>
      <Switch>

        <Route path="/" exact>
        {user ? <Redirect to="/dashboard"></Redirect> : <Redirect to="/login"></Redirect>}
        </Route>
        
        <Route path={["/login" , "/signup"]} exact>
        {user ? <Redirect to="/dashboard"></Redirect> : <AuthLazy onLogin = {setUser}></AuthLazy> }
        </Route>

        <Route path={["/dashboard" , "/recordings" , "/batch/:batchNumber/lecture/:lectureNumber"]} exact>
        {user ? <AppContainerPageLazy user={user!}></AppContainerPageLazy> : <Redirect to="/login"></Redirect>}
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
