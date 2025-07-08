/**
 * 绑定记录
 * @since 2.1.0
 */
declare interface BindingRecord {
    /**
     * 用户Id（主键）
     */
    readonly userId: string;

    /**
     * 游戏Id列表
     */
    readonly gameIds: readonly string[];

    /**
     * 显示名称
     */
    readonly shownName: string;

    /**
     * 绑定时间
     */
    get time(): Date;
}

declare class BindingManager {
    /**
     * 所有绑定记录
     * @see https://sereindev.github.io/docs/development/plugins/references/binding#所有绑定记录
     */
    readonly records: readonly BindingRecord[];

    /**
     * 检验游戏Id是否符合规范
     * @param gameId 游戏Id
     * @throws {Error} 如果游戏Id不符合规范则抛出错误
     * @see https://sereindev.github.io/docs/development/plugins/references/binding#检验游戏-id
     * @since 2.1.0
     */
    validateGameId(gameId: string): void;

    /**
     * 检查用户与游戏的绑定冲突
     * @param userId 用户Id
     * @param gameId 游戏Id
     * @throws {Error} 如果存在冲突则抛出错误
     * @see https://sereindev.github.io/docs/development/plugins/references/binding#检查冲突
     * @since 2.1.0
     */
    checkConflict(userId: string, gameId: string): void;

    /**
     * 直接添加绑定记录
     * @param bindingRecord 绑定记录
     * @throws {Error} 如果记录不符合规范则抛出错误
     * @see https://sereindev.github.io/docs/development/plugins/references/binding#直接添加
     * @since 2.1.0
     */
    add(bindingRecord: BindingRecord): void;

    /**
     * 通过用户 Id 和游戏 Id 添加绑定记录
     * @param userId 用户Id
     * @param gameId 游戏Id
     * @param shownName 显示名称
     * @see https://sereindev.github.io/docs/development/plugins/references/binding#通过用户-id-和游戏-id-添加
     * @since 2.1.0
     */
    add(userId: string, gameId: string, shownName?: string): void;

    /**
     * 移除绑定记录
     * @param userId 用户Id
     * @param gameId 游戏Id
     * @see https://sereindev.github.io/docs/development/plugins/references/binding#删除绑定
     * @since 2.1.0
     */
    remove(userId: string, gameId: string): void;
}
