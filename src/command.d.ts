/// <reference path="clr.d.ts"/>
/// <reference path="packets.d.ts"/>

declare interface CommandArguments {
    target: string | null;

    autoEscape: boolean | null;

    asSegments: boolean | null;

    self: Self | null;

    useUnicode: boolean | null;
}

declare interface CommandProperty {
    /**
     * 解析命令字符串
     * @param command 命令字符串
     * @returns 返回解析后的命令对象
     */
    parse(command: string): Command;

    /**
     * 执行命令
     * @param command 命令对象
     */
    runAsync(command: Command): Promise<void>;

    /**
     * 设置变量
     *
     * 当`value`为`null`时会删除变量
     * @param name 变量名
     * @param value 变量值
     */
    setVariable(name: string, value: string | null): void;
}

declare enum MatchFieldType {
    Disabled = 0,

    ServerOutput = 1,

    ServerInput = 2,

    GroupMsg = 3,

    PrivateMsg = 4,

    SelfMsg = 5,

    ChannelMsg = 6,

    GuildMsg = 7,
}

declare enum CommandOrigin {
    Null = 0,

    Msg = 1,

    ServerOutput = 2,

    ServerInput = 3,

    Schedule = 4,

    Reaction = 5,

    Plugin = 6,
}

declare enum CommandType {
    Invalid = 0,

    ExecuteShellCommand = 1,

    InputServer = 2,

    SendGroupMsg = 3,

    SendPrivateMsg = 4,

    SendChannelMsg = 5,

    SendGuildMsg = 6,

    SendReply = 7,

    SendData = 8,

    Bind = 9,

    Unbind = 10,

    ExecuteJavascriptCodes = 11,

    Debug = 12,
}

declare interface Command {
    origin: CommandOrigin;

    type: CommandType;

    arguments?: CommandArguments;

    body: string;
}

declare interface MatchExclusion {
    channels: readonly string[];

    groups: readonly string[];

    users: readonly string[];

    servers: readonly string[];
}

declare interface Match {
    regExp: string;

    fieldType: MatchFieldType;

    requireAdmin: boolean;

    exclusions: string;

    description: string;

    command: string;

    readonly regexInstance?: RegExp;

    readonly exclusionInstance: MatchExclusion;

    readonly commandInstance?: Command;

    forceUpdate(): void;
}

declare interface Schedule {
    expression?: string;

    command?: string;

    description?: string;

    isEnabled: boolean;

    readonly commandInstance?: Command;

    readonly nextTime?: Date;

    readonly isRunning: boolean;

    readonly crontabSchedule: ClrType;

    forceUpdate(): void;
}
