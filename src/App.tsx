import { useEffect} from 'react';
import  { FC,  Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { authActions } from './actions/auth.actions';
import { me } from './api/auth';
import { LS_AUTH_TOKEN } from './api/base';
import { useMe } from './hooks/useMe';
import AppContainerPageLazy from './pages/AppContainer/AppContain.lazy';
import AuthLazy from './pages/Auth/Auth.lazy';
import NotFoundPage from './pages/NotFound.Page';


interface Props{}

const App: FC<Props> = () => {

  const user = useMe();

  const token = localStorage.getItem(LS_AUTH_TOKEN);


  useEffect(()=>{
    if(!token){
      return;
    } 
    me().then(u => authActions.fetch(u));
  },[]); //eslint-disable-line react-hooks/exhaustive-deps


  console.log("App rerendering")

  if( !user && token){
    return <div>Loading....</div>;
  }


  return (
  <div>
    <>
    <Suspense fallback={<div className = "text-red-500"> Loading the app </div>}>
    <BrowserRouter>
      <Switch>

        <Route path="/" exact>
        {user ? <Redirect to="/dashboard"></Redirect> : <Redirect to="/login"></Redirect>}
        </Route>
        
        <Route path={["/login" , "/signup"]} exact>
        {user ? <Redirect to="/dashboard"></Redirect> : <AuthLazy ></AuthLazy> }
        </Route>

        <Route path={["/dashboard" , "/recordings", "/groups" , "/editProfile" ,"/groups/:groupId" , "/batch/:batchNumber/lecture/:lectureNumber"]} exact>
        {user ? <AppContainerPageLazy ></AppContainerPageLazy> : <Redirect to="/login"></Redirect>}
        </Route>

        <Route >
           <NotFoundPage></NotFoundPage>
        </Route>

      </Switch>
    </BrowserRouter>
    </Suspense>
    </>
  </div>);
  
}

export default App;
