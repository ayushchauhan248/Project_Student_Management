
import { FC, memo } from 'react';
import { logout } from '../api/auth';
import Button from './Button/Button';
import { useAppSelector } from '../store';
import { meSelector } from '../selectors/auth.selectors';
import SearchBar from './SearchBar';
import {FaAlignJustify} from "react-icons/fa";


interface Props {
    sidebarToggle: () => void;
}


const Navbar: FC<Props> = ({sidebarToggle}) => {

    const user = useAppSelector(meSelector); 
    
    return (
        <div className="flex flex-col w-full sticky top-0">
            <div className="flex flex-row justify-between px-5 py-2 bg-gray-900 items-center">
                <div className="flex flex-row items-center space-x-3.5">
                    <h1 className="text-white text-xl font-semibold">STUDYUSH</h1>
                </div>
                <SearchBar></SearchBar>
                <div className="flex flex-row  items-center   right-10">
                    <div className="px-4">
                      <div className="bg-red-200">{user!.first_name}</div>
                    </div>
                    <div className=" items-center   right-5">
                        <Button onClick = {() =>{
                            logout();
                            window.location.href = "/login"
                            }}>Logout
                        </Button>
                    </div>
                </div>
            </div>
            <div className="bg-white px-10 py-4 ">
                <div className="flex flex-row items-center">
                    <FaAlignJustify onClick={sidebarToggle}></FaAlignJustify>
                    <div className= " px-6">
                    Learn together
                    </div>
                </div>     
            </div>
        </div>
    );
};

Navbar.defaultProps = {};

export default memo(Navbar);