import axiosClient from '../apiClient'

const teacherGroupsApi = {
  getGroups(id) {
    const url = `/teachers/get-groups/${id}`
    return axiosClient.get(url)
  },
  createGroups(payload) {
    const url = '/rooms/create-room'
    return axiosClient.post(url, payload)
  },
  updateGroups(payload) {
    const url = `/rooms/update/${payload._id}`
    return axiosClient.put(url, payload)
  },
  deleteGroup(id) {
    const url = `/rooms/delete/${id}`
    return axiosClient.delete(url)
  }
}
export default teacherGroupsApi
