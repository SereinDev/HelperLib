/// <reference path="encoding.d.ts"/>

declare interface Server {
    /**
     * 服务器Id
     * @since 2.1.0
     */
    readonly id: string;

    /**
     * Logger
     * @since 2.1.0
     */
    readonly logger: ServerLogger;

    /**
     * 服务器输出历史
     * @since 2.0.0
     */
    get commandHistory(): readonly string[];

    /**
     * 服务器状态
     * @see https://sereindev.github.io/docs/development/plugins/references/servers/#%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%8A%B6%E6%80%81
     * @since 2.0.0
     */
    get status(): boolean;

    /**
     * 服务器进程ID
     * @see https://sereindev.github.io/docs/development/plugins/references/servers/#%E6%9C%8D%E5%8A%A1%E5%99%A8%E8%BF%9B%E7%A8%8Bid
     * @since 2.0.0
     */
    get pid(): number;

    /**
     * 服务器信息
     * @see https://sereindev.github.io/docs/development/plugins/references/servers/#%E6%9C%8D%E5%8A%A1%E5%99%A8%E4%BF%A1%E6%81%AF
     * @since 2.0.0
     */
    get info(): ServerInfo;

    /**
     * 重启状态
     * @since 2.1.0
     */
    get restartStatus(): RestartStatus;

    /**
     * 启动服务器
     *
     * - 若服务器已在运行或启动失败（文件不存在、权限不足等）则会报错，可用`try...catch`捕获
     * @see https://sereindev.github.io/docs/development/plugins/references/servers/#%E5%BC%80%E5%90%AF%E6%9C%8D%E5%8A%A1%E5%99%A8
     * @since 2.0.0
     */
    start(): void;

    /**
     * 停止服务器
     *
     * - 若服务器已关闭则会报错，可用`try...catch`捕获
     * - 实质上是向服务器发送关闭命令（默认为`stop`）
     * - 当配置中的关服命令项为空时会尝试发送`^C`
     * @see https://sereindev.github.io/docs/development/plugins/references/servers/#%E5%85%B3%E9%97%AD%E6%9C%8D%E5%8A%A1%E5%99%A8
     * @since 2.0.0
     */
    stop(): void;

    /**
     * 强制关闭服务器
     *
     * - 若服务器已关闭或强制结束失败（系统原因）则会报错，可用`try...catch`捕获
     * @see https://sereindev.github.io/docs/development/plugins/references/servers/#%E5%BC%BA%E5%88%B6%E5%85%B3%E9%97%AD%E6%9C%8D%E5%8A%A1%E5%99%A8
     * @since 2.0.0
     */
    terminate(): void;

    /**
     * 输入到服务器
     *
     * @param command 命令
     * @since 2.0.0
     */
    input(command: string): void;

    /**
     * 请求重启服务器
     *
     * @since 2.1.0
     */
    requestRestart(): void;
}

declare interface ServerLogger {
    readonly id: string;
    readonly history: readonly {
        type: ServerOutputType;
        data: string;
    }[];
}

declare enum ServerOutputType {
    StandardOutput = 0,

    StandardInput = 1,

    InternalInfo = 2,

    InternalError = 3,
}

declare interface ServerInfo {
    /**
     * 启动文件
     * @since 2.0.0
     */
    get fileName(): string | null;

    /**
     * 启动参数
     * @since 2.0.0
     */
    get argument(): string | null;

    /**
     * 启动时间
     * @since 2.0.0
     */
    get startTime(): Date | null;

    /**
     * 关闭时间
     * @since 2.0.0
     */
    get exitTime(): Date | null;

    /**
     * 输出行数
     * @since 2.0.0
     */
    get outputLines(): number;

    /**
     * 输入行数
     * @since 2.0.0
     */
    get inputLines(): number;

    /**
     * 进程CPU使用率
     * @since 2.0.0
     */
    get cpuUsage(): number;

    /**
     * MineStat
     * @since 2.0.0
     */
    get stat(): object | null;
}

declare type Configuration = {
    /**
     * 名称
     * @since 2.0.0
     */
    name: string;

    /**
     * 启动文件
     * @since 2.0.0
     */
    fileName: string;

    /**
     * 启动参数
     * @since 2.0.0
     */
    argument: string;

    /**
     * 环境变量
     * @since 2.0.0
     */
    environment: { [key: string]: string };

    /**
     * Serein崩溃时自动关闭服务器
     * @since 2.0.0
     */
    autoStopWhenCrashing: boolean;

    /**
     * 退出代码不为零时自动重启
     * @since 2.0.0
     */
    autoRestart: boolean;

    /**
     * 在控制台上输出用户输入命令
     * @since 2.0.0
     */
    outputCommandUserInput: boolean;

    /**
     * 保存日志
     * @since 2.0.0
     */
    saveLog: boolean;

    /**
     * 行终止符
     * @since 2.0.0
     */
    lineTerminator: string;

    /**
     * 输入编码
     * @since 2.0.0
     */
    inputEncoding: EncodingType;

    /**
     * 输出编码
     * @since 2.0.0
     */
    outputEncoding: EncodingType;

    /**
     * 输出样式
     * @since 2.0.0
     */
    outputStyle: OutputStyle;

    /**
     * 服务器端口
     * @since 2.0.0
     */
    portIPv4: number;

    /**
     * 关服命令
     * @since 2.0.0
     */
    stopCommands: string[];

    /**
     * Serein启动后运行服务器
     * @since 2.0.0
     */
    startWhenSettingUp: boolean;

    /**
     * 使用Unicode字符
     * @since 2.0.0
     */
    useUnicodeChars: boolean;

    /**
     * PTY设置
     * @since 2.0.0
     */
    pty: PtyOptions;
};

declare type PtyOptions = {
    /**
     * 是否启用
     * @since 2.0.0
     */
    isEnabled: boolean;

    /**
     * 终端宽度
     * @since 2.0.0
     */
    terminalWidth: number | null;

    /**
     * 终端高度
     * @since 2.0.0
     */
    terminalHeight: number | null;

    /**
     * 强制使用WinPTY
     * @since 2.0.0
     */
    forceWinPty: boolean;
};

declare enum OutputStyle {
    Plain = 0,

    RawText = 1,
}

declare enum RestartStatus {
    None = 0,
    Waiting = 1,
    Preparing = 2,
}

declare interface ServerManager {
    /**
     * 服务器Id列表
     * @since 2.0.0
     */
    get ids(): string[];

    /**
     * 添加服务器配置
     * @param id 服务器Id
     * @param configuration 服务器配置
     * @returns 服务器实例
     * @see https://sereindev.github.io/docs/development/plugins/references/servers/#%E6%B7%BB%E5%8A%A0%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%85%8D%E7%BD%AE
     * @since 2.0.0
     */
    add(id: string, configuration: Configuration): Server;

    /**
     * 删除服务器配置
     * @param id 服务器Id
     * @see https://sereindev.github.io/docs/development/plugins/references/servers/#%E5%88%A0%E9%99%A4%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%85%8D%E7%BD%AE
     * @since 2.0.0
     */
    remove(id: string): void;

    /**
     * 保存所有服务器配置
     * @since 2.0.0
     */
    saveAll(): void;

    /**
     * 是否有服务器正在运行
     * @since 2.0.0
     */
    get anyRunning(): boolean;
}

declare type ServerManagerIndexer = {
    /**
     * 所有服务器
     * @see https://sereindev.github.io/docs/development/plugins/references/servers/#%E6%89%80%E6%9C%89%E6%9C%8D%E5%8A%A1%E5%99%A8
     * @since 2.0.0
     */
    readonly [id: string]: Server;
};
