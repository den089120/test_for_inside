export interface TypeUserStore {
    isDropdown: boolean;
    isShow: TypeViewNavItem;
    isActiveNavbar: TypeViewNavItem;
    User: UserSchema;
    topics: TopicsSchema;
    chatId: number;
}

export interface TypeViewNavItem {
    [index: string]: boolean;
}

export interface UserSchema {
    userName: string;
    isAuth: boolean;
}

export interface TopicsSchema {
    [index: number]: string;
}