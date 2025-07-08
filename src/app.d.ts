declare type App = {
    /**
     * 版本
     * @see https://sereindev.github.io/docs/development/plugins/references/app/#版本
     * @since 2.1.0
     */
    readonly version: {
        major: number;
        minor: number;
        revision: number;
        build: number;
        toString: () => string;
    };

    /**
     * 详细版本
     * @see https://sereindev.github.io/docs/development/plugins/references/app/#详细版本
     * @since 2.0.0
     */
    readonly fullVersion: string;

    /**
     * 类型
     * @see https://sereindev.github.io/docs/development/plugins/references/app/#类型
     * @since 2.0.0
     */
    readonly type: AppType;

    /**
     * 程序集名称
     * @example "Serein.Core, Version=2.1.0.0, Culture=neutral, PublicKeyToken=null"
     * @see https://sereindev.github.io/docs/development/plugins/references/app/#程序集名称
     * @since 2.1.0
     */
    readonly assemblyName: string;

    /**
     * 是否为发布配置编译
     * @see https://sereindev.github.io/docs/development/plugins/references/app/#是否为发布配置编译
     * @since 2.1.0
     */
    readonly isReleaseConfiguration: boolean;

    /**
     * 是否为单文件发布
     * @see https://sereindev.github.io/docs/development/plugins/references/app/#是否为单文件发布
     * @since 2.1.0
     */
    readonly isSingleFile: boolean;
};

/**
 * 应用类型
 * @since 2.0.0
 */
declare enum AppType {
    Unknown = 0,

    Cli = 1,

    Lite = 2,

    Plus = 3,

    Tests = 4,
}
