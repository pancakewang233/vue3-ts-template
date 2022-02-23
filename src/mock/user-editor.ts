const editorRoutes =
  {
    path: '/form',
    redirect: '/form/page',
    name: 'Form',
    component: ()=> import('@/components/Layout.vue'),
    children: [
      {
        path: '/form/page',
        name: 'Page',
        meta: {title: 'Page', roles: ['admin', 'editor']},
        component: () => import('@/views/form/Page.vue')
      },
    ]
  };

export default editorRoutes;
