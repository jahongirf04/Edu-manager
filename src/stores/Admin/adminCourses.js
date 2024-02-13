import { defineStore } from 'pinia'
import adminCoursesApi from '../../api/admin/adminCourses'
import router from '../../router'

export const useAdminCoursesStore = defineStore({
  id: 'courses',
  actions: {
    async getCourses(p) {
      try {
        return await adminCoursesApi.getCourses(p)
      } catch (err) {
        console.log(err)
      }
    },
    async createCourse(payload) {
      try {
        await adminCoursesApi.createCourse(payload)
      } catch (e) {
        console.log(e)
      }
    },
    async updateCourse(payload) {
      try {
        await adminCoursesApi.updateCourse(payload)
      } catch (e) {
        console.log(e)
      }
    },
    async deleteCourse(id) {
      try {
        await adminCoursesApi.deleteCourse(id)
      } catch (e) {
        console.log(e)
      }
    }
  }
})
