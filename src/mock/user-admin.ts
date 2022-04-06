const adminRoutes = [
  {
    path: "/dashboard",
    redirect: "/dashboard",
    name: "DashBoard",
    meta:{},
    component: () => import("@/views/dashboard/index.vue")
  },
  {
  path: "/pages",
  redirect: "/pages/about",
  name: "Form",
    meta:{},
  component: () => import("@/components/Layout"),
  children: [
    {
      path: "/pages/about",
      name: "About",
      meta: { title: "About", roles: ["admin"] },
      component: () => import("@/views/pages/About.vue"),
    },
    {
      path: "/pages/object",
      name: "Object",
      meta: { title: "Object", roles: ["admin"] },
      component: () => import("@/views/pages/Page2.vue"),
    },
  ],
}];

export default adminRoutes;
