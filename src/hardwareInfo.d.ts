/// <reference path="clr.d.ts"/>

declare interface HardwareInfo {
    operatingSystem: OperatingSystem;
    memoryStatus: MemoryStatus;
    batteryList: Battery[];
    biosList: Bios[];
    computerSystemList: ComputerSystem[];
    cpuList: CpuList[];
    driveList: Drive[];
    keyboardList: Keyboard[];
    memoryList: Memory[];
    monitorList: Monitor[];
    motherboardList: Motherboard[];
    mouseList: Mouse[];
    networkAdapterList: ClrType[];
    printerList: Printer[];
    soundDeviceList: SoundDevice[];
    videoControllerList: VideoController[];
}

declare interface OperatingSystem {
    name: string;
    versionString: string;
    version: ClrType;
}

declare interface MemoryStatus {
    totalPhysical: number;
    availablePhysical: number;
    totalPageFile: number;
    availablePageFile: number;
    totalVirtual: number;
    availableVirtual: number;
    availableExtendedVirtual: number;
}

declare interface Battery {
    fullChargeCapacity: number;
    designCapacity: number;
    batteryStatus: number;
    estimatedChargeRemaining: number;
    estimatedRunTime: number;
    expectedLife: number;
    maxRechargeTime: number;
    timeOnBattery: number;
    timeToFullCharge: number;
    batteryStatusDescription: string;
}

declare interface Bios {
    caption: string;
    description: string;
    manufacturer: string;
    name: string;
    releaseDate: string;
    serialNumber: string;
    softwareElementID: string;
    version: ClrType;
}

declare interface ComputerSystem {
    caption: string;
    description: string;
    identifyingNumber: string;
    name: string;
    SKUNumber: string;
    UUID: string;
    vendor: string;
    version: ClrType;
}

declare interface CpuList {
    caption: string;
    currentClockSpeed: number;
    description: string;
    l1InstructionCacheSize: number;
    l1DataCacheSize: number;
    l2CacheSize: number;
    l3CacheSize: number;
    manufacturer: string;
    maxClockSpeed: number;
    name: string;
    numberOfCores: number;
    numberOfLogicalProcessors: number;
    processorId: string;
    secondLevelAddressTranslationExtensions: boolean;
    socketDesignation: string;
    virtualizationFirmwareEnabled: boolean;
    VMMonitorModeExtensions: boolean;
    percentProcessorTime: number;
    cpuCoreList: CpuCore[];
}

declare interface CpuCore {
    name: string;
    percentProcessorTime: number;
}

declare interface Drive {
    partitionList: Partition[];
    caption: string;
    description: string;
    firmwareRevision: string;
    index: number;
    manufacturer: string;
    model: string;
    name: string;
    partitions: number;
    serialNumber: string;
    size: number;
}

declare interface Partition {
    volumeList: Volume[];
    bootable: boolean;
    bootPartition: boolean;
    caption: string;
    description: string;
    diskIndex: number;
    index: number;
    name: string;
    primaryPartition: boolean;
    size: number;
    startingOffset: number;
}

declare interface Volume {
    caption: string;
    compressed: boolean;
    description: string;
    fileSystem: string;
    freeSpace: number;
    name: string;
    size: number;
    volumeName: string;
    volumeSerialNumber: string;
}

declare interface Keyboard {
    caption: string;
    description: string;
    name: string;
    numberOfFunctionKeys: number;
}

declare interface Memory {
    bankLabel: string;
    capacity: number;
    formFactor: number;
    manufacturer: string;
    maxVoltage: number;
    minVoltage: number;
    partNumber: string;
    serialNumber: string;
    speed: number;
}

declare interface Monitor {
    caption: string;
    description: string;
    monitorManufacturer: string;
    monitorType: string;
    name: string;
    pixelsPerXLogicalInch: number;
    pixelsPerYLogicalInch: number;
    active: boolean;
    manufacturerName: string;
    productCodeID: string;
    serialNumberID: string;
    userFriendlyName: string;
    weekOfManufacture: number;
    yearOfManufacture: number;
}

declare interface Motherboard {
    manufacturer: string;
    product: string;
    serialNumber: string;
}

declare interface Mouse {
    caption: string;
    description: string;
    manufacturer: string;
    name: string;
    numberOfButtons: number;
}

declare interface Printer {
    caption: string;
    default: boolean;
    description: string;
    horizontalResolution: number;
    local: boolean;
    name: string;
    network: boolean;
    shared: boolean;
    verticalResolution: number;
}

declare interface SoundDevice {
    caption: string;
    description: string;
    manufacturer: string;
    name: string;
    productName: string;
}

declare interface VideoController {
    adapterRAM: number;
    caption: string;
    currentBitsPerPixel: number;
    currentHorizontalResolution: number;
    currentNumberOfColors: number;
    currentRefreshRate: number;
    currentVerticalResolution: number;
    description: string;
    driverDate: string;
    driverVersion: string;
    manufacturer: string;
    maxRefreshRate: number;
    minRefreshRate: number;
    name: string;
    videoModeDescription: string;
    videoProcessor: string;
}
