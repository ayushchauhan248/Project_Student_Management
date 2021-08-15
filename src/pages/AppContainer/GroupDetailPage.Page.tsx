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
    <Link to={"/groups/" + (groupId - 1)}>prev group</Link>
    <Link to={"/groups/" + (groupId + 1)}>next group</Link>
 </>
);
};
GroupDetailPage.defaultProps={
}
export default memo(GroupDetailPage);