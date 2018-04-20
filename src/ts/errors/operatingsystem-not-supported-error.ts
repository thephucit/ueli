import { inherits } from "util";

export class OperatingSystemNotSupportedError extends Error {
    constructor() {
        super("This operating system is not supported");
    }
}
