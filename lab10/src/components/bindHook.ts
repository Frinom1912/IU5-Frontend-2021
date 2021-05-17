import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from "../reducers/fetchUser"

export const BindAction = () => {
    const dispatch = useDispatch();
    return bindActionCreators(Actions, dispatch);
  }