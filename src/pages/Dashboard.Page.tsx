import {FC , memo}  from  "react";
import { Link } from "react-router-dom";

interface Props {}

const Dashboard: FC<Props> = (props) => {
    return(
        <div>
            this is Dashboard page
            <Link to="/recordings"><span className = " text-blue-500">Go to recording</span></Link>
        </div>
    );
};

Dashboard.defaultProps = {}

export default memo(Dashboard);