import { reactive, toRefs, onMounted } from 'vue';
// import { getUserInfo } from '@/api/user';
import { getUserInfo, saveUserInfo } from '../../api/user';
import type { ProfileState } from './type.d';

export const useProfile = () => {
  const state = reactive<ProfileState>({
    formData: {
      name: '',
      email: 'zhangkairong123@qq.com',
      phone: '13502022878',
      id: 0,
    },
    rules: {
      name: [
        {
          required: true,
          message: '请输入用户名',
          trigger: 'change',
        },
      ],
      email: [
        { required: true, message: '请输入邮箱', trigger: 'blur' },
        { type: 'email', message: '请输入正确的邮箱地址', trigger: [ 'blur', 'change' ] },
      ],
      phone: [
        { required: true, message: '请输入手机号', trigger: 'blur' },
        { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号', trigger: [ 'blur', 'change' ] },
      ],
    },
  });


  const getProfile = async () => {
    getUserInfo().then(res => {
      state.formData = res.data;
    });
  };

  /** 保存 */
  const saveProfile = (): Promise<void> => {
    return new Promise((resolve, reject) => {
      saveUserInfo(state.formData).then(res => {
        console.log('res=>', res);
        resolve();
      })
        .catch(() => {
          // eslint-disable-next-line prefer-promise-reject-errors
          reject();
        });
    });
  };

  onMounted(() => {
    getProfile();
  });

  return {
    ...toRefs(state),
    saveProfile,
    getProfile,
  };
};
