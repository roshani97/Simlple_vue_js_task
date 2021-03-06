import Vue from 'vue'
import Router from 'vue-router'
import subject from '@/components/subject'
import topic from '@/components/topic'
import question from '@/components/question'
import que_edit from '@/components/que_edit'
import add_sub from '@/components/add_sub'

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
    },
    {
      path: '/question',
      name: 'queston',
      component:question
    },
    {
      path: '/que_edit',
      name: 'que_edit',
      component:que_edit
    },
    {
      path: '/add_sub',
      name: 'add_sub',
      component:add_sub
    }
  ]
})
