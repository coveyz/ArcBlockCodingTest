import axios from 'axios';
import { ElMessage } from 'element-plus';

const request = axios.create({
  timeout: 10000,
});

request.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    Promise.reject(error);
  },
);


request.interceptors.response.use(
  res => {
    const status = res.data.status;
    if (status === -1) {
      ElMessage({
        message: res.data.message || 'Error',
        type: 'error',
        duration: 5 * 1000,
      });
      return Promise.reject(new Error('Error'));
    } else if (status === 0) {
      return res.data;
    }
  },
  error => {
    return Promise.reject(error);
  },
);

export default request;
