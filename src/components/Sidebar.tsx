import { Button } from "@material-ui/core";
import {FC , memo}  from  "react";
import {logout} from "../api/auth"
import { User } from '../modules/User';

interface Props {
  user : User;
}

const Sidebar: FC<Props> = ({user}) => {
    return(
      <div className="h-screen w-80 bg-gray-400 ">
        <div>this is side bar</div>
        <div className="bg-red-200">{user.first_name}</div>
        <Button onClick = {() =>{
          logout();
          window.location.href = "/login"
        }}>Logout</Button>
      </div>
    );
};

Sidebar.defaultProps = {}

export default memo(Sidebar);