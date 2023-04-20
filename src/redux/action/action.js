import {GetRequest, PostRequest} from '../../utils/ApiRequest';
import {
  loader_type,
  user_login_data_type,
  verify_code,
  user_details,
  basic_details,
  show_exercise_template,
  add_incident_data,
  show_incident_data,
} from '../action-types/action-types';
import {
  forgot_password,
  get_user_personal_details,
  verify_email_code,
  basics_details,
  exercise_template,
  add_incident,
  show_incident,
} from '../../utils/ApiConstants';
import Toast from 'react-native-simple-toast';

export const user_login_data_action = data => {
  return {
    type: user_login_data_type,
    payload: data,
  };
};

export const loader_action = data => {
  return {
    type: loader_type,
    payload: data,
  };
};

export const verify_otp_action = data => {
  return async dispatch => {
    try {
      await PostRequest(forgot_password, data).then(res => {
        if (res.data.code === 200) {
          dispatch({
            type: verify_code,
            payload: res.data,
          });
        } else {
          dispatch({
            type: verify_code,
            payload: res.data,
          });
        }
      });
    } catch (error) {
      console.log('error', error);
    }
  };
};

export const get_User_Details = data => {
  return async dispatch => {
    try {
      let endUrl = `${get_user_personal_details}/${data.userid}`;
      let userLoginToken = data.userToken;
      await GetRequest(endUrl, userLoginToken).then(res => {
        if (res.data.code === 200) {
          dispatch({
            type: user_details,
            payload: res.data,
          });
        } else {
          dispatch({
            type: user_details,
            payload: res.data,
          });
        }
      });
    } catch (error) {
      console.log('error', error);
    }
  };
};

export const basics_detail = (data, token) => {
  return async dispatch => {
    try {
      dispatch(loader_action(true));
      await PostRequest(basics_details, data, token).then(res => {
        if (res.data.code === 200) {
          dispatch({
            type: basic_details,
            payload: res.data,
          });
        } else {
          dispatch({
            type: basic_details,
            payload: res.data,
          });
        }
      });
    } catch (error) {
      dispatch(loader_action(false));
      console.log('error', error);
    }
  };
};

export const get_exercise_template = token => {
  return async dispatch => {
    try {
      await GetRequest(exercise_template, token).then(res => {
        if (res.data.code === 200) {
          dispatch({
            type: show_exercise_template,
            payload: res.data,
          });
        } else {
          dispatch({
            type: show_exercise_template,
            payload: res.data,
          });
        }
      });
    } catch (error) {
      console.log('error', error);
    }
  };
};

export const add_incident_details = (data, token) => {
  return async dispatch => {
    try {
      dispatch(loader_action(true));
      await PostRequest(add_incident, data, token).then(res => {
        if (res.data.code === 200) {
          dispatch({
            type: add_incident_data,
            payload: res.data,
          });
        } else {
          dispatch({
            type: add_incident_data,
            payload: res.data,
          });
        }
      });
    } catch (error) {
      dispatch(loader_action(false));
      console.log('error', error);
    }
  };
};

export const get_incident_detail = (data, token) => {
  return async dispatch => {
    try {
      await GetRequest(`${show_incident}/${data.userId}`, token).then(res => {
        console.log('res', res);
        if (res.data.code === 200) {
          dispatch({
            type: show_incident_data,
            payload: res.data,
          });
        } else {
          dispatch({
            type: show_incident_data,
            payload: res.data,
          });
        }
      });
    } catch (error) {
      console.log('error', error);
    }
  };
};

// Get class and create class flow
// get class api is pending from backend

export const add_class = (data, token) => {
  return async dispatch => {
    try {
      dispatch(loader_action(true));
      await PostRequest(add_class, data, token).then(res => {
        if (res.data.code === 200) {
          dispatch({
            type: add_incident_data,
            payload: res.data,
          });
        } else {
          dispatch({
            type: add_incident_data,
            payload: res.data,
          });
        }
      });
    } catch (error) {
      dispatch(loader_action(false));
      console.log('error', error);
    }
  };
};
