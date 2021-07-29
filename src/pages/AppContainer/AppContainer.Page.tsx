
import {FC , memo}  from  "react";
import { Route, Switch } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { User } from "../../modules/User";
import DashboardPage from "./Dashboard.Page";
import LecturePage from "./Lecture.Page";
import RecordingPage from "./Recordings.Page";

interface Props {
    user:User;
}

const AppContainer: FC<Props> = ({user}) => {
    return(
        <div className="flex flex-row ">

            <Sidebar user={user} ></Sidebar>

            <Switch>
                
                <Route path="/dashboard">
                    <DashboardPage></DashboardPage>
                </Route>

                <Route path="/recordings">
                    <RecordingPage></RecordingPage>
                </Route>

                <Route path="/batch/:batchNumber/lecture/:lectureNumber">
                    <LecturePage></LecturePage>
                </Route>

            </Switch>
        </div>
        
    );
};

AppContainer.defaultProps = {}

export default memo(AppContainer);