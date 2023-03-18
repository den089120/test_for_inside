import { defineStore } from 'pinia';
import {TypeUserStore} from "./typeUserStore";
import axios from "axios";
import {router} from "@/Router";


export const useUserStore = defineStore({
    id: 'globalStore',
    state: (): TypeUserStore => {
        return {
            isDropdown: false,
            User: {
                userName: '',
                isAuth: false,
            },
            topics: {
                12 : 'Обсуждение политики',
                23 : 'техническое состояние машин',
            },
            chatId: 0,


            isShow: {
                ShowHexaNavigation: false,
                ShowKeeperNav: false,
            },
            isActiveNavbar: {
                activeIs_1: false,
                activeIs_2: false,
                activeIs_3: false,
                activeIs_4: false,
                activeIs_5: false,
                activeIs_6: false,
                activeIs_7: false,
                activeIs_8: false,
                activeIs_9: false,
                activeIs_10: false,
                activeIs_11: false,
                activeIs_12: false,
            }
        }
    },
    getters: {},
    actions: {
        setChatId(id: number | undefined):void {
            if (id)  this.chatId = id
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
        changeDropdown(): void {
            Object.keys(this.isActiveNavbar).forEach(el => this.isActiveNavbar[el] = false)
            this.isDropdown = !this.isDropdown
        },
        changeActive(name: string | undefined):void {
            Object.keys(this.isActiveNavbar).forEach(el => this.isActiveNavbar[el] = false)
            this.isDropdown = false
            if (name) this.isActiveNavbar[name] = true
        }
    },
})