declare namespace fs {
    /**
     * @since 2.0.0
     */
    function appendFileSync(
        path: string,
        data: string,
        options?: { encoding?: string }
    ): void;

    /**
     * @since 2.0.0
     */
    function appendFileSync(
        path: string,
        data: Uint8Array,
        options?: { encoding?: string }
    ): void;

    /**
     * @since 2.0.0
     */
    function closeSync(fd: number): void;

    /**
     * @since 2.0.0
     */
    function copyFileSync(src: string, dest: string, flags?: number): void;

    /**
     * @since 2.0.0
     */
    function existsSync(path: string): boolean;

    /**
     * @since 2.0.0
     */
    function fsyncSync(fd: number): void;

    /**
     * @since 2.0.0
     */
    function ftruncateSync(fd: number, len?: number): void;

    /**
     * @since 2.0.0
     */
    function futimesSync(fd: number, atime: Date, mtime: Date): void;

    /**
     * @since 2.0.0
     */
    function globSync(
        pattern: string,
        options?: { cwd?: string; exclude?: (path: string) => boolean }
    ): string[];

    /**
     * @since 2.0.0
     */
    function globSync(
        pattern: string[],
        options?: { cwd?: string; exclude?: (path: string) => boolean }
    ): string[];

    /**
     * @since 2.0.0
     */
    function mkdirSync(path: string, options?: { mode?: number }): void;

    /**
     * @since 2.0.0
     */
    function mkdirSync(path: string, mode?: number): void;

    /**
     * @since 2.0.0
     */
    function mkdtempSync(
        prefix: string,
        options?: { encoding?: string }
    ): string;

    /**
     * @since 2.0.0
     */
    function openSync(path: string, flags: string, mode?: number): number;

    /**
     * @since 2.0.0
     */
    function readFileSync(
        path: string,
        options?: { encoding?: string }
    ): string;

    /**
     * @since 2.0.0
     */
    function readdirSync(
        path: string,
        options?: { encoding?: string }
    ): string[];

    /**
     * @since 2.0.0
     */
    function readSync(
        fd: number,
        buffer: Uint8Array,
        offset: number,
        length: number,
        position?: number
    ): number;

    /**
     * @since 2.0.0
     */
    function renameSync(oldPath: string, newPath: string): void;

    /**
     * @since 2.0.0
     */
    function rmdirSync(path: string, options?: { recursive?: boolean }): void;

    /**
     * @since 2.0.0
     */
    function rmSync(path: string, options?: { recursive?: boolean }): void;

    /**
     * @since 2.0.0
     */
    function symlinkSync(target: string, path: string, type?: string): void;

    /**
     * @since 2.0.0
     */
    function truncateSync(path: string, len?: number): void;

    /**
     * @since 2.0.0
     */
    function unlinkSync(path: string): void;

    /**
     * @since 2.0.0
     */
    function utimesSync(path: string, atime: Date, mtime: Date): void;

    /**
     * @since 2.0.0
     */
    function writeFileSync(
        path: string,
        data: string,
        options?: { encoding?: string }
    ): void;

    /**
     * @since 2.0.0
     */
    function writeFileSync(
        path: string,
        data: Uint8Array,
        options?: { encoding?: string }
    ): void;

    /**
     * @since 2.0.0
     */
    function writeSync(
        fd: number,
        buffer: Uint8Array,
        offset?: number,
        length?: number,
        position?: number
    ): number;

    /**
     * @since 2.0.0
     */
    function writeSync(
        fd: number,
        data: string,
        position?: number,
        encoding?: string
    ): number;
}
