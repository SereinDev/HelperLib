declare namespace serein {
    /**
     * 获取系统信息
     * @returns 系统信息
     */
    function getSysInfo(): SysInfo;

    /**
     * 获取CPU使用率
     * - Linux版本下返回`undefined`
     * @returns CPU使用率
     */
    function getCPUUsage(): number;

    /**
     * 获取网速
     * @returns `[0]`为上传网速，`[1]`为下载网速
     */
    function getNetSpeed(): [string, string];
}

declare interface SysInfo {
    readonly architecture: string;
    readonly name: string;
    readonly hardware: Hardware;
    readonly frameworkVersion: FrameworkVersion;
    readonly javaVersion: JavaVersion;
    readonly isMono: boolean;
    readonly operatingSystemType: number;
}

declare interface Hardware {
    readonly CPUs: CPU[];
    readonly GPUs: GPU[];
    readonly RAM: RAM;
}

declare interface CPU {
    readonly name: string;
    readonly brand: string;
    readonly architecture: string;
    readonly physicalCores: number;
    readonly logicalCores: number;
    readonly frequency: number;
}

declare interface GPU {
    readonly name: string;
    readonly brand: string;
    readonly resolution: string;
    readonly refreshRate: number;
    readonly memoryTotal: number;
}

declare interface RAM {
    readonly free: number;
    readonly total: number;
}

declare interface FrameworkVersion {
    readonly major: number;
    readonly minor: number;
    readonly build: number;
    readonly revision: number;
    readonly majorRevision: number;
    readonly minorRevision: number;
}

declare interface JavaVersion {
    readonly major: number;
    readonly minor: number;
    readonly build: number;
    readonly revision: number;
    readonly majorRevision: number;
    readonly minorRevision: number;
}
