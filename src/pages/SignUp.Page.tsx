import {FC , memo}  from  "react";
import { Link } from "react-router-dom";


interface Props {}

const SignUp: FC<Props> = (props) => {
    return(
    <div className="flex flex-row justify-between">
        <div>
            this is SignUp page
            Have an account. <Link to="/login"><span className = " text-blue-500">click here</span></Link>
        </div>
    </div>
    );
};

SignUp.defaultProps = {}

export default memo(SignUp);