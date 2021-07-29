import { useEffect } from "react";
import {FC , memo}  from  "react";
import { Link } from "react-router-dom";
import { fetchGroups } from "../../api/groups";

interface Props {}

const Dashboard: FC<Props> = (props) => {
    useEffect(() => {
        fetchGroups({ status : "all-groups"})
    } , []);

    return(
        <div>
            this is Dashboard page
            <Link to="/recordings"><span className = " text-blue-500">Go to recording</span></Link>
        </div>
    );
};

Dashboard.defaultProps = {}

export default memo(Dashboard);