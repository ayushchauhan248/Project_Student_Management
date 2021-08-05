import { useEffect } from "react";
import {FC , memo}  from  "react";
import { Link } from "react-router-dom";
import { groupsActions } from "../../actions/groups.actions";
import { fetchGroups } from "../../api/groups";
import { useAppSelector } from "../../store";

interface Props {}

const Dashboard: FC<Props> = () => {

    const query = useAppSelector(state => state.groups.query);

    const groups = useAppSelector(state => {
        const groupIds = state.groups.queryMap[state.groups.query] || [];
        const groups = groupIds.map((id) => state.groups.byId[id]);
        return groups;
    });


    useEffect(() => {
        fetchGroups({ status : "all-groups" , query}).then((groups) => 
            groupsActions.queryCompleted(query , groups)
        ) 
    } , [query]);

    return(
        <div>
            <input type="text" 
            value={query} 
            onChange={(e)=>
            {
                groupsActions.query(e.target.value)
            }}/>
            <div>
                {
                    groups.map((group) => (
                        <div>{group.name}</div>
                    ))
                }
            </div>
            <h1>this is Dashboard page</h1>
            <Link to="/recordings"><span className = " text-blue-500">Go to recording</span></Link>
        </div>
    );
};

Dashboard.defaultProps = {}

export default memo(Dashboard);