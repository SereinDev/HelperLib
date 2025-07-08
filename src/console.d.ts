/**
 * @see https://sereindev.github.io/docs/development/plugins/references/output
 */
declare interface Console {
    /**
     * 输出信息
     * @param data 输出内容
     * @see https://sereindev.github.io/docs/development/plugins/references/output#输出信息
     * @since 2.0.0
     */
    log(...data: any[]): void;

    /**
     * 输出信息
     * @param data 输出内容
     * @see https://sereindev.github.io/docs/development/plugins/references/output#输出信息
     * @since 2.0.0
     */
    info(...data: any[]): void;

    /**
     * 输出警告
     * @param data 输出内容
     * @see https://sereindev.github.io/docs/development/plugins/references/output#输出警告
     * @since 2.0.0
     */
    warn(...data: any[]): void;

    /**
     * 输出错误
     * @param data 输出内容
     * @see https://sereindev.github.io/docs/development/plugins/references/output#输出错误
     * @since 2.0.0
     */
    error(...data: any[]): void;
}
