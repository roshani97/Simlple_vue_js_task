import Vue from 'vue'
import Router from 'vue-router'
import subject from '@/components/subject'
import topic from '@/components/topic'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/subject',
      name: 'subject',
      component: subject
    },
    {
      path: '/topic',
      name: 'topic',
      component:topic
    }
  ]
})
