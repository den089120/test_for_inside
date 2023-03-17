export interface TypeUserStore {
    isDropdown: boolean;
    isShow: TypeViewNavItem;
    isActiveNavbar: TypeViewNavItem;
}

export interface TypeViewNavItem {
    [index: string]: boolean;
}