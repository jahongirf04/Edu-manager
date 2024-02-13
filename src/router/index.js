import { createRouter, createWebHistory } from 'vue-router'
import auth from './auth'
import admin from './admin'
import director from './director'
import teacher from './teacher'
import finance from './finance'
import student from './student'
import pageNotFound from './page-not-found.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [auth, admin, director, teacher, finance, student, pageNotFound]
})

export default router
