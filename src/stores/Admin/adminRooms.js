import { defineStore } from 'pinia'
import adminRoomsApi from '../../api/admin/adminRooms'

export const useAdminRoomsStore = defineStore({
  id: 'rooms',
  actions: {
    async getRooms(p) {
      try {
        return await adminRoomsApi.getRooms(p)
      } catch (err) {
        console.log(err)
      }
    },
    async createGroup(payload) {
      try {
        await adminRoomsApi.createRoom(payload)
      } catch (e) {
        console.log(e)
      }
    },
    async updateRoom(payload) {
      try {
        await adminRoomsApi.updateRoom(payload)
      } catch (e) {
        console.log(e)
      }
    },
    async deleteRoom(id) {
      try {
        await adminRoomsApi.deleteRoom(id)
      } catch (e) {
        console.log(e)
      }
    }
  }
})
