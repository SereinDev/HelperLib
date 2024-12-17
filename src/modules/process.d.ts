declare namespace process {
    /**
     * @since 2.0.0
     */
    const arch: string;

    /**
     * @since 2.0.0
     */
    const argv: string[];

    /**
     * @since 2.0.0
     */
    const argv0: string;

    /**
     * @since 2.0.0
     */
    const env: { [key: string]: string | null };

    /**
     * @since 2.0.0
     */
    function chdir(directory: string): string;

    /**
     * @since 2.0.0
     */
    function cwd(): string;

    /**
     * @since 2.0.0
     */
    function exit(code?: number): void;
}
