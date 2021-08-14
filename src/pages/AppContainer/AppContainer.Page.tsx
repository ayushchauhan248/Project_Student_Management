
import {FC , memo}  from  "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import DashboardPage from "./Dashboard.Page";
import LecturePage from "./Lecture.Page";
import RecordingPage from "./Recordings.Page";

interface Props {
}

const AppContainer: FC<Props> = () => {
    return(
        <div >
            <Navbar></Navbar>
            <div className="flex flex-row ">
            <Sidebar  ></Sidebar>

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
        </div>
        
    );
};

AppContainer.defaultProps = {}

export default memo(AppContainer);