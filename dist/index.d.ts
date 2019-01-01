/// <reference types="node" />
import * as pug from 'pug';
import puppeteer, { PDFOptions } from 'puppeteer';
import { Options as SassOptions } from 'node-sass';
declare namespace TeaSchool {
    interface GeneratePdfOptions {
        styleOptions?: SassOptions;
        htmlTemplateFn?: pug.compileTemplate;
        htmlTemplatePath?: string;
        htmlTemplateOptions?: pug.Options & pug.LocalsObject;
        pdfOptions?: PDFOptions;
    }
    const generatePdf: (options: GeneratePdfOptions, puppeteerOptions?: puppeteer.LaunchOptions | undefined) => Promise<Buffer>;
}
export declare const generatePdf: (options: TeaSchool.GeneratePdfOptions, puppeteerOptions?: puppeteer.LaunchOptions | undefined) => Promise<Buffer>;
export interface GeneratePdfOptions extends TeaSchool.GeneratePdfOptions {
}
export default TeaSchool;
