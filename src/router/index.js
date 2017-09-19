import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Hello from '@/components/Hello'
import Text from '@/components/Text'
import Textrouter from '@/components/Textrouter'


Vue.use(VueResource)
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '*',
            redirect: '/text',
            component: Text
        },
        {
            path: '/text',
            name: 'text',
            component: Text,
            children: [
                {
                    path: '/text/textrouter',
                    name: 'textrouter',
                    component: Textrouter
                }, 
                {
                    path: '/text/hello',
                    name: 'hello',
                    component: Hello
                }
            ]
        }, 
        {
            path: '/hello',
            name: 'hello',
            component: Hello
        }, 
    ]
})