import {
  add_class_res,
  add_exercise_to_section,
  add_incident_data,
  basic_details,
  loader_type,
  show_exercise_template,
  show_incident_data,
  user_details,
  user_login_data_type,
  verify_code,
} from '../action-types/action-types';

export const user_login_data = (state = [], action) => {
  switch (action.type) {
    case user_login_data_type:
      return action.payload;
    default:
      return state;
  }
};

export const loader = (state = false, action) => {
  switch (action.type) {
    case loader_type:
      return action.payload;
    default:
      return state;
  }
};

export const verifyOtp = (state = false, action) => {
  switch (action.type) {
    case verify_code:
      return action.payload;
    default:
      return state;
  }
};

export const user_personal_details = (state = [], action) => {
  switch (action.type) {
    case user_details:
      return action.payload;
    default:
      return state;
  }
};

export const user_basics_details = (state = [], action) => {
  switch (action.type) {
    case basic_details:
      return action.payload;
    default:
      return state;
  }
};

export const get_exercise_templates = (state = [], action) => {
  switch (action.type) {
    case show_exercise_template:
      return action.payload;
    default:
      return state;
  }
};

export const user_incident_details = (state = [], action) => {
  switch (action.type) {
    case add_incident_data:
      return action.payload;
    default:
      return state;
  }
};

export const get_incident_details = (state = [], action) => {
  console.log("action>>>", action);
  switch (action.type) {
    case show_incident_data:
      return action.payload;
    default:
      return state;
  }
};

// show/create class flow

// get exercise template as per class id
export const get_class_exercise_template = (state = [], action) => {
  console.log("action>>>", action);
  switch (action.type) {
    case show_incident_data:
      return Array.isArray(...action.payload) ? [...action.payload] : [];
    default:
      return state;
  }
};

export const get_class_res = (state = [], action) => {
  console.log("action>>>", action);
  switch (action.type) {
    case add_class_res:
      return action.payload;
    default:
      return state;
  }
};

export const add_selected_exercise_to_section = (state = [], action) => {
  console.log("action>>>", action);
  switch (action.type) {
    case add_exercise_to_section:
      return action.payload;
    default:
      return state;
  }
};
