import { FC, memo } from "react";
import { FaExternalLinkAlt, FaMagento, FaPlay, FaSlideshare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { logout } from "../api/auth";

interface Props  {
    Open:boolean;
}


const Sidebar: FC<Props> = ({Open}) => {
    console.log(" Sidebar is rendering");

    return (
    
        <div className={Open?" visible relative ":"invisible absolute "}>
            <div className= "h-screen w-60 bg-gray-300  text-green-500">
              
                <div className=" ml-3 mr-3 flex items-center text-3xl font-bold text-gray-800 space-x-4 rounded-md  hover:bg-white py-3">
                    <FaMagento ></FaMagento>
                    <Link className="text-xl font-normal " to="/dashboard"> Dashboard</Link>
                </div>
                <div className=" ml-3 mr-3 flex items-center text-3xl font-bold text-gray-800 space-x-4 rounded-md hover:bg-white py-3">
                    <FaPlay></FaPlay>
                    <Link className=" text-xl font-normal" to="/recordings">Recordings</Link></div>
                <div className="ml-3 mr-3 flex items-center text-3xl font-bold text-gray-800 space-x-4 rounded-md hover:bg-white py-3">
                    <FaSlideshare></FaSlideshare>
                    <Link className="text-xl font-normal " to="/groups"> Groups</Link>
                </div>
                <div className=" ml-3 mr-3 flex items-center text-3xl font-bold text-gray-800 space-x-4 rounded-md hover:bg-white py-3">
                    <FaExternalLinkAlt></FaExternalLinkAlt>
                    <button className=" text-xl font-normal text-gray-800 border-0" onClick={
                        () => {
                            logout();
                            window.location.href = "/login";
                        }
                    }>Logout</button>
                </div>


            </div>

        </div>
    );
};
Sidebar.defaultProps = {
}
export default memo(Sidebar);