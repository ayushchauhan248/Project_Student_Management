import {FC , memo}  from  "react";
import {logout} from "../api/auth"
import {  useAppSelector } from "../store";
import Button from "./Button/Button";

interface Props {
 
}

const Sidebar: FC<Props> = () => {

  const userFirstName = useAppSelector((state) => state.users.byId[state.auth.id!].first_name); 

    return(
      <div className="h-screen w-80 bg-gray-400 ">
        <div>this is side bar</div>
        <div className="bg-red-200">{userFirstName}</div>
        <Button onClick = {() =>{
          logout();
          window.location.href = "/login"
        }}>Logout</Button>
      </div>
    );
};

Sidebar.defaultProps = {}

export default memo(Sidebar);