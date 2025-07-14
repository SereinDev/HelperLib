declare interface WebServer {
    /**
     * 网页服务器状态
     * @see https://sereindev.github.io/docs/development/plugins/references/web_server#当前状态
     * @since 2.1.0
     */
    state: WebServerState;

    /**
     * 启动网页服务器
     * @see https://sereindev.github.io/docs/development/plugins/references/web_server#启动
     * @since 2.1.0
     */
    start(): void;

    /**
     * 停止网页服务器
     * @see https://sereindev.github.io/docs/development/plugins/references/web_server#停止
     * @since 2.1.0
     */
    stop(): void;
}

declare enum WebServerState {
    Created = 0,

    Loading = 1,

    Listening = 2,

    Stopped = 3,
}
