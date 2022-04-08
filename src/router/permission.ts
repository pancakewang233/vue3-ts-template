import { router } from "./index";
import adminRoutes from "@/mock/user-admin";
import editorRoutes from "@/mock/user-editor";
import { useUserStore } from "@/store";

// 路由拦截器
router.beforeEach((to, from, next) => {
  const user = useUserStore();
  // @ts-ignore
  let token = JSON.parse(sessionStorage.getItem("user")) || null;
  let routes = token?.username === "admin" ? adminRoutes : editorRoutes;
  if (to.path === "/login") {
    next();
  } else {
    if (token) {
      routes.map((item) => {
        router.addRoute(item);
      });
      user.setRoute(routes);
      if(to.matched.length === 0){
        next({path: to.path})
      }else{
        next()
      }
      // next({ ...to, replace: true })
    } else {
      next("/login");
    }
  }
});
