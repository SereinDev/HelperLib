/**
 * @see https://sereindev.github.io/docs/development/plugins/references/output
 */
declare interface Console {
    /**
     * 输出信息
     * @param data 输出内容
     * @see https://sereindev.github.io/docs/development/plugins/references/output#%E8%BE%93%E5%87%BA%E4%BF%A1%E6%81%AF
     * @since 2.0.0
     */
    log(...data: any[]): void;

    /**
     * 输出信息
     * @param data 输出内容
     * @see https://sereindev.github.io/docs/development/plugins/references/output#%E8%BE%93%E5%87%BA%E4%BF%A1%E6%81%AF
     * @since 2.0.0
     */
    info(...data: any[]): void;

    /**
     * 输出警告
     * @param data 输出内容
     * @see https://sereindev.github.io/docs/development/plugins/references/output#%E8%BE%93%E5%87%BA%E8%AD%A6%E5%91%8A
     * @since 2.0.0
     */
    warn(...data: any[]): void;

    /**
     * 输出错误
     * @param data 输出内容
     * @see https://sereindev.github.io/docs/development/plugins/references/output#%E8%BE%93%E5%87%BA%E9%94%99%E8%AF%AF
     * @since 2.0.0
     */
    error(...data: any[]): void;
}
