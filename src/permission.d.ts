declare interface PermissionProperty {
    /**
     * 注册节点
     *
     * 将节点注册到Serein的权限管理器中，方便用户填写权限配置
     * @param node 节点
     * @param description 描述
     * @see https://sereindev.github.io/docs/development/plugins/references/permission_group#注册节点
     * @since 2.0.0
     */
    register(node: string, description?: string): void;

    /**
     * 注销节点
     *
     * 将节点从Serein的权限管理器中删除
     * @param node 节点
     * @see https://sereindev.github.io/docs/development/plugins/references/permission_group#注销节点
     * @since 2.0.0
     */
    unregister(node: string): void;

    readonly groups: GroupManager & GroupManagerIndexer;
}

declare type PermissionIndexer = {
    /**
     * 获取指定节点
     * @since 2.0.0
     */
    readonly [node: string]: string | null;
};

declare interface GroupManager {
    /**
     * 所有权限组Id
     * @see https://sereindev.github.io/docs/development/plugins/references/permission_group#%E8%8E%B7%E5%8F%96%E6%89%80%E6%9C%89%E6%9D%83%E9%99%90%E7%BB%84id
     * @since 2.0.0
     */
    get ids(): string[];

    /**
     * 添加权限组
     * @param id Id
     * @param group 权限组对象
     * @see https://sereindev.github.io/docs/development/plugins/references/permission_group#%E6%B7%BB%E5%8A%A0%E6%9D%83%E9%99%90%E7%BB%84
     * @since 2.0.0
     */
    add(id: string, group: Group): void;

    /**
     * 删除权限组
     * @param id Id
     * @returns 删除结果
     * @see https://sereindev.github.io/docs/development/plugins/references/permission_group#%E5%88%A0%E9%99%A4%E6%9D%83%E9%99%90%E7%BB%84
     * @since 2.0.0
     */
    remove(id: string): boolean;

    /**
     * 计算指定用户的权限
     *
     * 当ignoreWildcard为false时，将会计算通配符权限，具体行为如下：
     * 如果用户拥有A.*权限，那么用户也拥有A节点权限和以A.开头的所有节点权限
     * @param id 用户Id
     * @param ignoreWildcard 是否忽略通配符
     * @returns 包含此用户的所有权限值的字典
     * @see https://sereindev.github.io/docs/development/plugins/references/permission_group#%E8%AE%A1%E7%AE%97%E6%8C%87%E5%AE%9A%E7%94%A8%E6%88%B7%E7%9A%84%E6%9D%83%E9%99%90
     * @since 2.0.0
     */
    getAllPermissions(
        id: number,
        ignoreWildcard?: boolean
    ): Record<string, boolean | null>;
}

declare type GroupManagerIndexer = {
    /**
     * 获取权限组
     * @since 2.0.0
     */
    readonly [key: string]: Group;
};

/**
 * 权限组
 */
declare type Group = {
    /**
     * 名称
     * @since 2.0.0
     */
    name: string;

    /**
     * 描述
     * @since 2.0.0
     */
    description: string;

    /**
     * 优先级
     * @since 2.0.0
     */
    priority: number;

    /**
     * 权限组下的节点
     * @since 2.0.0
     */
    nodes: { [key: string]: boolean | null };

    /**
     * 父级权限组Id数组
     * @since 2.0.0
     */
    parents: string[];

    /**
     * 成员（用户Id数组）
     * @since 2.0.0
     */
    members: number[];
};
