import axiosInstance from './instance';

// tslint:disable-next-line:no-namespace
declare namespace code {
  // tslint:disable-next-line:class-name
  interface codeReq {
    phone: string;
  }
}

// 发送验证码
export const sendMessage= (data: code.codeReq)=> {
  return axiosInstance.post(`/api/public/sendMessage`,data);
};

