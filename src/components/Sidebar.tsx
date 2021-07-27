import { Button } from "@material-ui/core";
import {FC , memo}  from  "react";
import {logout} from "../api/auth"

interface Props {}

const Sidebar: FC<Props> = (props) => {
    return(
      <div>
        <div className="h-screen w-80 bg-gray-400 ">this is side bar</div>
        <Button onClick = {() =>{
          logout();
          window.location.href = "/login"
        }}>Logout</Button>
      </div>
    );
};

Sidebar.defaultProps = {}

export default memo(Sidebar);