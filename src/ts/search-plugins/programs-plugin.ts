import * as fs from "fs";
import * as os from "os";
import * as path from "path";
import { FileHelpers } from "../helpers/file-helpers";
import { IconManager } from "../icon-manager/icon-manager";
import { Injector } from "../injector";
import { Program } from "../programs-plugin/program";
import { ProgramRepository } from "../programs-plugin/program-repository";
import { SearchResultItem } from "../search-result-item";
import { SearchPlugin } from "./search-plugin";

export class ProgramsPlugin implements SearchPlugin {
    private programs: Program[];
    private iconManager: IconManager;

    public constructor(programRepository: ProgramRepository) {
        this.iconManager = Injector.getIconManager(os.platform());
        this.programs = programRepository.getPrograms();
    }

    public getAllItems(): SearchResultItem[] {
        return this.programs.map((program): SearchResultItem => {
            return {
                executionArgument: program.executionArgument,
                icon: this.iconManager.getProgramIcon(),
                name: program.name,
                tags: [],
            } as SearchResultItem;
        });
    }
}
