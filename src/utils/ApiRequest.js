import {Api_url, login_api} from './ApiConstants';
import {mainAxios} from './axios';

const GetRequest = async (url, token) => {
  if (token) {
    return await mainAxios
      .get(Api_url + url, {
        headers: {Accept: 'application/json', Authorization: 'Bearer ' + token},
      })
      .then(resp => {
        return resp;
      })
      .catch(error => {
        return error;
      });
  } else {
    return await mainAxios
      .get(Api_url + url)
      .then(resp => {
        return resp;
      })
      .catch(error => {
        return error;
      });
  }
};

const PostRequest = async (end_point, data, token) => {
  console.log({end_point, data, token});
  if (token) {
    return await mainAxios
      .post(end_point, data, {
        headers: {
          Authorization: 'Bearer ' + token,
          Accept: 'application/json',
        },
      })
      .then(resp => {
        return resp;
      })
      .catch(error => {
        if (error.toJSON().message === 'Network Error') {
          console.log('No Internet');
        } else if (error.response.status === 401) {
          console.log(
            'd1',
            error.response.data.message,
            end_point,
            error.response.status,
          );
          // return error.response;
        } else if (error.response.status === 422) {
          console.log('d2', error.response.data.message, end_point);
          return error.response.data.message;
        }
      });
  } else {
    return await mainAxios
      .post(end_point, data)
      .then(resp => {
        return resp;
      })
      .catch(error => {
        console.log('error>>>', error);
        if (error.toJSON().message === 'Network Error') {
          console.log('No Internet');
        } else if (error.response.status === 401) {
          console.log(
            'd1',
            error.response.data.message,
            end_point,
            error.response.status,
          );
          // return error.response;
        } else if (error.response.status === 422) {
          console.log('d2', error.response.data.message, end_point);
          return error.response.data.message;
        }
      });
  }
};

export {PostRequest, GetRequest};
