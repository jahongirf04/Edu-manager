import axiosClient from "../apiClient";

const adminStudentApi = {
  getStudents(p) {
    const url = `/admin/get-students/q?page=${p}&limit=10`
    return axiosClient.get(url)
  },
  createStudent(payload) {
    const url = 'admin/add-student'
    return axiosClient.post(url, payload)
  },
  updateStudent(payload) {
    const url = `admin/update-student/${payload._id}`
    return axiosClient.put(url, payload)
  },
  deleteStudent(id) {
    const url = `admin/delete-student/${id}`
    return axiosClient.delete(url)
  },

  getProfileInfo(){
    const url = 'profile/info'
    return axiosClient.get(url)
  }
}
export default adminStudentApi