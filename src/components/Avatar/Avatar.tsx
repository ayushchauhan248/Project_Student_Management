/* eslint-disable jsx-a11y/img-redundant-alt */
import {ButtonHTMLAttributes, FC, memo} from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme ?: 'active' | 'inactive';
    imageUrl: string;
}
const Avatar: FC<Props> = ({ theme,imageUrl, className}) =>{
    const themeClasses =
        theme === "inactive" ? "bg-red-600" : "bg-green-500";

return (
    <div className="relative inline-block">
        <img className="inline-block object-cover w-16 h-16 rounded-full" 
        src={imageUrl} 
        onError={(event: any) => { event.target.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTo8ot81o5G-DZLv5GatY5S5Jsc2rHobmXkQ&usqp=CAU"; }} 
        alt="Profile image"/>
        <span className={"absolute bottom-4 right-0 inline-block w-4 h-4  border-2 border-white rounded-full "+ themeClasses +" "+ className}></span>
  </div>
);
};
Avatar.defaultProps={
    theme:"active",
    imageUrl:"https://www.w3schools.com/howto/img_avatar2.png"
}
export default memo(Avatar)