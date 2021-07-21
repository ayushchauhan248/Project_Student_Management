import {ButtonHTMLAttributes, FC, memo} from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme : 'active' | 'inactive';
}
const Avatar: FC<Props> = ({ theme, className}) =>{
    const themeClasses =
        theme === "inactive" ? "bg-red-600" : "bg-green-500";

return (
    <div className="relative inline-block">
        <img className="inline-block object-cover w-16 h-16 rounded-full" src="https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image"/>
        <span className={"absolute bottom-0 right-0 inline-block w-3 h-3  border-2 border-white rounded-full "+ themeClasses +" "+ className}></span>
  </div>
);
};
Avatar.defaultProps={
}
export default memo(Avatar);