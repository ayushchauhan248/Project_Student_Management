
import {FC , memo, useState}  from  "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import DashboardPage from "./Dashboard.Page";
import LecturePage from "./Lecture.Page";
import RecordingPage from "./Recordings.Page";

interface Props {
}

const AppContainer: FC<Props> = () => {
    const [showSidebar, setShowSidebar] = useState(true);
    return(
        <div >
            <Navbar sidebarToggle={() => setShowSidebar(!showSidebar)}></Navbar>
            <div className="flex flex-row ">
            <Sidebar isVisible={showSidebar}></Sidebar>

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