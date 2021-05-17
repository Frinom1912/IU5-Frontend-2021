const DefaultUserState: UserState = {
   user: null,
   login: ""
}

interface UserState {
    user: any;
    login: string | object;
}

export interface UserAction {
    type: UserActionTypes;
    payload: string | object;
}

enum UserActionTypes {
    SET_USERNAME = "SET_USERNAME",
    FETCH_COMPLETE = "FETCH_COMPLETE",
    FETCH_ERROR = "FETCH_ERROR"
}

const userReducer = (state = DefaultUserState, action: UserAction) : UserState => {
    switch(action.type) {
        case UserActionTypes.FETCH_COMPLETE:
            return {user: action.payload, login: state.login};
        case UserActionTypes.SET_USERNAME:
            return {user: action.payload, login: action.payload};
        case UserActionTypes.FETCH_ERROR:
            return {user: action.payload, login: state.login};
        default: return state;
    }
}


export {userReducer, UserActionTypes}
