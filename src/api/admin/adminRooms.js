import axiosClient from '../apiClient'

const adminRoomsApi = {
  getRooms(p) {
    const url = `/rooms/all/q?page=${p}&limit=10`
    return axiosClient.get(url)
  },
  createRoom(payload) {
    const url = '/rooms/create-room'
    return axiosClient.post(url, payload)
  },
  updateRoom(payload) {
    const url = `/rooms/update/${payload._id}`
    return axiosClient.put(url, payload)
  },
  deleteRoom(id) {
    const url = `/rooms/delete/${id}`
    return axiosClient.delete(url)
  }
}
export default adminRoomsApi
