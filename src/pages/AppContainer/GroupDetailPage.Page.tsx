import { useEffect } from "react";
import {FC, memo} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { groupFetchOneAction } from "../../actions/groups.actions";
import { groupByIdSelector, selectedGroupSelector } from "../../selectors/groups.selectors";
interface Props{
}
const GroupDetailPage: FC<Props> = (props) =>{

    const groupId = +useParams<{groupId : string}>().groupId;

    const group = useSelector(selectedGroupSelector);

    const dispatch = useDispatch()
   
    useEffect(()=>{
        dispatch(groupFetchOneAction(groupId));
        //eslint-disable-next-line
    }, [groupId])

    if(!group){
        return <div>loading the group</div>
    }

return (
 <>
    <div>
        these are the deatils of {group.name}
        id : { group.id}
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