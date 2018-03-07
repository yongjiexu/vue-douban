import Vue from 'vue'
import Router from 'vue-router'

import PagesView from 'components/Pages/PagesView'
import HomeView from 'components/Home/HomeView'
import MovieView from 'components/Movie/MovieView'
import BookView from 'components/Book/BookView'
import StatusView from 'components/Status/StatusView'
import GroupView from 'components/Group/GroupView'
import SubjectView from 'components/Subject/SubjectView'
import DetailView from 'components/Detail/DetailView'
import SearchView from 'components/Search/SearchView'
import LoginView from 'components/Login/LoginView'
import RegisterView from 'components/Register/RegisterView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/pages/'
    },
    {
      path: '/pages',
      component: PagesView,
      children: [
        {
          path: '',
          redirect: '/pages/home'
        },
        {
          path: 'home',
          name: 'HomeView',
          component: HomeView
        },
        {
          path: 'movie',
          name: 'MovieView',
          component: MovieView
        },
        {
          path: 'book',
          name: 'BookView',
          component: BookView
        },
        {
          path: 'status',
          name: 'StatusView',
          component: StatusView
        },
        {
          path: 'group',
          name: 'GroupView',
          component: GroupView
        },
        {
          path: 'detail/:id',
          name: 'DetailView',
          component: DetailView
        }
      ]
    },
    {
      path: '/pages/:classify/subject/:id',
      name: 'SubjectView',
      components: {
        default: PagesView,
        subject: SubjectView
      }
    },
    {
      path: '/search',
      name: 'SearchView',
      components: {
        default: PagesView,
        search: SearchView
      }
    },
    {
      path: '/login',
      name: 'LoginView',
      component: LoginView
    },
    {
      path: '/register',
      name: 'RegisterView',
      component: RegisterView
    },
    {
      path: '*',
      redirect: '/pages/'
    }
  ]
})
