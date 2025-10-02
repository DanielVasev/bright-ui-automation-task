/* import { Page } from "@playwright/test"
import { title } from "process"
import { text } from "stream/consumers"

export class BasePage{

    readonly page:Page

    constructor(page:Page){
        this.page = page
    }

    async goto(path: string){
        await this.page.goto(path)
    }

    async waitForTitle(titke: string){
        await this.page.waitForSelector('text=$(title)')
    }
} */