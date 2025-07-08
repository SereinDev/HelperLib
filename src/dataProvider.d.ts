/**
 * 数据提供者
 * @since 2.1.0
 * @see https://sereindev.github.io/docs/development/plugins/references/datas
 */
declare interface DataProvider<T> {
    /**
     * 值
     * @see https://sereindev.github.io/docs/development/plugins/references/datas#值
     */
    get value(): T;

    /**
     * 读取
     * @since 2.1.0
     * @see https://sereindev.github.io/docs/development/plugins/references/datas#读取
     */
    read(): T;

    /**
     * 立即保存
     * @since 2.1.0
     * @see https://sereindev.github.io/docs/development/plugins/references/datas#立即保存
     */
    save(): void;

    /**
     * 延时保存（推荐）
     * 
     * 可用于减少保存频率，避免频繁写入磁盘
     * @since 2.1.0
     * @see https://sereindev.github.io/docs/development/plugins/references/datas#延时保存
     */
    saveAsyncWithDebounce(): void;
}
