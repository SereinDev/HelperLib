/**
 * 导入.NET程序集   
 * @param name 类名称
 * @returns 返回程序集
 * @see https://sereindev.github.io/docs/development/plugins/js/clr
 * @since 2.0.0
 */
declare function importNamespace(name: string): ClrType;

declare type ClrType = {
    [key: string]: any;
};
