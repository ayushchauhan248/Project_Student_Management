
import {FC , memo}  from  "react";
import { useParams } from "react-router-dom";

interface Props {}
interface RouteParams{
    lectureNumber : string;
    batchNumber : string;
}
const Lecture: FC<Props> = (props) => {    
    const {lectureNumber , batchNumber}  = useParams<RouteParams>();
    return(
        <div>
            showing the result of batch #{batchNumber} of lecture #{lectureNumber}
        </div>
    );
};

Lecture.defaultProps = {}

export default memo(Lecture);