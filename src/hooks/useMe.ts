
import { useAppSelector } from "../store";

export const useMe  = () => 
    useAppSelector((state) => state.auth.id !== undefined ? state.users.byId[state.auth.id]:undefined)
