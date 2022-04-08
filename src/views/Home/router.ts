/*
 * @Author: juvia
 * @Date: 2022-04-07 10:47:04
 * @LastEditors: juvia
 * @LastEditTime: 2022-04-08 17:28:37
 * @FilePath: \Vignette-master\src\views\Home\router.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by juvia, All Rights Reserved. 
 */
import { amendRouter } from '@/helpers/utils';

const rs = {
  path: 'home',
  name: 'home',
  component: () => import(/* webpackChunkName: "Home" */ './container.vue'),
  children: [
    {
      path: '/index',
      // 不需要首页可注释掉meta
      meta: { txt: '首页', keepAlive: true, isBack: true },
      icon: 'iconmanage',
      component: () => import(/* webpackChunkName: "Home" */ './index.vue'),
    },
  ],
};

export default amendRouter(rs);
