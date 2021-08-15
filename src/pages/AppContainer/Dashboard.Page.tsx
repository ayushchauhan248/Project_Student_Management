
import {FC , memo}  from  "react";
import { FaSpinner } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { groupQureyChangedAction } from "../../actions/groups.actions";
import { groupsLoadingSelector, groupQuerySelector, groupsSelector } from "../../selectors/groups.selectors";
import { useAppSelector } from "../../store";

interface Props {}

const Dashboard: FC<Props> = () => {

    const query = useAppSelector(groupQuerySelector);

    const Loading = useAppSelector(groupsLoadingSelector)

    const groups = useAppSelector(groupsSelector);
    const history = useHistory();
    const dispatch = useDispatch();


    return(
        <div>
            <h1>this is Dashboard page</h1>
            <Link to="/recordings"><span className = "text-blue-500" >Go to recording</span></Link>
            <br></br>
            <input type="text" 
            value={query} 
            onChange={(e)=>
            {
                dispatch(groupQureyChangedAction(e.target.value))
            }}/>
            {Loading &&  <FaSpinner className="animate-spin m-3"></FaSpinner> }
            <div>
                {
                    groups.map((group) => (
                        <div key= { group.id }  onClick={() => history.push("/groups/" + group.id)}>{group.name}</div>
                    ))
                }
                {!Loading && groups.length === 0 &&  " NO DATA FOUND "}
            </div>
        </div>
    );
};

Dashboard.defaultProps = {}

export default memo(Dashboard);