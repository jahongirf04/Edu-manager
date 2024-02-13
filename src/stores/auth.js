import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import authApi from '../api/auth/authApi'
import router from '../router'

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    user: null,
    roles: []
  }),
  actions: {
    async authLogin(payload) {
      try {
        this.user = payload
        let res = await authApi.login(payload)
        if (res?.data?.tokens?.access_token) {
          localStorage.setItem('role', res?.data?.user?.role)
          localStorage.setItem('token', res?.data?.tokens?.access_token)
          if (res?.data?.user?.role==='admin'){
            await router.push({name: 'students'})
          } else if (res?.data?.user?.role==='director'){
            await router.push({name: 'staffs'})
          } else if (res?.data?.user?.role==='teacher'){
            await router.push({ name: 'teacher-groups' })
          }
        }
      } catch (err) {
        if (err?.response?.data?.roles) {
          this.roles = err.response.data.roles
        }
      }
    }
  }
})
