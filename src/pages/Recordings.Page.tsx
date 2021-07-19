import {FC , memo}  from  "react";
import { Link } from "react-router-dom";

interface Props {}

const Recordings: FC<Props> = (props) => {
    return(
        <div>
            this is Recording page
            <Link to="/dashboard"><span className = " text-blue-500">Go to dashboard</span></Link>
        </div>
    );
};

Recordings.defaultProps = {}

export default memo(Recordings);