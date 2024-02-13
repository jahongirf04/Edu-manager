import { defineStore } from 'pinia'
import adminStudentApi from '../../api/admin/adminStudent'
import router from '../../router'

export const useAdminStudentStore = defineStore({
  id: 'admin',
  state: () => ({
    student: {},
    profileInfo: '',
    modal: false,
    update_modal: false,
    delete_modal: false
  }),
  actions: {
    async getStudents(p) {
      try {
        return await adminStudentApi.getStudents(p)
      } catch (err) {
        console.log(err)
      }
    },
    async createStudent(payload) {
      try {
        await adminStudentApi.createStudent(payload)
      } catch (e) {
        console.log(e)
      }
    },
    async updateStudent(payload) {
      try {
        await adminStudentApi.updateStudent(payload)
      } catch (e) {
        console.log(e)
      }
    },
    async deleteStudent(id) {
      try {
        await adminStudentApi.deleteStudent(id)
      } catch (e) {
        console.log(e)
      }
    },

    async getProfileInfo() {
      try {
        return await adminStudentApi.getProfileInfo()
      } catch (e) {
        console.log(e)
      }
    }
  }
})
