/// <reference path="connection.d.ts"/>
/// <reference path="metadata.d.ts"/>
/// <reference path="net.d.ts"/>
/// <reference path="permission.d.ts"/>
/// <reference path="server.d.ts"/>

declare interface ScriptInstance {
    /**
     * 元数据
     * @see https://sereindev.github.io/docs/development/plugins/references/metadata
     * @since 2.0.0
     */
    readonly metadata: MetaData;

    /**
     * 控制台
     * @since 2.0.0
     */
    readonly console: Console;

    /**
     * 当前路径（CWD）
     * @see https://sereindev.github.io/docs/development/plugins/references/path#%E5%BD%93%E5%89%8D%E8%B7%AF%E5%BE%84cwd
     * @since 2.0.0
     */
    readonly path: string;

    /**
     * 计算绝对路径
     *
     * 类似NodeJs中的`path.resolve`
     * @param paths 路径
     * @returns 当合并后的路径是绝对路径时会直接返回，否则返回计算后的绝对路径
     * @example
     * ```ts
     * // Serein/plugins/plugin-1.js
     *
     * var path = serein.resolve('1.txt');
     * // = 'Serein/plugins/1.txt'
     * ```
     * @see https://sereindev.github.io/docs/development/plugins/references/path#%E8%AE%A1%E7%AE%97%E7%BB%9D%E5%AF%B9%E8%B7%AF%E5%BE%84
     * @since 2.0.0
     */
    resolve(...paths: string[]): string;

    /**
     * 服务器
     * @see https://sereindev.github.io/docs/development/plugins/references/servers/
     * @since 2.0.0
     */
    readonly servers: ServerManager & ServerManagerIndexer;

    /**
     * 连接
     * @see https://sereindev.github.io/docs/development/plugins/references/connection
     * @since 2.0.0
     */
    readonly connection: ConnectionProperty;

    /**
     * 权限组
     * @see https://sereindev.github.io/docs/development/plugins/references/permission_group
     * @since 2.0.0
     */
    readonly permissions: PermissionProperty & PermissionIndexer;

    /**
     * 导出
     * @param name 导出的名称
     * @param value 导出的对象
     * @returns 是否导出成功
     * @see https://sereindev.github.io/docs/development/plugins/references/exports_imports#%E5%AF%BC%E5%87%BA
     * @since 2.0.0
     */
    exports(name: string, value: any): boolean;

    /**
     * 导入
     * @param name 导入的名称
     * @returns 当指定的导入项不存在时将返回`undefined`
     * @see https://sereindev.github.io/docs/development/plugins/references/exports_imports#%E5%AF%BC%E5%85%A5
     * @since 2.0.0
     */
    imports(name: string): any;

    /**
     * 设置监听器
     * @param event 事件名称
     * @param callback 回调函数
     * @deprecated 此事件名称无效
     * @see https://sereindev.github.io/docs/development/plugins/references/events
     * @since 2.0.0
     */
    setListener(event: never, callback: never): void;

    /**
     * 删除监听器
     * @see https://sereindev.github.io/docs/development/plugins/references/events
     * @since 2.0.0
     */
    setListener(event: EventName, callback: null | undefined): void;

    /**
     * 设置监听器（服务器启动前）
     * @see https://sereindev.github.io/docs/development/plugins/references/events#serverstarting
     * @since 2.0.0
     */
    setListener(
        event: 'ServerStarting',
        callback: (server: ServerBase) => boolean | void
    ): void;

    /**
     * 设置监听器（服务器启动后）
     * @see https://sereindev.github.io/docs/development/plugins/references/events#serverstarted
     * @since 2.0.0
     */
    setListener(
        event: 'ServerStarted',
        callback: (server: ServerBase) => void
    ): void;

    /**
     * 设置监听器（用户尝试手动停止服务器时）
     * @see https://sereindev.github.io/docs/development/plugins/references/events#serverstopping
     * @since 2.0.0
     */
    setListener(
        event: 'ServerStopping',
        callback: (server: ServerBase) => boolean | void
    ): void;

    /**
     * 设置监听器（服务器进程退出后）
     * @see https://sereindev.github.io/docs/development/plugins/references/events#serverexited
     * @since 2.0.0
     */
    setListener(
        event: 'ServerExited',
        callback: (server: ServerBase, exitCode: number, exitTime: Date) => void
    ): void;

    /**
     * 设置监听器（服务器原始输出）
     * @see https://sereindev.github.io/docs/development/plugins/references/events#serverrawoutput
     * @since 2.0.0
     */
    setListener(
        event: 'ServerRawOutput',
        callback: (server: ServerBase, line: string) => boolean | void
    ): void;

    /**
     * 设置监听器（服务器输出）
     * @see https://sereindev.github.io/docs/development/plugins/references/events#serveroutput
     * @since 2.0.0
     */
    setListener(
        event: 'ServerOutput',
        callback: (server: ServerBase, line: string) => boolean | void
    ): void;

    /**
     * 设置监听器（服务器输入）
     * @see https://sereindev.github.io/docs/development/plugins/references/events#serverinput
     * @since 2.0.0
     */
    setListener(
        event: 'ServerInput',
        callback: (server: ServerBase, line: string) => void
    ): void;

    /**
     * 设置监听器（收到群聊消息）
     * @see https://sereindev.github.io/docs/development/plugins/references/events#groupmessagereceived
     * @since 2.0.0
     */
    setListener(
        event: 'GroupMessageReceived',
        callback: (messagePacket: MessagePacket) => boolean | void
    ): void;

    /**
     * 设置监听器（收到私聊消息）
     * @see https://sereindev.github.io/docs/development/plugins/references/events#privatemessagereceived
     * @since 2.0.0
     */
    setListener(
        event: 'PrivateMessageReceived',
        callback: (messagePacket: MessagePacket) => boolean | void
    ): void;

    /**
     * 设置监听器（收到WebSocket连接的数据文本）
     * @see https://sereindev.github.io/docs/development/plugins/references/events#wsdatareceived
     * @since 2.0.0
     */
    setListener(
        event: 'WsDataReceived',
        callback: (data: string) => boolean | void
    ): void;

    /**
     * 设置监听器（收到WebSocket连接的数据包）
     * @see https://sereindev.github.io/docs/development/plugins/references/events#packetreceived
     * @since 2.0.0
     */
    setListener(
        event: 'PacketReceived',
        callback: (data: ClrType) => boolean | void
    ): void;

    /**
     * 设置监听器（程序即将退出前）
     * @see https://sereindev.github.io/docs/development/plugins/references/events#sereinclosed
     * @since 2.0.0
     */
    setListener(event: 'SereinClosed', callback: () => void): void;

    /**
     * 设置监听器（程序崩溃后）
     * @see https://sereindev.github.io/docs/development/plugins/references/events#sereincrashed
     * @since 2.0.0
     */
    setListener(event: 'SereinCrashed', callback: () => void): void;

    /**
     * 设置监听器（插件加载完成后）
     * @see https://sereindev.github.io/docs/development/plugins/references/events#pluginsloaded
     * @since 2.0.0
     */
    setListener(event: 'PluginsLoaded', callback: () => void): void;

    /**
     * 设置监听器（插件卸载前）
     * @see https://sereindev.github.io/docs/development/plugins/references/events#pluginsunloading
     * @since 2.0.0
     */
    setListener(event: 'PluginsUnloading', callback: () => void): void;
}

declare type EventName =
    | 'ServerStarting'
    | 'ServerStarted'
    | 'ServerStopping'
    | 'ServerExited'
    | 'ServerOutput'
    | 'ServerRawOutput'
    | 'ServerInput'
    | 'GroupMessageReceived'
    | 'PrivateMessageReceived'
    | 'WsDataReceived'
    | 'PacketReceived'
    | 'SereinClosed'
    | 'SereinCrashed'
    | 'PluginsLoaded'
    | 'PluginsUnloading';

declare type MessagePacket = {
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
