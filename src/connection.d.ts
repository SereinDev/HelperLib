/// <reference path="command.d.ts"/>

declare interface ConnectionManager {
    /**
     * 是否连接
     * @see https://sereindev.github.io/docs/development/plugins/references/connection/#是否连接
     * @since 2.1.0
     */
    get isActive(): boolean;

    /**
     * 接收数据包数
     * @see https://sereindev.github.io/docs/development/plugins/references/connection/#接收数据包数
     * @since 2.1.0
     */
    get received(): number;

    /**
     * 发送数据包数
     * @see https://sereindev.github.io/docs/development/plugins/references/connection/#发送数据包数
     * @since 2.1.0
     */
    get sent(): number;

    /**
     * 启动时间
     * @see https://sereindev.github.io/docs/development/plugins/references/connection/#启动时间
     * @since 2.1.0
     */
    get startedAt(): Date | null;

    /**
     * 启动
     * @see https://sereindev.github.io/docs/development/plugins/references/connection/#启动
     * @since 2.0.0
     */
    start(): void;

    /**
     * 停止
     * @see https://sereindev.github.io/docs/development/plugins/references/connection/#停止
     * @since 2.0.0
     */
    stop(): void;

    /**
     * 发送文本
     * @param data 发送的内容
     * @see https://sereindev.github.io/docs/development/plugins/references/connection/#发送文本
     * @since 2.1.0
     */
    sendDataAsync(data: string): Promise<void>;

    /**
     * 发送消息
     * @param type 消息类型
     * @param target 发送目标
     * @param message 消息
     * @param arguments 命令参数
     * @see https://sereindev.github.io/docs/development/plugins/references/connection/#发送消息
     * @since 2.1.0
     */
    sendMessageAsync(
        type: TargetType,
        target: string,
        message: string,
        arguments?: CommandArguments
    ): Promise<void>;
}

declare enum TargetType {
    Auto = 0,

    Private = 1,

    Group = 2,

    Channel = 3,

    Guild = 4,
}
