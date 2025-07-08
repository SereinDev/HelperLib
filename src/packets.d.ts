/// <reference path="clr.d.ts"/>

declare interface Packets {
    readonly oneBotV11?: OneBotV11MessagePacket;

    readonly oneBotV12?: OneBotV12MessagePacket;

    readonly satoriV1?: EventBody;

    /**

    * 用户 Id

    */

    get userId(): number;

    /**

    * 群聊 Id

    */

    get groupId(): number;

    /**

    * 消息内容

    */

    get message(): string;
}

declare type OneBotV11MessagePacket = {
    readonly postType: string;

    readonly time: number;

    readonly selfId: number;

    readonly messageType: MessageType;

    readonly messageFormat: MessageFormat;

    readonly subType: SubType;

    readonly echo?: string | null;

    readonly messageId: number;

    readonly messageSeq: number;

    readonly sender: {
        readonly nickname: string;

        readonly card: string;

        readonly title: string;

        readonly role: Role;

        get roleName(): string;

        readonly tinyId: string;

        readonly userId: number;
    };

    readonly userId: number;

    readonly groupId: number;

    readonly rawMessage: string;

    readonly message: ClrType; // JsonElement
};

declare enum MessageFormat {
    String = 0,

    Array = 1,
}

declare enum MessageType {
    Unknown = 0,

    Private = 1,

    Group = 2,
}

declare enum Role {
    Member = 0,

    Admin = 1,

    Owner = 2,
}

declare enum SubType {
    Unknown = 0,

    Friend = 1,

    Normal = 2,

    Anonymous = 3,

    Group = 4,

    GroupSelf = 5,

    Notice = 6,
}

declare enum EventType {
    Meta = 0,

    Message = 1,

    Notice = 2,

    Request = 3,
}

declare enum MessageDetailType {
    Private = 0,

    Group = 1,

    Channel = 2,

    Guild = 3,
}

declare interface MessageSegment {
    type: string;

    data: { [key: string]: any };
}

declare interface OneBotV12MessagePacket {
    messageId: string;

    message: MessageSegment[];

    altMessage: string;

    userId: string;

    groupId?: string;

    guildId?: string;

    channelId?: string;

    detailType: MessageDetailType;

    readonly friendlyMessage: string;

    id: string;

    time: number;

    type: EventType.Message;

    subType: string;

    self: Self;
}

declare interface Self {
    platform: string;

    userId: string;
}

declare enum LoginStatus {
    Offline = 0,

    Online = 1,

    Connect = 2,

    Disconnect = 3,

    Reconnect = 4,
}

declare enum ChannelType {
    Text = 0,

    Direct = 1,

    Category = 2,

    Voice = 3,
}

declare interface User {
    id: string;

    name?: string;

    nick?: string;

    avatar?: string;

    isBot?: boolean;
}

declare interface Login {
    sn: number;

    platform?: string;

    user?: User;

    status: LoginStatus;

    adapter: string;

    features?: readonly string[];
}

declare interface Channel {
    id: string;

    type: ChannelType;

    name?: string;

    parentId?: string;
}

declare interface Guild {
    id: string;

    name?: string;

    avatar?: string;
}

declare interface GuildMember {
    user?: User;

    nick?: string;

    avatar?: string;

    joinedAt?: number;
}

declare interface Message {
    id: string;

    content: string;

    channel?: Channel;

    guild?: Guild;

    member?: GuildMember;

    user?: User;

    createdAt: number;

    updatedAt?: number;
}

declare interface EventBody {
    sn: number;

    type: string;

    timestamp: number;

    login: Login;

    channel?: Channel;

    message?: Message;

    user?: User;
}
