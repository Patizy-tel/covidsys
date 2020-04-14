import { combineReducers } from "redux";
import authReducer from "./authReducer"
import errorReducer from "./errorReducer";
import patientReducer from "./patientReducer";
import kitReducer from "./kitReducer";
import DashboardReducer from "./DashboardReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  patients:patientReducer,
  kits:kitReducer,
  dashboard:DashboardReducer

});
