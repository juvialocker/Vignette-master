import axiosInstance from './instance'

import store from '../store/store';

//发送验证码
export const sendMessage= (data)=>{
  return axiosInstance.post(`/api/public/sendMessage`,data)
}
export const login = (list) => {
    return new Promise((resolve, reject) => {
    axiosInstance({
        url: `/distribution/agencyUserLogin`,
        method: 'post',
        data : list,
    }).then(({data}) => {
        if (data.message) {
        // window.sessionStorage.setItem(TOKEN_KEY, data.message.acto);
        store.dispatch('setToken', {
            token: data.message.acto
        });
        resolve(data);
        } else {
            reject(new Error('invalid'));
        }
        }).catch(err => {
            reject(err);
        });
    });

};
