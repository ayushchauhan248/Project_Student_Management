import axios, { CancelToken} from "axios";
import { Group } from "../modules/Group";
import { BASE_URL } from "./auth";

export interface GroupRequest{
    limit? : number;
    offset?: number;
    query : string;
    status : "all-groups" | "favourite" | "archieved"
}

interface GroupResponse{
    data : Group[]
}

export const fetchGroups = (data : GroupRequest , token? : CancelToken) => {
    const url = BASE_URL + "/groups";

    return axios.get<GroupResponse>(url,{params:data , cancelToken : token})
        
}