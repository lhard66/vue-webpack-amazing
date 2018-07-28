import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ModelDemo from '@/views/model'
import ModelValueDemo from '@/views/modelValue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/model',
      name: 'model',
      component: ModelDemo,
    },
    {
      path: '/model-value',
      name: 'model-value',
      component: ModelValueDemo,
    },
  ]
})
