const editorRoutes = [{
  path: "/pages",
  redirect: "/pages/page",
  name: "Form",
  component: () => import("@/components/Layout"),
  children: [
    {
      path: "/pages/page",
      name: "Page",
      meta: { title: "Page", roles: ["admin", "editor"] },
      component: () => import("@/views/pages/Page"),
    },
  ],
}];

export default editorRoutes;
