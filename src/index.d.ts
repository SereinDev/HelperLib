/// <reference no-default-lib="true"/>
/// <reference lib="ESNext" />
/// <reference path="clr.d.ts"/>
/// <reference path="console.d.ts"/>
/// <reference path="encoding.d.ts"/>
/// <reference path="storages.d.ts"/>
/// <reference path="scriptInstance.d.ts"/>
/// <reference path="modules/fs.d.ts"/>
/// <reference path="modules/process.d.ts"/>

/**
 * 当前脚本实例
 * @since 2.0.0
 */
declare const serein: ScriptInstance;

/**
 * 控制台
 * @since 2.0.0
 */
declare const console: Console;

/**
 * 当前文件路径
 * @since 2.0.0
 */
declare const __filename: string;

/**
 * 当前目录路径
 * @since 2.0.0
 */
declare const __dirname: string;

/**
 * 本地储存
 * @see https://sereindev.github.io/docs/development/plugins/references/storages#本地储存
 * @since 2.0.0
 */
declare const localStorage: Storage;

/**
 * 会话储存
 * @see https://sereindev.github.io/docs/development/plugins/references/storages#会话储存
 * @since 2.0.0
 */
declare const sessionStorage: Storage;

/**
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Window/setTimeout
 * @since 2.0.0
 */
declare function setTimeout(
    handler: Function,
    timeout: number,
    ...arguments: any[]
): number;

/**
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Window/clearTimeout
 * @since 2.0.0
 */
declare function clearTimeout(handle?: number): void;

/**
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Window/setInterval
 * @since 2.0.0
 */
declare function setInterval(
    handler: Function,
    timeout: number,
    ...arguments: any[]
): number;

/**
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Window/clearInterval
 * @since 2.0.0
 */
declare function clearInterval(handle?: number): void;

declare const window: {};
declare const exports: {};
declare const System: ClrType;
