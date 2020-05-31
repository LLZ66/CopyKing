import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: () => import('views/home/Home'),
    },
    {
      path: "/music",
      name: "music",
      component: () => import("views/music/Music")
    },
    {
      path: "/time",
      name: "time",
      component: () => import("views/time/Time")
    },
    {
      path: '/edit',
      name: 'edit',
      component: () => import('components/edit/Edit'),
    },
    {
      path: "/emotion",
      name: "emotion",
      component: () => import("components/emotion/Emotion")
    },
]

const router = new VueRouter({
  routes
})

export default router
