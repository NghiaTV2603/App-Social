import { axiosMethod, axiosRequest } from 'src/helpers/axios.helper';

const postEndPoint = "http://localhost:5000/api/v1/post"


const postApi = {
  listAllPost : (token) => {
    return axiosRequest(
      postEndPoint + '/listAll',
      axiosMethod.GET,
      token,
      null,
      null
    )
  },
  listMyPost : (token) => {
    return axiosRequest(
      postEndPoint + '/myPost',
      axiosMethod.GET,
      token,
      null,
      null
    )
  },
  addPost : (token,data) => {
    return axiosRequest(
      postEndPoint ,
      axiosMethod.POST,
      token,
      null,
      data
    )
  }
}

export default postApi ;
