import { FC, memo } from 'react';
import { useHistory } from 'react-router-dom';
import Avatar from '../Avatar/Avatar';


interface Props {
    name: string;
    imgSrc: string;
    desc?: string;
    className?: string;
    id: number;
}

const GroupData: FC<Props> = ({
    name,
    imgSrc,
    desc,
    className,id
}) => {
    const history=useHistory();
    return (
        <div className={`flex flex-row p-4 space-x-10 items-start ${className}`}>
            <Avatar  imageUrl={imgSrc?imgSrc:"https://www.w3schools.com/howto/img_avatar2.png"}></Avatar>
            <div className="flex flex-col">
                <button onClick={()=>history.push("/groups/"+id)}><h1 className="font-bold text-left text-lg">{name[0].toUpperCase()}{name.substr(1) }</h1></button>
                <p>{desc}</p>
            </div>
        </div>
    );
};

GroupData.defaultProps = {};

export default memo(GroupData);