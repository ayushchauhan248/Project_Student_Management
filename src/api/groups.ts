import axios from "axios";
import { Group } from "../modules/Group";
import { BASE_URL } from "./auth";

interface GroupRequest{
    limit? : number;
    offset?: number;
    query? : string;
    status : "all-groups" | "favourite" | "archieved"
}

interface GroupResponse{
    data : Group[]
}

export const fetchGroups = (data : GroupRequest) => {
    const url = BASE_URL + "/groups";

    axios.get<GroupResponse>(url,{params:data}).then((response ) => console.log(response.data.data)).catch((e) => console.error(e))  ;
        
}