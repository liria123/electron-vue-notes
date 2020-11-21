import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'note',
      component: ()=>import('@/views/note.vue')
    }
  ]
})
