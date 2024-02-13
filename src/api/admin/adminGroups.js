import axiosClient from '../apiClient'

const adminGroupsApi = {
  getGroups(p) {
    const url = `/groups/all/q?page=${p}&limit=10`
    return axiosClient.get(url)
  },
  createGroup(payload) {
    const url = '/groups/create-group'
    return axiosClient.post(url, payload)
  },
  updateGroup(payload) {
    const url = `/groups/update/${payload._id}`
    return axiosClient.put(url, payload)
  },
  deleteGroup(id) {
    const url = `/groups/delete/${id}`
    return axiosClient.delete(url)
  }
}
export default adminGroupsApi
