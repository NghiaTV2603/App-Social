import { axiosMethod, axiosRequest } from 'src/helpers/axios.helper';

const chatEndPoint = 'http://localhost:5000/api/v1/chat';
const messageEndPoint = 'http://localhost:5000/api/v1/message';

const chatApi = {
   accessChat: (token, data) => {
      return axiosRequest(
         chatEndPoint + '/access',
         axiosMethod.POST,
         token,
         null,
         data
      );
   },
   listChat: (token) => {
      return axiosRequest(
         chatEndPoint + '/listChat',
         axiosMethod.GET,
         token,
         null,
         null
      );
   },
   accessGroup: (token, data) => {
      return axiosRequest(
         chatEndPoint + '/accessGroup',
         axiosMethod.POST,
         token,
         null,
         data
      );
   },
   listMessage: (token, data) => {
      return axiosRequest(
         messageEndPoint + '/' + data,
         axiosMethod.GET,
         token,
         null,
         null
      );
   },
  sendMessage : (token , data ) => {
     return axiosRequest(
       messageEndPoint + "/sendMessage",
       axiosMethod.POST,
       token,
       null,
       data
     )
  }
};

export default chatApi
