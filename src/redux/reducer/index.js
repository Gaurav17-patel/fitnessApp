import {combineReducers} from 'redux';
import {
  add_selected_exercise_to_section,
  get_class_res,
  get_exercise_templates,
  get_incident_details,
  loader,
  user_basics_details,
  user_incident_details,
  user_login_data,
  user_personal_details,
  verifyOtp,
} from './reducers';

const rootReducer = combineReducers({
  user_login_data: user_login_data,
  loader: loader,
  verifyOtp: verifyOtp,
  user_personal_details: user_personal_details,
  user_basics_details: user_basics_details,
  get_exercise_templates: get_exercise_templates,
  user_incident_details: user_incident_details,
  get_incident_details: get_incident_details,
  get_class_res: get_class_res,
  add_selected_exercise_to_section: add_selected_exercise_to_section
});

export default rootReducer;
