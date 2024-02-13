import axiosClient from '../apiClient'

const directorStaffsApi = {
  getStaffs(p) {
    const url = `/director/get-staffs/q?page=${p}&limit=10`
    return axiosClient.get(url)
  },
  createStaff(payload) {
    const url = '/director/add-staff'
    return axiosClient.post(url, payload)
  },
  activateStaff(payload) {
    const url = `/director/activate-staff/${payload._id}`
    return axiosClient.put(url, payload)
  },
  deleteStaff(id) {
    const url = `/director/delete-staff/${id}`
    return axiosClient.delete(url)
  }
}
export default directorStaffsApi
