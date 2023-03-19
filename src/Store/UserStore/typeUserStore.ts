export interface TypeUserStore {
    User: UserSchema;
    topics: TopicsSchema;
    chatId: number;
    mySocket: WebSocket | null;
}

export interface UserSchema {
    userName: string;
    isAuth: boolean;
}

export interface TopicsSchema {
    [index: number]: string;
}