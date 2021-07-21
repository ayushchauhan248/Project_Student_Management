import {ButtonHTMLAttributes, FC, memo} from "react";
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children1: string;
    children2: string;
    color1:string;
    color2:string;
}

const Progressbar: FC<Props> = ({ children1, children2 ,color1 , color2, className, ...rest }) => {
return (
    <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
        <div>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-500">
            {children1}
            </span>
        </div>
        <div className="text-right">
            <span className="text-xs font-semibold inline-block  text-gray-500">
            {children2}
            </span>
        </div>
        </div>
        <div className={"overflow-hidden h-3 mb-4 text-xs flex rounded " + " " + color1}>
        <div style={{ width: children2 }} className={"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center  " + " " + color2}></div>
        </div>
    </div>
);
};
Progressbar.defaultProps={
    color1:"bg-gray-300",
    color2:"bg-black",
}
export default memo(Progressbar);