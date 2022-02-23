const adminRoutes =
  {
    path: '/form',
    redirect: '/form/page',
    name: 'Form',
    component: () => import('@/components/Layout.vue'),
    children: [
      {
        path: '/form/page',
        name: 'Page',
        meta: {title: 'Page', roles: ['admin', 'editor']},
        component: () => import('@/views/form/Page.vue')
      },
      {
        path: '/form/about',
        name: 'About',
        meta: {title: 'About', roles: ['admin']},
        component: () => import('@/views/form/About.vue')
      },
      {
        path: '/form/object',
        name: 'Object',
        meta: {title: 'Object', roles: ['admin']},
        component: () => import('@/views/form/Page2.vue')
      }
    ]
  };

export default adminRoutes;
