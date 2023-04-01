import { axiosMethod, axiosRequest } from 'src/helpers/axios.helper';

const userEndPoint = 'https://app-social-server.onrender.com/api/v1';
// const userEndPoint = 'http://localhost:5000/api/v1';

const profileApi = {
  listUser :  (token) => {
    return axiosRequest(
      userEndPoint,
      axiosMethod.GET,
      token,
      null,
      null
    )
  },

}

export default profileApi
