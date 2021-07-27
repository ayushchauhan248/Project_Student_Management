import axios from "axios";
import { User } from "../modules/User";
import { LS_AUTH_TOKEN } from "./base";


interface LoginRequest {
    email : string;
    password : string; 
}

interface LoginResponse{
    data:{
        is_2fa_enabled :  boolean; 
    }
    token:string;
    user : User;
}



export const BASE_URL = "https://api-dev.domecompass.com";

export const login = (data:LoginRequest) => {
    const url = BASE_URL + "/Login";
    console.log(data);

    return axios.post<LoginResponse>(url,data).then((response)=> {
        console.log(response.data.token);
        localStorage.setItem(LS_AUTH_TOKEN , response.data.token);
    });
};

export const logout = () => {
    localStorage.removeItem(LS_AUTH_TOKEN);
}
