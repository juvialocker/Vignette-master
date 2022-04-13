import { amendRouter } from "@/helpers/utils";

const rs = {
  path: "home",
  name: "home",
  component: () => import(/* webpackChunkName: "Home" */ "./container.vue"),
  children: [
    {
      path: "/index",
      // 不需要首页可注释掉meta
      meta: { txt: "首页", keepAlive: true, isBack: true },
      icon: "iconmanage",
      component: () => import(/* webpackChunkName: "Home" */ "./index.vue"),
    },
    {
      path: "/word",
      name: "word",
      // 不需要首页可注释掉meta
      meta: { txt: "首页", keepAlive: true, isBack: true },
      icon: "iconmanage",
      component: () => import(/* webpackChunkName: "Home" */ "./word.vue"),
    },
    {
      path: "/conversation",
      name: "conversation",
      // 不需要首页可注释掉meta
      meta: { txt: "首页", keepAlive: true, isBack: true },
      icon: "iconmanage",
      component: () => import(/* webpackChunkName: "Home" */ "./conversation.vue"),
    },
    {
      path: "/video",
      name: "video",
      // 不需要首页可注释掉meta
      meta: { txt: "首页", keepAlive: true, isBack: true },
      icon: "iconmanage",
      component: () => import(/* webpackChunkName: "Home" */ "./video.vue"),
    },
    {
      path: "/post",
      name: "post",
      // 不需要首页可注释掉meta
      meta: { txt: "首页", keepAlive: true, isBack: true },
      icon: "iconmanage",
      component: () => import(/* webpackChunkName: "Home" */ "./post.vue"),
    },
  ],
};

export default amendRouter(rs);
