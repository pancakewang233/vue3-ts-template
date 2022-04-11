const adminRoutes = [
  {
    path: "/dashboard",
    redirect: "/dashboard",
    name: "DashBoard",
    meta: { title: "互联网人员" },
    component: () => import("@/views/dashboard"),
  },
  {
    path: "/pages",
    name: "Form",
    meta: { title: "人员管理" },
    component: () => import("@/components/Layout"),
    children: [
      {
        path: "/pages/page",
        name: "About",
        meta: { title: "报名信息", roles: ["admin"] },
        component: () => import("@/views/pages/People"),
        children: [
          {
            path: "/pages/page/people",
            name: "People",
            meta: { title: "报名人员", roles: ["admin"] },
            component: () => import("@/views/pages/Page"),
          },
          {
            path: "/pages/page/tech",
            name: "Tech",
            meta: { title: "技术栈信息", roles: ["admin"] },
            component: () => import("@/views/pages/Tech"),
          },
        ],
      },
      {
        path: "/pages/object",
        name: "Object",
        meta: { title: "注册信息", roles: ["admin"] },
        component: () => import("@/views/pages/Object"),
      },
    ],
  },
];

export default adminRoutes;
