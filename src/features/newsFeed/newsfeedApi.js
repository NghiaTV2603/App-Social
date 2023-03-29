import { axiosMethod, axiosRequest } from 'src/helpers/axios.helper';

const postEndPoint = 'https://app-social-server.onrender.com/api/v1/post';

const postApi = {
   listAllPost: (token) => {
      return axiosRequest(
         postEndPoint + '/listAll',
         axiosMethod.GET,
         token,
         null,
         null
      );
   },
   listMyPost: (token) => {
      return axiosRequest(
         postEndPoint + '/myPost',
         axiosMethod.GET,
         token,
         null,
         null
      );
   },
   addPost: (token, data) => {
      return axiosRequest(postEndPoint, axiosMethod.POST, token, null, data);
   },
   likePost: (token, id) => {
      return axiosRequest(
         postEndPoint + '/' + id + '/like',
         axiosMethod.POST,
         token,
         null,
         null
      );
   },
   commentPost: (token, data) => {
      return axiosRequest(
         postEndPoint + '/' + data.id + '/comment',
         axiosMethod.POST,
         token,
         null,
         data.data
      );
   },
   deleteComment: (token, id) => {
      return axiosRequest(
         postEndPoint + '/comment/' + id,
         axiosMethod.DELETE,
         token,
         null,
         null
      );
   },
};

export default postApi;
