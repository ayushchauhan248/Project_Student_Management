import {FC, memo} from "react";
import { Link } from "react-router-dom";
import { logout } from "../api/auth";
interface Props{
}
const Icon: FC<Props> = (props) =>{
return (
 <div className=" bg-gray-300 h-28 p-5 border border-gray-800 flex flex-col ">
     <Link className=" text-lg font-semibold hover:bg-white p-2 pt-1 rounded-md "  to="/editProfile">Edit Profile</Link>
  <button className=" text-lg font-semibold hover:bg-white text-gray-800 border-0 p-2 rounded-md" onClick={
                        () => {
                            logout();
                            window.location.href = "/login";
                        }
                    }>Logout</button>
 </div>
);
};
Icon.defaultProps={
}
export default memo(Icon);