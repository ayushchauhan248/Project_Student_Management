import { useEffect } from "react";
import {FC , memo}  from  "react";

interface Props {}

const AuthHero: FC<Props> = (props) => {
    console.log("AuthHero Rendering");

    useEffect(() => {
        console.log("AuthHero Rendering for first time");
    } , [])
    
    return (
        <div className=" h-screen w-1/2 bg-gray-800 text-white invisible md:visible absolute md:relative flex flex-wrap justify-center items-center">
            <img className="w-80 h-100" src="https://i.pinimg.com/736x/54/26/4a/54264a84e2f96cb7a5c32efa99b4714d.jpg" alt="" />
        </div>
    );
};

AuthHero.defaultProps = {}

export default memo(AuthHero);