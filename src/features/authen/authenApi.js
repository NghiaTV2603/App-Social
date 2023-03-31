import Cookies from 'js-cookie';

import { axiosMethod, axiosRequest } from 'src/helpers/axios.helper';

const authenEndPoint = "https://app-social-server.onrender.com/api/v1"
// const authenEndPoint = "http://localhost:5000/api/v1"


const authenAPI = {
  login: (data) => {
    return axiosRequest(
      authenEndPoint + '/login' ,
      axiosMethod.POST,
      null,
      null,
      data
    );
  },

  register: (data) => {
    return axiosRequest(
      authenEndPoint + '/register',
      axiosMethod.POST,
      null,
      null,
      data
    );
  },

  getMe: () => {
    return axiosRequest(
      authenEndPoint + '/',
      axiosMethod.GET,
      Cookies.get('accessToken')
    );
  },
};

export default authenAPI;
