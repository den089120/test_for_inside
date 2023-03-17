import {useUserStore} from "./UserStore/UserStore";
import pinia from "./pinia";
const UserStore = useUserStore(pinia);

export {
    UserStore,
    pinia
}