const adminRoutes = [
  {
    path: "/dashboard",
    redirect: "/dashboard",
    name: "DashBoard",
    meta: {title: '互联网医院'},
    component: () => import("@/views/dashboard/index.vue"),
  },
  {
    path: "/pages",
    redirect: "/pages/about",
    name: "Form",
    meta: {title:'人员管理'},
    component: () => import("@/components/Layout"),
    children: [
      {
        path: "/pages/page",
        name: "About",
        meta: { title: "人员注册信息", roles: ["admin"] },
        component: () => import("@/views/pages/Page"),
      },
      {
        path: "/pages/object",
        name: "Object",
        meta: { title: "接诊信息", roles: ["admin"] },
        component: () => import("@/views/pages/Object"),
      },
    ],
  },
];

export default adminRoutes;
