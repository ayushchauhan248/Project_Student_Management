import {FC , memo}  from  "react";
import { Route, Switch } from "react-router-dom";
import AuthHero from "../../components/AuthHero";
import { User } from "../../modules/User";
import LoginPage from "./Login.Page";
import SignUpPage from "./SignUp.Page";


interface Props {
    onLogin: (user:User) => void;
}

const Auth: FC<Props> = (props) => {
    return(
        <div className="flex flex-row justify-between">
            <Switch>
                <Route path="/login">
                    <LoginPage onLogin={(u)=>{
                            console.log("user obj i auth", u)
                            props.onLogin(u);
                       }}></LoginPage>
                </Route>

                <Route path="/signup">
                    <SignUpPage></SignUpPage>
                </Route>


            </Switch>
            <AuthHero></AuthHero>
        </div>
        
    );
};

Auth.defaultProps = {}

export default memo(Auth);