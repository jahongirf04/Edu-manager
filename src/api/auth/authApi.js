import axiosClient from "../apiClient";

const authApi = {
    login(payload){
        const url = "/auth/login"
        return axiosClient.post(url, payload)
    }
}
export default authApi