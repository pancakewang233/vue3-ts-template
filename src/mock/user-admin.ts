const adminRoutes = {
  path: "/pages",
  redirect: "/pages/page",
  name: "Form",
  component: () => import("@/components/Layout"),
  children: [
    {
      path: "/pages/page",
      name: "Page",
      meta: { title: "Page", roles: ["admin", "editor"] },
      component: () => import("@/views/pages/Page.vue"),
    },
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
};

export default adminRoutes;
