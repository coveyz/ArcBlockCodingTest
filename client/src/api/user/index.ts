import request from '@/utils/request';
import type {ProfileFromDataState } from '@/hooks/user/type';
import type { BaseResult } from '../type.d';
import type { UserProfileCallBackState } from './type.d';

export const getUserInfo = ():BaseResult<UserProfileCallBackState> => {
  return request({
    method: 'get',
    url: '/api/getUserInfo',
  });
};

export const saveUserInfo = (data: ProfileFromDataState) => {
  return request({
    method: 'post',
    url: '/api/updateUserInfo',
    data,
  });
};
