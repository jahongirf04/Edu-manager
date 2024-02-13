import { defineStore } from 'pinia'
import adminGroupsApi from '../../api/admin/adminGroups'

export const useAdminGroupsStore = defineStore({
  id: 'groups',
  actions: {
    async getGroups(p) {
      try {
        return await adminGroupsApi.getGroups(p)
      } catch (err) {
        console.log(err)
      }
    },
    async createGroup(payload) {
      try {
        await adminGroupsApi.createGroup(payload)
      } catch (e) {
        console.log(e)
      }
    },
    async updateGroup(payload) {
      try {
        await adminGroupsApi.updateGroup(payload)
      } catch (e) {
        console.log(e)
      }
    },
    async deleteGroup(id) {
      try {
        await adminGroupsApi.deleteGroup(id)
      } catch (e) {
        console.log(e)
      }
    }
  }
})
