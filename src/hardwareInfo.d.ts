/// <reference path="clr.d.ts"/>

declare interface HardwareInfo {
    readonly operatingSystem: OperatingSystem;
    readonly memoryStatus: MemoryStatus;
    readonly batteryList: Battery[];
    readonly biosList: Bios[];
    readonly computerSystemList: ComputerSystem[];
    readonly cpuList: Cpu[];
    readonly driveList: Drive[];
    readonly keyboardList: Keyboard[];
    readonly memoryList: Memory[];
    readonly monitorList: Monitor[];
    readonly motherboardList: Motherboard[];
    readonly mouseList: Mouse[];
    readonly networkAdapterList: ClrType[];
    readonly printerList: Printer[];
    readonly soundDeviceList: SoundDevice[];
    readonly videoControllerList: VideoController[];
}

declare interface OperatingSystem {
    get name(): string;
    get versionString(): string;
    get version(): ClrType;
}

declare interface MemoryStatus {
    get totalPhysical(): number;
    get availablePhysical(): number;
    get totalPageFile(): number;
    get availablePageFile(): number;
    get totalVirtual(): number;
    get availableVirtual(): number;
    get availableExtendedVirtual(): number;
}

declare interface Battery {
    get fullChargeCapacity(): number;
    get designCapacity(): number;
    get batteryStatus(): number;
    get estimatedChargeRemaining(): number;
    get estimatedRunTime(): number;
    get expectedLife(): number;
    get maxRechargeTime(): number;
    get timeOnBattery(): number;
    get timeToFullCharge(): number;
    get batteryStatusDescription(): string;
}

declare interface Bios {
    get caption(): string;
    get description(): string;
    get manufacturer(): string;
    get name(): string;
    get releaseDate(): string;
    get serialNumber(): string;
    get softwareElementID(): string;
    get version(): ClrType;
}

declare interface ComputerSystem {
    get caption(): string;
    get description(): string;
    get identifyingNumber(): string;
    get name(): string;
    get SKUNumber(): string;
    get UUID(): string;
    get vendor(): string;
    get version(): ClrType;
}

declare interface Cpu {
    get caption(): string;
    get currentClockSpeed(): number;
    get description(): string;
    get l1InstructionCacheSize(): number;
    get l1DataCacheSize(): number;
    get l2CacheSize(): number;
    get l3CacheSize(): number;
    get manufacturer(): string;
    get maxClockSpeed(): number;
    get name(): string;
    get numberOfCores(): number;
    get numberOfLogicalProcessors(): number;
    get processorId(): string;
    get secondLevelAddressTranslationExtensions(): boolean;
    get socketDesignation(): string;
    get virtualizationFirmwareEnabled(): boolean;
    get VMMonitorModeExtensions(): boolean;
    get percentProcessorTime(): number;
    get cpuCoreList(): CpuCore[];
}

declare interface CpuCore {
    get name(): string;
    get percentProcessorTime(): number;
}

declare interface Drive {
    get partitionList(): Partition[];
    get caption(): string;
    get description(): string;
    get firmwareRevision(): string;
    get index(): number;
    get manufacturer(): string;
    get model(): string;
    get name(): string;
    get partitions(): number;
    get serialNumber(): string;
    get size(): number;
}

declare interface Partition {
    get volumeList(): Volume[];
    get bootable(): boolean;
    get bootPartition(): boolean;
    get caption(): string;
    get description(): string;
    get diskIndex(): number;
    get index(): number;
    get name(): string;
    get primaryPartition(): boolean;
    get size(): number;
    get startingOffset(): number;
}

declare interface Volume {
    get caption(): string;
    get compressed(): boolean;
    get description(): string;
    get fileSystem(): string;
    get freeSpace(): number;
    get name(): string;
    get size(): number;
    get volumeName(): string;
    get volumeSerialNumber(): string;
}

declare interface Keyboard {
    get caption(): string;
    get description(): string;
    get name(): string;
    get numberOfFunctionKeys(): number;
}

declare interface Memory {
    get bankLabel(): string;
    get capacity(): number;
    get formFactor(): number;
    get manufacturer(): string;
    get maxVoltage(): number;
    get minVoltage(): number;
    get partNumber(): string;
    get serialNumber(): string;
    get speed(): number;
}

declare interface Monitor {
    get caption(): string;
    get description(): string;
    get monitorManufacturer(): string;
    get monitorType(): string;
    get name(): string;
    get pixelsPerXLogicalInch(): number;
    get pixelsPerYLogicalInch(): number;
    get active(): boolean;
    get manufacturerName(): string;
    get productCodeID(): string;
    get serialNumberID(): string;
    get userFriendlyName(): string;
    get weekOfManufacture(): number;
    get yearOfManufacture(): number;
}

declare interface Motherboard {
    get manufacturer(): string;
    get product(): string;
    get serialNumber(): string;
}

declare interface Mouse {
    get caption(): string;
    get description(): string;
    get manufacturer(): string;
    get name(): string;
    get numberOfButtons(): number;
}

declare interface Printer {
    get caption(): string;
    get default(): boolean;
    get description(): string;
    get horizontalResolution(): number;
    get local(): boolean;
    get name(): string;
    get network(): boolean;
    get shared(): boolean;
    get verticalResolution(): number;
}

declare interface SoundDevice {
    get caption(): string;
    get description(): string;
    get manufacturer(): string;
    get name(): string;
    get productName(): string;
}

declare interface VideoController {
    get adapterRAM(): number;
    get caption(): string;
    get currentBitsPerPixel(): number;
    get currentHorizontalResolution(): number;
    get currentNumberOfColors(): number;
    get currentRefreshRate(): number;
    get currentVerticalResolution(): number;
    get description(): string;
    get driverDate(): string;
    get driverVersion(): string;
    get manufacturer(): string;
    get maxRefreshRate(): number;
    get minRefreshRate(): number;
    get name(): string;
    get videoModeDescription(): string;
    get videoProcessor(): string;
}
