import { useState } from "react";
import { FC, memo } from "react";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";


interface Props {
    sidebarToggle: () => void;
}
const NavBar: FC<Props> = ({ sidebarToggle }) => {
    const [isOpen, setIsOpen] = useState(false);


    //const user = useAppSelector(meSelector);
    return (


        <div className="font-body">

            <div className=" h-14 w-full bg-gray-900 flex justify-between flex-shrink " >
                <div className=" flex items-center ml-10  w-3/4 justify-start space-x-8">

                    <h1 className="  text-white text-2xl items-center p-2 font-bold">MiPortal</h1>

                    <input className=" h-9 w-1/2 flex items-center bg-gray-800 rounded-md border border-gray-800 hover:border-gray-500 outline-none text-gray-200" type="text" placeholder="&#x1F50E;&#xFE0E; &nbsp; Search..." />
                </div>
                <div className=" flex items-center space-x-5 mr-6 ">
                    <Link to="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-gray-200 feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></Link>
                    <Link to="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-gray-200 feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg></Link>
                    <button onClick={() => setIsOpen(!isOpen)}><img className=" h-8 w-8 rounded-md" src="https://designreset.com/cork/ltr/demo4/assets/img/profile-16.jpeg " alt="" /></button>
                    <div className=" absolute top-12 right-4">{isOpen && <DropDown></DropDown>}</div>
                </div>

            </div>
            <div className=" h-14 w-full bg-gray-100 flex items-center space-x-8" >

                <button onClick={sidebarToggle}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className=" text-gray-800 ml-3"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>

                </button>
            </div>
        </div>
    );

};
NavBar.defaultProps = {
}
export default memo(NavBar);