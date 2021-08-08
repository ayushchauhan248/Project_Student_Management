import { useEffect } from "react";
import {FC , memo}  from  "react";
import { Link } from "react-router-dom";
import { groupsActions } from "../../actions/groups.actions";
import { fetchGroups } from "../../api/groups";
import { groupQuerySelector, groupsSelector } from "../../selectors/groups.selectors";
import { useAppSelector } from "../../store";

interface Props {}

const Dashboard: FC<Props> = () => {

    const query = useAppSelector(groupQuerySelector);

    const groups = useAppSelector(groupsSelector);


    useEffect(() => {
        fetchGroups({ status : "all-groups" , query}).then((groups) => 
            groupsActions.queryCompleted(query , groups)
        ) 
    } , [query]);

    return(
        <div>
            <h1>this is Dashboard page</h1>
            <Link to="/recordings"><span className = "text-blue-500" >Go to recording</span></Link>
            <br></br>
            <input type="text" 
            value={query} 
            onChange={(e)=>
            {
                groupsActions.query(e.target.value)
            }}/>
            <div>
                {
                    groups.map((group) => (
                        <div key= { group.id }>{group.name}</div>
                    ))
                }
            </div>
        </div>
    );
};

Dashboard.defaultProps = {}

export default memo(Dashboard);