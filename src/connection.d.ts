declare interface ConnectionProperty {
    /**
     * 是否连接
     * @see https://sereindev.github.io/docs/development/plugins/references/connection/#%E6%98%AF%E5%90%A6%E8%BF%9E%E6%8E%A5
     * @since 2.0.0
     */
    get active(): boolean;

    /**
     * 启动
     * @see https://sereindev.github.io/docs/development/plugins/references/connection/#%E5%90%AF%E5%8A%A8
     * @since 2.0.0
     */
    start(): void;

    /**
     * 停止
     * @see https://sereindev.github.io/docs/development/plugins/references/connection/#%E5%81%9C%E6%AD%A2
     * @since 2.0.0
     */
    stop(): void;

    /**
     * 发送文本
     * @param text 发送的内容 
     * @see https://sereindev.github.io/docs/development/plugins/references/connection/#%E5%8F%91%E9%80%81%E6%96%87%E6%9C%AC
     * @since 2.0.0
     */
    sendData(text: string): void;

    /**
     * 发送群聊消息
     * @param target 群聊Id
     * @param message 消息
     * @see https://sereindev.github.io/docs/development/plugins/references/connection/#%E5%8F%91%E9%80%81%E7%BE%A4%E8%81%8A%E6%B6%88%E6%81%AF
     * @since 2.0.0
     */
    sendGroupMsg(target: number, message: string): void;

    /**
     * 发送私聊消息
     * @param target 用户Id
     * @param message 消息
     * @see https://sereindev.github.io/docs/development/plugins/references/connection/#%E5%8F%91%E9%80%81%E7%A7%81%E8%81%8A%E6%B6%88%E6%81%AF
     * @since 2.0.0
     */
    sendPrivateMsg(target: number, message: string): void;
}
