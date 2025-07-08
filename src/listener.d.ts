/// <reference path="clr.d.ts"/>
/// <reference path="packets.d.ts"/>
/// <reference path="servers.d.ts"/>

declare interface ListenerProvider {
    /**
     * 设置监听器
     * @param event 事件名称
     * @param callback 回调函数
     * @deprecated 此事件名称无效
     * @see https://sereindev.github.io/docs/development/plugins/references/events
     * @since 2.0.0
     */
    setListener(event: never, callback: never): never;

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
        callback: (server: Server) => Waitable<boolean | void>
    ): void;

    /**
     * 设置监听器（服务器启动后）
     * @see https://sereindev.github.io/docs/development/plugins/references/events#serverstarted
     * @since 2.0.0
     */
    setListener(
        event: 'ServerStarted',
        callback: (server: Server) => Waitable<void>
    ): void;

    /**
     * 设置监听器（用户尝试手动停止服务器时）
     * @see https://sereindev.github.io/docs/development/plugins/references/events#serverstopping
     * @since 2.0.0
     */
    setListener(
        event: 'ServerStopping',
        callback: (server: Server) => Waitable<boolean | void>
    ): void;

    /**
     * 设置监听器（服务器进程退出后）
     * @see https://sereindev.github.io/docs/development/plugins/references/events#serverexited
     * @since 2.0.0
     */
    setListener(
        event: 'ServerExited',
        callback: (
            server: Server,
            exitCode: number,
            exitTime: Date
        ) => Waitable<void>
    ): void;

    /**
     * 设置监听器（服务器原始输出）
     * @see https://sereindev.github.io/docs/development/plugins/references/events#serverrawoutput
     * @since 2.0.0
     */
    setListener(
        event: 'ServerRawOutput',
        callback: (server: Server, line: string) => Waitable<boolean | void>
    ): void;

    /**
     * 设置监听器（服务器输出）
     * @see https://sereindev.github.io/docs/development/plugins/references/events#serveroutput
     * @since 2.0.0
     */
    setListener(
        event: 'ServerOutput',
        callback: (server: Server, line: string) => Waitable<boolean | void>
    ): void;

    /**
     * 设置监听器（服务器输入）
     * @see https://sereindev.github.io/docs/development/plugins/references/events#serverinput
     * @since 2.0.0
     */
    setListener(
        event: 'ServerInput',
        callback: (server: Server, line: string) => Waitable<void>
    ): void;

    /**
     * 设置监听器（收到群聊消息）
     * @see https://sereindev.github.io/docs/development/plugins/references/events#groupmessagereceived
     * @since 2.0.0
     */
    setListener(
        event: 'GroupMessageReceived',
        callback: (packets: Packets) => Waitable<boolean | void>
    ): void;

    /**
     * 设置监听器（收到私聊消息）
     * @see https://sereindev.github.io/docs/development/plugins/references/events#privatemessagereceived
     * @since 2.0.0
     */
    setListener(
        event: 'PrivateMessageReceived',
        callback: (packets: Packets) => Waitable<boolean | void>
    ): void;

    /**
     * 设置监听器（收到频道消息）
     * @see https://sereindev.github.io/docs/development/plugins/references/events#channelmessagereceived
     * @since 2.1.0
     */
    setListener(
        event: 'ChannelMessageReceived',
        callback: (packets: Packets) => Waitable<boolean | void>
    ): void;

    /**
     * 设置监听器（收到WebSocket连接的数据文本）
     * @see https://sereindev.github.io/docs/development/plugins/references/events#connectiondatareceived
     * @since 2.1.0
     */
    setListener(
        event: 'ConnectionDataReceived',
        callback: (data: string) => Waitable<boolean | void>
    ): void;

    /**
     * 设置监听器（收到WebSocket连接的数据包）
     * @see https://sereindev.github.io/docs/development/plugins/references/events#packetreceived
     * @since 2.0.0
     */
    setListener(
        event: 'PacketReceived',
        callback: (data: ClrType) => Waitable<boolean | void>
    ): void;

    /**
     * 设置监听器（程序即将退出前）
     * @see https://sereindev.github.io/docs/development/plugins/references/events#sereinclosed
     * @since 2.0.0
     */
    setListener(event: 'SereinClosed', callback: () => Waitable<void>): void;

    /**
     * 设置监听器（程序崩溃后）
     * @see https://sereindev.github.io/docs/development/plugins/references/events#sereincrashed
     * @since 2.0.0
     */
    setListener(event: 'SereinCrashed', callback: () => Waitable<void>): void;

    /**
     * 设置监听器（插件加载完成后）
     * @see https://sereindev.github.io/docs/development/plugins/references/events#pluginsloaded
     * @since 2.0.0
     */
    setListener(event: 'PluginsLoaded', callback: () => Waitable<void>): void;

    /**
     * 设置监听器（插件卸载前）
     * @see https://sereindev.github.io/docs/development/plugins/references/events#pluginsunloading
     * @since 2.0.0
     */
    setListener(
        event: 'PluginsUnloading',
        callback: () => Waitable<void>
    ): void;
}

declare type Waitable<T> = T | Promise<T>;

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
    | 'ChannelMessageReceived'
    | 'ConnectionDataReceived'
    | 'PacketReceived'
    | 'SereinClosed'
    | 'SereinCrashed'
    | 'PluginsLoaded'
    | 'PluginsUnloading';
