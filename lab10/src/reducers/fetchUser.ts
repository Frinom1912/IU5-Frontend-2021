import {Dispatch} from "redux"
import {UserAction, UserActionTypes} from "./userReducer"

export const fetchUser = (user: string) => {
    return async (dispatch: Dispatch<UserAction>) => {
        fetch(`https://api.github.com/users/${user}`, {
            headers: {
                Authorization: `${process.env.REACT_APP_KEY}`,
            }  
        })
      .then((data) => {
        if(data.status === 404) {
          dispatch({
              type: UserActionTypes.FETCH_ERROR,
              payload: "Corruption while fetching user"
            }
          );
          return null;
        }
        else {
          return data.json();
        }
      })
      .then((data) => {
          if(data) {
            dispatch({
              type: UserActionTypes.FETCH_COMPLETE,
              payload: data
            });
          }
      });
    }
}
