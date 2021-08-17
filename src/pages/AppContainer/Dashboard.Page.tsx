import React from "react";
import { meSelector } from "../../selectors/auth.selectors";
import { useAppSelector } from "../../store";

interface Props{}
const Dashboard: React.FC<Props> = (props) => {
    const user = useAppSelector(meSelector);
    return (
        <div>This is dashboard page
           
           <div className=" text-yellow-400">{user!.first_name}</div>
            
        </div>
    );
};
Dashboard.defaultProps = {
}
export default Dashboard;