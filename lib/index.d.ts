import { Neovim } from 'neovim';
import { SourceStat, CompleteOption } from './types';
import Increment from './increment';
export default class CompletePlugin {
    nvim: Neovim;
    increment: Increment;
    private debouncedOnChange;
    constructor(nvim: Neovim);
    private handleError;
    cocInitAsync(): Promise<void>;
    cocInitSync(): Promise<void>;
    private onInit;
    cocBufUnload(args: any[]): Promise<void>;
    cocBufChange(args: any[]): Promise<void>;
    cocStart(args: [CompleteOption]): Promise<void>;
    cocInsertCharPre(args: any[]): Promise<void>;
    cocInsertLeave(): Promise<void>;
    cocCompleteDone(args: any[]): Promise<void>;
    cocTextChangedP(): Promise<void>;
    cocTextChangedI(args: any): Promise<void>;
    cocResult(args: any[]): Promise<void>;
    cocCheckHealth(): Promise<string[] | null>;
    cocSourceStat(): Promise<SourceStat[]>;
    cocSourceToggle(args: any): Promise<string>;
    cocSourceRefresh(args: any): Promise<boolean>;
    cocFileTypeChange(args: any): Promise<void>;
    cocShowSignature(args: any): Promise<void>;
    cocShowType(): Promise<void>;
    cocShowDoc(): Promise<void>;
    cocJumpDefninition(): Promise<void>;
    private callServiceFunc;
    private onFileType;
    private onBufferChange;
    private initConfig;
    private onCompleteStart;
}
