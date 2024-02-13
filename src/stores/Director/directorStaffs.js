import { defineStore } from 'pinia'
import directorStaffsApi from '../../api/director/directorStaffs'

export const useDirectorStaffsStore = defineStore({
  id: 'staffs',
  actions: {
    async getStaffs(p) {
      try {
        return await directorStaffsApi.getStaffs(p)
      } catch (err) {
        console.log(err)
      }
    },
    async createStaff(payload) {
      try {
        await directorStaffsApi.createStaff(payload)
      } catch (e) {
        console.log(e)
      }
    },
    async activateStaff(payload) {
      try {
        await directorStaffsApi.activateStaff(payload)
      } catch (e) {
        console.log(e)
      }
    },
    async deleteStaff(id) {
      try {
        await directorStaffsApi.deleteStaff(id)
      } catch (e) {
        console.log(e)
      }
    }
  }
})
