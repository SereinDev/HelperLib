/// <reference path="appType.d.ts"/>

declare type MetaData = {
    /**
     * 版本
     * @see https://sereindev.github.io/docs/development/plugins/references/metadata/#%E7%89%88%E6%9C%AC
     */
    readonly version: string;

    /**
     * 详细版本
     * @see https://sereindev.github.io/docs/development/plugins/references/metadata/#%E8%AF%A6%E7%BB%86%E7%89%88%E6%9C%AC
     */
    readonly fullVersion: string;

    /**
     * 类型
     * @see https://sereindev.github.io/docs/development/plugins/references/metadata/#%E7%B1%BB%E5%9E%8B
     */
    readonly type: AppType;
};
