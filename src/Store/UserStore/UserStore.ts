import { defineStore } from 'pinia';
import {TypeUserStore} from "./typeUserStore";
import axios from "axios";
import {router} from "@/Router";


export const useUserStore = defineStore({
    id: 'userStore',
    state: (): TypeUserStore => {
        return {
            User: {
                userName: '',
                isAuth: false,
            },
            topics: {
                12 : 'Обсуждение политики',
                23 : 'техническое состояние машин',
            },
            chatId: 0,
            mySocket: null,
        }
    },
    getters: {
        getLocaleStorage () {
            const obj = localStorage.getItem(this.User.userName)
            return obj ? JSON.parse(obj) : ''
        },
    },
    actions: {
        setChatId(id: number | undefined):void {
            if (id)  this.chatId = id
        },
        closeSocket() {
            if (this.mySocket) {
                this.mySocket.close()
            }
        },
        setSocket(socket: WebSocket) {
            this.mySocket = socket
        },
        async logOutUser() {
            localStorage.removeItem(this.User.userName)
            this.User.userName = ''
            this.User.isAuth = false
            this.closeSocket()
            await router.push({name: 'LoginUser'})
        },
        async registrationUser(nameUser: string, password: string) {
            try {
                const hashName = window.btoa(nameUser)
                const hashPassword = window.btoa(password)

                const response = await axios.post('http://auth', {
                    login: hashName,
                    password: hashPassword
                })
                if (response.status === 200) {

                    const data = response.data
                    const obj = {token: data, login: nameUser}
                    localStorage.setItem(nameUser, JSON.stringify(obj))

                    await router.push({name: 'DashboardChat'})
                }
            } catch (e) {
                console.log(e)
            }

        },
        async getTopics() {

            const obj = localStorage.getItem(this.User.userName)
            if (obj) {
                const {token, login} = JSON.parse(obj)

                this.User.userName = login
                this.User.isAuth = true

                try {
                    const response = await axios.get('http://topics', {
                        params: {
                            token,
                            login,
                        }
                    })
                    if (response.status === 200) {
                        this.topics = JSON.parse(response.data)
                    }
                } catch (e) {
                    console.log(e)
                }
            }
        },
    },
})