import { defineStore } from 'pinia'
import teacherGroupsApi from '../../api/teacher/teacherGroups'

export const useTeacherGroupsStore = defineStore({
  id: 'teacher-groups',
  actions: {
    async getGroups(id) {
      try {
        return await teacherGroupsApi.getGroups(id)
      } catch (err) {
        console.log(err)
      }
    },
  }
})
