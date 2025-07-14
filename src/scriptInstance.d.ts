/// <reference path="app.d.ts"/>
/// <reference path="clr.d.ts"/>
/// <reference path="connection.d.ts"/>
/// <reference path="dataProvider.d.ts"/>
/// <reference path="listener.d.ts"/>
/// <reference path="hardwareInfo.d.ts"/>
/// <reference path="permission.d.ts"/>
/// <reference path="settings.d.ts"/>
/// <reference path="servers.d.ts"/>
/// <reference path="webServer.d.ts"/>

declare interface ScriptInstance extends ListenerProvider {
    /**
     * 硬件信息
     * @see https://sereindev.github.io/docs/development/plugins/references/hardware_info
     * @since 2.0.0
     */
    get hardwareInfo(): HardwareInfo;

    /**
     * 插件Id
     * @since 2.0.0
     */
    readonly id: string;

    /**
     * 控制台
     * @since 2.0.0
     */
    readonly console: Console;

    /**
     * 当前路径（CWD）
     * @see https://sereindev.github.io/docs/development/plugins/references/path#当前路径cwd
     * @since 2.0.0
     */
    readonly path: string;

    /**
     * 计算绝对路径
     *
     * 类似 NodeJs 中的`path.resolve`
     * @param paths 路径
     * @returns 当合并后的路径是绝对路径时会直接返回，否则返回计算后的绝对路径
     * @example
     * ```ts
     * // in Serein/plugins/plugin-1.js
     *
     * var path = serein.resolve('1.txt');
     * // = 'Serein/plugins/1.txt'
     * ```
     * @see https://sereindev.github.io/docs/development/plugins/references/path#计算绝对路径
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
    readonly connection: ConnectionManager;

    /**
     * 权限组
     * @see https://sereindev.github.io/docs/development/plugins/references/permission_group
     * @since 2.0.0
     */
    readonly permissions: PermissionProperty & PermissionIndexer;

    /**
     * 匹配
     * @see https://sereindev.github.io/docs/development/plugins/references/datas#匹配
     * @since 2.1.0
     */
    readonly matches: DataProvider<Match[]>;

    /**
     * 设置
     * @see https://sereindev.github.io/docs/development/plugins/references/datas#设置
     * @since 2.1.0
     */
    readonly settings: DataProvider<Setting>;

    /**
     * 应用详细数据
     * @see https://sereindev.github.io/docs/development/plugins/references/app
     * @since 2.1.0
     */
    readonly app: App;

    /**
     * 命令
     * @since 2.0.0
     */
    readonly command: CommandProperty;

    /**
     * 网页服务器
     * @see https://sereindev.github.io/docs/development/plugins/references/web_server
     * @since 2.1.0
     */
    readonly webServer: WebServer

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
     * 输出信息
     * @param data 输出内容
     * @see https://sereindev.github.io/docs/development/plugins/references/output#%E8%BE%93%E5%87%BA%E4%BF%A1%E6%81%AF
     * @since 2.0.0
     */
    log(...data: string[]): void;

    /**
     * 获取内置服务
     * @param type 类型文本
     * @returns 内置服务对象
     * @see https://sereindev.github.io/docs/development/plugins/references/others/#%E8%8E%B7%E5%8F%96%E6%9C%8D%E5%8A%A1
     * @since 2.0.0
     */
    getService(type: string): ClrType;
}
