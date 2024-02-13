import axiosClient from '../apiClient'

const adminCoursesApi = {
  getCourses(p) {
    const url = `/courses/all/q?page=${p}&limit=10`
    return axiosClient.get(url)
  },
  createCourse(payload) {
    const url = '/courses/create-course'
    return axiosClient.post(url, payload)
  },
  updateCourse(payload) {
    const url = `/courses/update/${payload._id}`
    return axiosClient.put(url, payload)
  },
  deleteCourse(id) {
    const url = `/courses/delete/${id}`
    return axiosClient.delete(url)
  }
}
export default adminCoursesApi
