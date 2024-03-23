import { User } from "src/app/user/user";
import * as AppState from "src/app/app.state";
import { createReducer, on } from "@ngrx/store";
import { maskUsername } from "./user.action";

export interface UserState{
    mask: boolean;
    currentUser: User
}

export interface State extends AppState.State{
    users: UserState;
}

const initialState: UserState = {
    mask: false,
    currentUser: null
}

export const userReducer = createReducer<UserState>(
    initialState,
    
    on(maskUsername, (state):UserState => {
        return {
            ...state,
            mask: !state.mask
        }
    })
);