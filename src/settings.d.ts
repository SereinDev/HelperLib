/// <reference path="packets.d.ts"/>

declare enum ReactionType {
    ServerStart = 0,

    ServerExitedNormally = 1,

    ServerExitedUnexpectedly = 2,

    GroupIncreased = 3,

    GroupDecreased = 4,

    GroupPoke = 5,

    BindingSucceeded = 6,

    UnbindingSucceeded = 7,

    PermissionDeniedFromPrivateMsg = 8,

    PermissionDeniedFromGroupMsg = 9,

    SereinCrash = 10,
}

declare enum Theme {
    Default = 0,

    Light = 1,

    Dark = 2,
}

declare enum AdapterType {
    OneBot_ForwardWebSocket = 0,

    OneBot_ReverseWebSocket = 1,

    Satori = 2,

    Plugin = 3,
}

declare enum OneBotVersion {
    V11 = 0,

    V12 = 1,
}

declare interface CertificateSetting {
    isEnabled: boolean;

    autoRegisterCertificate: boolean;

    autoLoadCertificate: boolean;

    path?: string;

    password?: string;
}

declare interface OneBotSetting {
    version: OneBotVersion;

    accessToken: string;

    autoEscape: boolean;

    grantPermissionToGroupOwnerAndAdmins: boolean;

    headers: { [key: string]: string };

    uri: string;

    subProtocols: string[];

    autoReconnect: boolean;
}

declare interface SatoriSetting {
    uri: string;

    accessToken: string;
}

declare interface ConnectionSetting {
    adapter: AdapterType;

    connectWhenSettingUp: boolean;

    saveLog: boolean;

    outputData: boolean;

    listenedIds: string[];

    administratorUserIds: string[];

    self: Self;

    oneBot: OneBotSetting;

    satori: SatoriSetting;
}

declare interface WebApiSetting {
    isEnabled: boolean;

    urlPrefixes: string[];

    allowCrossOrigin: boolean;

    maxRequestsPerSecond: number;

    whiteList: string[];

    accessTokens: string[];

    certificate: CertificateSetting;
}

declare interface ApplicationSetting {
    autoUpdate: boolean;

    checkUpdate: boolean;

    customTitle: string;

    enableSentry: boolean;

    theme: Theme;

    cliCommandHeader: string;

    maximumWaitTimeForPluginEvents: number;

    jsDefaultAssemblies: string[];

    jsFilesToExcludeFromLoading: string[];

    disableBindingManagerWhenAllServersStopped: boolean;

    gameIdValidationPattern: string;

    multiLineMatchingPatterns: string[];
}

declare interface Setting {
    connection: ConnectionSetting;

    webApi: WebApiSetting;

    application: ApplicationSetting;

    reactions: { [key in ReactionType]: string[] };
}
