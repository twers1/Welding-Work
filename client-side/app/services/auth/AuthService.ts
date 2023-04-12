import { axiosClassic } from "@/api/api"
import { removeTokenFromStorage, saveTokenToStorage } from "./auth.helper"
import { IAuthResponse } from "./auth-service.interface"

export const AuthService ={
    async login(email: string, password: string) {
        const response = await axiosClassic.post<IAuthResponse>('/auth/login', {
            email,
            password
        })

        if(response.data.accessToken)
            await saveTokenToStorage(response.data.accessToken)

        return response.data
    },
    async register(email:string, password: string) {
        const response = await axiosClassic.post<IAuthResponse>('/auth/register', {
            email,
            password
        })

        if(response.data.accessToken)
            await saveTokenToStorage(response.data.accessToken)

        return response.data
    },

    async logout(){
        await removeTokenFromStorage()
    }

}