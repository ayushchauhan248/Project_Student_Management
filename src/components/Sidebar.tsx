import {FC , memo}  from  "react";
import {logout} from "../api/auth"
import { meSelector } from "../selectors/auth.selectors";
import {  useAppSelector } from "../store";
import Button from "./Button/Button";

interface Props {
  isVisible: boolean;
}

const Sidebar: FC<Props> = ({isVisible}) => {

  const user = useAppSelector(meSelector); 

    return(
      <div className={`bg-gray-100 w-72 ${(isVisible) ? "" : "hidden"} p-3`}>
        <div>this is side bar</div>
        <div className="bg-red-200">{user!.first_name}</div>
        <Button onClick = {() =>{
          logout();
          window.location.href = "/login"
        }}>Logout</Button>
      </div>
    );
};

Sidebar.defaultProps = {}

export default memo(Sidebar);