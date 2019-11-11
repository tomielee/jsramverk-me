/**
 * Test for getting with mocha and Selenium
 * MochaTest.js
 */
"use strict";



const assert = require("assert");
const { Builder, By } = require("selenium-webdriver");
const Firefox = require('selenium-webdriver/firefox');
const firefoxOptions = new Firefox.Options().headless();

const URL = "http://localhost:3000/#";

let browser;

// Test suite
describe("Test Me-app", () => {

    beforeEach(async function () {
        this.timeout(30000);

        browser = await new Builder()
            .forBrowser('firefox')
            .build();

        await browser.get(URL);

    });

    afterEach(function (done) {
        browser.quit();
        done();
    });

    it("Test index", async function () {
        const currurl = await browser.getCurrentUrl();
        const title = await browser.getTitle();

        console.log("url: ", currurl, "| title: ", title);
        assert.equal(title, "Me-Me-Me", "== title is same.");
    });

    it("Test reports", async function () {
        //find link and click.
        const link = await browser.findElement(By.linkText("Reports"));
        await link.click();

        //get content.
        const currurl = await browser.getCurrentUrl();
        assert.ok(currurl.endsWith("/reports"));
        console.log("url: ", currurl, " and it ends with /reports: ", currurl.endsWith("/reports"));
    })

});