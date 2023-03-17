import { defineStore } from 'pinia';
import {TypeUserStore} from "./typeUserStore";


export const useUserStore = defineStore({
    id: 'globalStore',
    state: (): TypeUserStore => {
        return {
            isDropdown: false,
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