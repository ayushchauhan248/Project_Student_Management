import {FC, memo} from "react";
import { Link, useParams } from "react-router-dom";
interface Props{
}
const GroupDetailPage: FC<Props> = (props) =>{
    const groupId = +useParams<{groupId : string}>().groupId;
return (
 <>
    <div>
        these are the deatils of {groupId}
    </div>

    <br />
    <br />
    <div><Link to="/dashboard">back to the all groups </Link></div>
 </>
);
};
GroupDetailPage.defaultProps={
}
export default memo(GroupDetailPage);