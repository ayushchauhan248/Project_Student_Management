import { TypedUseSelectorHook, useSelector } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { authReducer } from "./reducers/auth.reducer";
import { groupReducer } from "./reducers/groups.reducer";
import { userReducer } from "./reducers/user.reducer";
import { sagaMiddleware } from "./sagas";
import { watchGroupQueryChanged } from "./sagas/groups.sagas";



const reducer  = combineReducers({
        auth : authReducer,
        users : userReducer,
        groups : groupReducer
    }
)

export const store = createStore(
    reducer ,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    )
);

sagaMiddleware.run(watchGroupQueryChanged);

export type AppState = ReturnType<typeof reducer>;

export const useAppSelector : TypedUseSelectorHook<AppState> = useSelector;




