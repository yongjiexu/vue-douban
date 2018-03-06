import Vue from 'vue'
import Router from 'vue-router'

import Pages from 'components/Pages/Pages'
import Search from 'components/Search/Search'
import Home from 'components/Home/Home'
import Movie from 'components/Movie/Movie'
import Book from 'components/Book/Book'
import Status from 'components/Status/Status'
import Group from 'components/Group/Group'
import Detail from 'components/Detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/pages/'
    },
    {
      path: '/pages',
      component: Pages,
      children: [
        {
          path: '',
          redirect: 'home'
        },
        {
          path: 'home',
          name: 'Home',
          component: Home
        },
        {
          path: 'movie',
          name: 'Movie',
          component: Movie
        },
        {
          path: 'book',
          name: 'Book',
          component: Book
        },
        {
          path: 'status',
          name: 'Status',
          component: Status
        },
        {
          path: 'group',
          name: 'Group',
          component: Group
        },
        {
          path: 'detail/:id',
          name: 'Detail',
          component: Detail
        }
      ]
    },
    {
      path: 'pages/:classify/subject/:id',
      name: 'Subject',
      components: {
        default: Pages,
        subject: Subject
      }
    },
    {
      path: '/search',
      name: 'Search',
      components: {
        default: Pages,
        search: Search
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '*',
      redirect: '/pages'
    }
  ]
})
