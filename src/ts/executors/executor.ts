export interface Executor {
    execute(executionArgument: string): void;
    hideAfterExecution(): boolean;
}
