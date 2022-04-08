import axiosInstance from './instance';

// tslint:disable-next-line:no-namespace
declare namespace code {
  // tslint:disable-next-line:class-name
  interface codeReq {
    phone: string;
  }
}

export const searchTable= (data: any)=> {
  return axiosInstance.post(`/api/public/sendMessage`,data);
};
export const saveTable= (data: any)=> {
  return axiosInstance.post(`/api/public/sendMessage`,data);
};
export const removeTable= (data: any)=> {
  return axiosInstance.post(`/api/public/sendMessage`,data);
};
export const startTable= (data: any)=> {
  return axiosInstance.post(`/api/public/sendMessage`,data);
};

// 库存导出
export const exportStock = (params: any) => {
  return axiosInstance({
    url: `/api/admin/stockExport`,
    data: params,
    method: 'post',
    responseType: 'blob', // 设置响应数据类型为 blob
  });
};